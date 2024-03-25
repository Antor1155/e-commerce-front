import { mongooseConnect } from "@/Database/mongoose"
import { Order } from "@/models/Order"
import { Product } from "@/models/Product"

const stripe = require("stripe")(process.env.STRIPE_SK)

export const POST = async(req, res) =>{
    try{

        const {name, email, city, postalCode, streetAddress, country, products} = await req.json()
        
        await mongooseConnect()
        const productIds = products.split(",")
        const uniqueIds = [...new Set(productIds)]
        
        const productInfos = await Product.find({_id:uniqueIds})
        
        let line_items = []
        
        for (const productId of uniqueIds) {
            const productInfo = productInfos.find(p => p._id.toString() === productId)

            const quantity = productIds.filter(id => id === productId)?.length || 0
            
            if (quantity > 0 && productInfo){
                line_items.push({
                    quantity,
                    price_data: {
                        currency: "USD",
                        product_data: {name: productInfo.title},
                        unit_amount: quantity * productInfo.price * 100,
                    }
                });
            }
        }

        const orderDoc = await Order.create({
            name,
            email,
            city,
            postalCode,
            streetAddress,
            country,
            line_items,
            paid:false
        })


        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: "payment",
            customer_email: email,
            success_url: `${process.env.PUBLIC_URL}/cart?success=1`,
            cancel_url: `${process.env.PUBLIC_URL}/cart?canceled=1`,
            metadata:{orderId:orderDoc._id.toString()}
        })



        return new Response(JSON.stringify({
            url: session.url,

        }), {status: 200})
    }catch(error){
        console.log("error ***: ", error)
    }
}
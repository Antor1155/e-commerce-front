import { mongooseConnect } from "@/Database/mongoose"
import { Product } from "@/models/Product"


export const POST = async(req, res) =>{
    try{
        const {ids} = await req.json()
        await mongooseConnect()
        const cartProducts = await Product.find({_id:ids})
        
        return new Response(JSON.stringify(cartProducts), {status: 200})
    }catch(error){
        console.log("error in /api/cart/post *** ", error)
    }

}
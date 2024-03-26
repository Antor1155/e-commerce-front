import { mongooseConnect } from "@/Database/mongoose"
import { Order } from "@/models/Order"
import Stripe from "stripe";

const endpointSecret = process.env.STRIPE_ES

export const POST = async (req, res) => {
    try {
        await mongooseConnect()
        const sig = await req?.headers?.get('stripe-signature');

        const body = await req.text()

        let event = Stripe.webhooks.constructEvent(body, sig, endpointSecret);


        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed':
                const data = event.data.object;
                
                const orderId = data?.metadata?.orderId
                const paid = data?.payment_status === "paid"

                if(orderId && paid){
                    await Order.findByIdAndUpdate(orderId, {paid: true})

                    return new Response ("Order paid", {status:200})
                }

                break;
            // ... handle other event types
            default:
                console.log(`*** Unhandled event type ${event.type}`);
        }

    } catch (err) {
        // console.log("*** weebhook error", err)
        return new Response(`***weebhook error ${err}`, { status: 400 })
    }
}

export const config = {
    api: { bodyParser: false }
}
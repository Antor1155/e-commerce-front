import { mongooseConnect } from "@/Database/mongoose"
import { Order } from "@/models/Order"
import Stripe from "stripe";

const endpointSecret = process.env.STRIPE_ES

export const POST = async (req, res) => {
    try {
        // await mongooseConnect()
        const sig = await req.headers.get('stripe-signature');

        const body = await req.text()

        let event = Stripe.webhooks.constructEvent(body, sig, endpointSecret);


        // Handle the event
        switch (event.type) {
            case 'payment_intent.succeeded':
                const paymentIntentSucceeded = event.data.object;
                // Then define and call a function to handle the event payment_intent.succeeded
                console.log("*** payment event succeeded", paymentIntentSucceeded)

                break;
            // ... handle other event types
            default:
                console.log(`*** Unhandled event type ${event.type}`);
        }

    } catch (err) {
        console.log("*** weebhook error", err)
        return new Response(`***weebhook error ${err}`, { status: 400 })
    }
}

export const config = {
    api: { bodyParser: false }
}
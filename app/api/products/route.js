import { mongooseConnect } from "@/Database/mongoose";
import { Product } from "@/models/Product";

export const GET = async(req, res) =>{
    const params = new URL(req.url).searchParams
    const id = params.get("id")
    try{
        await mongooseConnect()
        let products;
        
        if(id){
            products = await Product.findById(id)
        }else{
            products = await Product.find({}, null, {sort: {'_id': -1}, limit:10})
        }
        
        
        return new Response(JSON.stringify(products), {status: 200})
    }catch(error){
        console.log("error in api/products/get *** ", error)
    }
}
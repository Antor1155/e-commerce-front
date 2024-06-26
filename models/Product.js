import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    title: {type:String, required: true},
    description: {type:String, required: true},
    price: {type:Number, required: true},
    images: {type:[String]},
    catagory: {type: mongoose.Types.ObjectId, ref:"Catagory"},
    properties: {type: Object}
    },{
        timestamps: true,
})

export const Product = models?.Product || model("Product", ProductSchema)



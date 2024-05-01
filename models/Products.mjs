/*import mongoose from 'mongoose'

const { Schema } = mongoose

const adsSchema = new Schema({
    title: {
        required: true,
        type: String,
        minLength: 2
    },
    description: String,
    amount: {
        required: true,
        type: Number
    }
})

const Ads = mongoose.model("ads", adsSchema)

export default Ads*/


import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: String,
});

const Products = mongoose.model("Products", productsSchema);

export default Products;

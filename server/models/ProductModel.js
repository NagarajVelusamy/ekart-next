import mongoose from "mongoose";
const Schema = mongoose.Schema;

const product = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
},
{ timestamps: false }
);

mongoose.models = {};

const Product = mongoose.model("Product", product);

export default Product;
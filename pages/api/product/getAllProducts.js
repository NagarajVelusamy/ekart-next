import connectDB from "server/middleware/mongodb";
import Product from "server/models/productModel";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const products = await Product.find();
      return res.status(200).send(products);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send("Request methond not found");
  }
};

export default connectDB(handler);
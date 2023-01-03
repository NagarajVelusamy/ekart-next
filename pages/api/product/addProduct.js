import connectDB from "server/middleware/mongodb";
import Product from "server/models/productModel";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, description } = req.body;
    try {
      const product = new Product({
        name,
        description
      });
      const createdProduct = await product.save();
      return res.status(200).send(createdProduct);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send("Request methond not found");
  }
};

export default connectDB(handler);
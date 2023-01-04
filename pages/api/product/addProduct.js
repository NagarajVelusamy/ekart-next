import connectDB from "server/middleware/mongodb";
import Product from "server/models/productModel";

const handler = async (req, res) => {
  if (req.method === "GET") {
    // const { name, description } = req.body;
    try {
      const product = new Product({
        name: "Apple Watch",
        description: "The aluminium case is lightweight and made from 100 per cent recycled aerospace-grade alloy.The Sport Band is made from a durable yet surprisingly soft high- performance fluoroelastomer, with an innovative pin - and - tuck closure.",
        category: "Watch",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU83_VW_34FR+watch-40-alum-midnight-nc-se_VW_34FR_WF_CO_GEO_IN?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171038000%2C1661473982737",
        price: 80000,
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
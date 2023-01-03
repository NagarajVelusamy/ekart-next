import { serializeData } from "utils/serializeData";

const products = ({ products }) => {
  return (
    <div>{
      products.map(product => (<li key={product._id}>{product.name}</li>))
    }</div>
  );
};

export async function getServerSideProps() {
  const products = await fetch(`${process.env.BASE_URL}/api/product/getAllProducts`)
  const data = await products.json();
  return { props: { products: serializeData(data) } }
}

export default products;
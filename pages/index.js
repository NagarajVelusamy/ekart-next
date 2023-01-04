import ProductList from "components/productList/ProductList";
import Head from "next/head";
import { serializeData } from "utils/serializeData";

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Ekart - Home</title>
      </Head>
      <section>
        <ProductList products={products} />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const products = await fetch(`${process.env.BASE_URL}/api/product/getAllProducts`);
  const data = await products.json();
  return { props: { products: serializeData(data) } };
}

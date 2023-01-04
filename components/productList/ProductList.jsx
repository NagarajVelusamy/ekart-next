import ProductCard from "components/common/ProductCard/ProductCard";
import Link from "next/link";

const ProductList = ({products}) => {

  // const categories = products.reduce(
  //   (currentProduct,categoriesList) =>
  //     categoriesList.includes(currentProduct.category.toLowerCase())
  //       ? categoriesList 
  //       : categoriesList.push(currentProduct.category.toLowerCase()),
  //   []
  // );
  return (
    <div>
      <h2>Products List</h2>
      <div className="product-list">
        {
          products.map(product => (
            <Link
              key={product._id}
              href={`/product/${product._id}`}
            >
              <ProductCard product={product}/>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default ProductList;
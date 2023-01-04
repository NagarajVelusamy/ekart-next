const ProductList = ({products}) => {
  return (
    <div>
      <h2>Products List</h2>
      {
        products.map(product => (<li key={product._id}>{product.name}</li>))
      }
    </div>
  );
};

export default ProductList;
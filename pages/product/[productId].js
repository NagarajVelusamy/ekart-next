
const ProductId = ({ productId }) => {
  return (
    <div>ProductId:{productId}</div>
  );
};

export function getServerSideProps(context) {
  const { productId } = context.params;
  return {
    props: { productId }, // will be passed to the page component as props
  };
}

export default ProductId;
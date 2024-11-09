import ProductQuantity from "@/style/ProductQuantity";

function SetQuantity({
  stock,
  pre_order_available,
  setProductQuantity,
  productQuantity,
}) {
  const quantity = productQuantity || 0;
  const handleIncrement = () => setProductQuantity(() => quantity + 1);
  const handleDecrement = () => {
    if (quantity > 0) setProductQuantity(() => quantity - 1);
  };
  return (
    <div>
      <ProductQuantity
        productQuantity={productQuantity}
        stock={stock}
        pre_order_available={pre_order_available}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    </div>
  );
}

export default SetQuantity;

import AddToCartButton from "@/style/AddToCartButton";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

function ProductQuantity({
  handleIncreament,
  handleDecrement,
  productItem,
  userCart,
}) {


  const quantity = productItem?.quantity;

  return quantity ? (
    <div className='flex gap-3 items-center'>
      <button onClick={handleDecrement} aria-label='Decrease quantity'>
        <HiMinusCircle className='w-6 h-6' />
      </button>

      <p className='w-10 h-10 bg-gray-900 text-white font-semibold border-2 border-gray-200 rounded-md flex items-center justify-center'>
        {quantity}
      </p>

      <button onClick={handleIncreament} aria-label='Increase quantity'>
        <HiPlusCircle className='w-6 h-6' />
      </button>
    </div>
  ) : (
    <AddToCartButton handleIncreament={handleIncreament} />
  );
}

export default ProductQuantity;

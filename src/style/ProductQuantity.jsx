import AddToCartButton from "@/style/AddToCartButton";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

function ProductQuantity({
  handleIncreament,
  handleDecrement,
  productItem,
  pre_order_available,
}) {
  const quantity = productItem?.quantity;

  return quantity ? (
    <div className='flex items-center gap-3'>
      <button
        onClick={handleDecrement}
        aria-label='Decrease quantity'
        className='flex items-center justify-center w-6 h-6 text-gray-900 hover:text-gray-700'
      >
        <HiMinusCircle className='w-full h-full' />
      </button>

      <span className='w-10 h-10 flex items-center justify-center bg-gray-900 text-white font-semibold border-2 border-gray-200 rounded-md'>
        {quantity}
      </span>

      <button
        onClick={handleIncreament}
        aria-label='Increase quantity'
        className='flex items-center justify-center w-6 h-6 text-gray-900 hover:text-gray-700'
      >
        <HiPlusCircle className='w-full h-full' />
      </button>
    </div>
  ) : (
    <AddToCartButton
      handleIncreament={handleIncreament}
      pre_order_available={pre_order_available}
    />
  );
}

export default ProductQuantity;

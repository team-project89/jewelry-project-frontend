import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

function ProductQuantity({
  productQuantity = 0,
  stock,
  pre_order_available,
  handleDecrement,
  handleIncrement,
}) {
  const quantity = productQuantity || 0;

  return (
    <div className='flex gap-3 items-center'>
      {/* Decrement Button */}
      <button
        onClick={handleDecrement}
        disabled={quantity === 0}
        className={`${
          quantity === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
        } bg-black text-white rounded-full p-1 transition duration-150`}
      >
        <HiMinusCircle className='w-6 h-6' />
      </button>

      {/* Quantity Display */}
      <p className='w-10 h-10 bg-gray-900 text-white font-semibold border-2 border-gray-200 rounded-md flex items-center justify-center'>
        {toPersianNumbers(quantity)}
      </p>

      {/* Increment Button */}
      <button
        onClick={handleIncrement}
        disabled={quantity >= stock && !pre_order_available}
        className={`${
          quantity >= stock && !pre_order_available
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        } bg-black text-white rounded-full p-1 transition duration-150`}
      >
        <HiPlusCircle className='w-6 h-6' />
      </button>
    </div>
  );
}

export default ProductQuantity;

import AddToCartButton from "@/style/AddToCartButton";
import { HiMinusCircle, HiPlusCircle, HiTrash } from "react-icons/hi";
import Loading from "./Loading";

function ProductQuantity({
  handleIncreament,
  handleDecrement,
  productItem,
  isLoading1,
  isLoading2,
}) {
  const quantity = productItem?.quantity;
  const isLoading = isLoading1 || isLoading2;

  if (isLoading) return <Loading />;

  const renderQuantityControls = () => (
    <div className='flex items-center gap-3'>
      {quantity > 1 ? (
        <button
          onClick={handleDecrement}
          aria-label='Decrease quantity'
          className='flex items-center justify-center w-6 h-6 text-gray-900 hover:text-gray-700'
        >
          <HiMinusCircle className='w-full h-full' />
        </button>
      ) : (
        <HiTrash
          className='w-6 h-6 text-gray-900 hover:text-gray-700'
          onClick={handleDecrement}
        />
      )}

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
  );

  return quantity ? (
    renderQuantityControls()
  ) : (
    <AddToCartButton handleIncreament={handleIncreament} />
  );
}

export default ProductQuantity;

import { useEffect, useState } from "react";
import AddToCartButton from "@/style/AddToCartButton";
import { HiMinusCircle, HiPlusCircle, HiTrash } from "react-icons/hi";
import Loading from "./Loading";
import httpService from "@/services/httpService";

function ProductQuantity({
  handleIncreament,
  handleDecrement,
  productItem,
  isLoading1,
  isLoading2,
}) {
  const [isThrottling, setIsThrottling] = useState(false);
  const { quantity } = productItem || {};
  const isLoading = isLoading1 || isLoading2;

  useEffect(() => {
    const setThrottle = (status) => () => setIsThrottling(status);

    window.addEventListener(httpService.events.THROTTLE_START, setThrottle(true));
    window.addEventListener(httpService.events.THROTTLE_END, setThrottle(false));

    return () => {
      window.removeEventListener(httpService.events.THROTTLE_START, setThrottle(true));
      window.removeEventListener(httpService.events.THROTTLE_END, setThrottle(false));
    };
  }, []);

  if (isLoading || isThrottling) return <Loading />;

  return quantity ? (
    <div className="flex items-center gap-3">
      {quantity > 1 ? (
        <button
          onClick={handleDecrement}
          aria-label="Decrease quantity"
          className="flex items-center justify-center w-6 h-6 text-gray-900 hover:text-gray-700"
        >
          <HiMinusCircle className="w-full h-full" />
        </button>
      ) : (
        <HiTrash
          className="w-6 h-6 text-gray-900 hover:text-gray-700"
          onClick={handleDecrement}
        />
      )}
      <span className="w-10 h-10 flex items-center justify-center bg-gray-900 text-white font-semibold border-2 border-gray-200 rounded-md">
        {quantity}
      </span>
      <button
        onClick={handleIncreament}
        aria-label="Increase quantity"
        className="flex items-center justify-center w-6 h-6 text-gray-900 hover:text-gray-700"
      >
        <HiPlusCircle className="w-full h-full" />
      </button>
    </div>
  ) : (
    <AddToCartButton handleIncreament={handleIncreament} />
  );
}

export default ProductQuantity;

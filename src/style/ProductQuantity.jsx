import httpService from "@/services/httpService";
import { useEffect, useState } from "react";

function ProductQuantity({
  isLoading1,
  isLoading2,
  productItem,
  stock,
  handleIncreament,
  handleDecrement,
}) {
  const [isThrottling, setIsThrottling] = useState(false);

  useEffect(() => {
    const setThrottle = (status) => () => setIsThrottling(status);

    window.addEventListener(
      httpService.events.THROTTLE_START,
      setThrottle(true)
    );
    window.addEventListener(
      httpService.events.THROTTLE_END,
      setThrottle(false)
    );

    return () => {
      window.removeEventListener(
        httpService.events.THROTTLE_START,
        setThrottle(true)
      );
      window.removeEventListener(
        httpService.events.THROTTLE_END,
        setThrottle(false)
      );
    };
  }, []);

  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex items-center justify-between'>
        <span className='text-zinc-400 text-sm'>موجودی: {stock}</span>
        <div className='flex items-center space-x-4 rtl:space-x-reverse'>
          <button
            onClick={handleIncreament}
            disabled={isLoading1 || productItem?.quantity >= stock}
            className='w-12 h-12 rounded-xl bg-white text-black font-bold
                     transition-all duration-300 disabled:opacity-50
                     hover:bg-zinc-200 active:scale-95 disabled:hover:bg-white'
          >
            {isThrottling || isLoading1 ? "..." : "+"}
          </button>

          <span className='w-12 text-center text-lg font-medium'>
            {productItem?.quantity || 0}
          </span>

          <button
            onClick={handleDecrement}
            disabled={isLoading2 || !productItem?.quantity}
            className='w-12 h-12 rounded-xl border border-zinc-700
                     transition-all duration-300 disabled:opacity-50
                     hover:border-zinc-500 active:scale-95'
          >
            {isThrottling || isLoading2 ? "..." : "-"}
          </button>
        </div>
      </div>

      {stock === 0 && (
        <p className='text-red-500 text-sm text-center'>
          این محصول در حال حاضر ناموجود است
        </p>
      )}
    </div>
  );
}

export default ProductQuantity;

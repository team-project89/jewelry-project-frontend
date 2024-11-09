import { useAllProducts } from "@/feature/home/products/useAllProducts";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

function PriceFilter({ value, onChange }) {
  const { allProducts, isLoading } = useAllProducts();

  const products = allProducts || [];
  const prices = products.map((items) => items.price);
  const maxPrice = prices.length ? Math.max(...prices).toString() : "0";
  const minPrice = prices.length
    ? Math.max(0, Math.min(...prices) - 25000).toString()
    : "0";

  return (
    <div className='w-full  flex justify-center items-center mt-9 gap-4 '>
      <label htmlFor=''>از کمترین قیمت</label>
      <input
        type='range'
        max={maxPrice}
        min={minPrice}
        value={value}
        onChange={onChange}
        className='range-input border-secondary-900'
        disabled={isLoading || prices.length === 0}
      />
      <span>{toPersianNumbersWithComma(value)} تومان</span>
    </div>
  );
}

export default PriceFilter;

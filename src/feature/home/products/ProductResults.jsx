import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { toPersianNumbers, toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import useOutsideClick from "@/hooks/useOutSideClick";

function ProductResults({ products, setIsSearchOpen }) {
  const handleOutsideClick = () => {
    if (window.innerWidth >= 1024) {
      setIsSearchOpen(false);
    }
  };

  

  const ref = useOutsideClick(handleOutsideClick);

  if (!products || products.length === 0) {
    return (
      <div className='p-8 text-center' ref={ref}>
        <div className='text-gray-400 mb-2'>
          <BsSearch className='w-8 h-8 mx-auto mb-3' />
        </div>
        <p className='text-gray-600 font-medium'>محصولی یافت نشد</p>
        <p className='text-gray-400 text-sm'>لطفا عبارت دیگری جستجو کنید</p>
      </div>
    );
  }

  return (
    <div className='py-3' dir="rtl" ref={ref}>
      <div className='px-6 pb-3 mb-3 border-b border-gray-100'>
        <h3 className='text-base font-semibold text-gray-700'>نتایج جستجو</h3>
      </div>
      <div className='divide-y divide-gray-100'>
        {products.map((product) => {
          const persianId = toPersianNumbers(product.id);
          const persianPrice = toPersianNumbersWithComma(product.price);
          
          return (
            <Link
              onClick={() => setIsSearchOpen(false)}
              to={`singleproduct/${product.id}`}
              key={product.id}
              className='flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors duration-200'
            >
              <img
                src={product.thumbnail}
                alt={product.name}
                className='w-16 h-16 object-cover rounded-lg'
              />
              <div className='flex-grow'>
                <h3 className='font-medium text-gray-800'>
                  {product.name}
                </h3>
                <p className='text-gray-500 text-sm mt-1'>
                  کد: {persianId}
                </p>
              </div>
              <div className='text-primary font-medium whitespace-nowrap'>
                <span className='text-lg'>{persianPrice}</span>
                <span className='text-sm text-gray-600 mr-1'>تومان</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProductResults;

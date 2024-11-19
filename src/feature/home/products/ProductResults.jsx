import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

// Add this new component within the same file or in a separate file
function ProductResults({ products, setIsSearchOpen }) {
  if (!products || products.length === 0) {
    return (
      <div className='p-8 text-center'>
        <div className='text-gray-400 mb-2'>
          <BsSearch className='w-8 h-8 mx-auto mb-3' />
        </div>
        <p className='text-gray-600 font-medium'>No products found</p>
        <p className='text-gray-400 text-sm'>Try searching for something else</p>
      </div>
    );
  }

  return (
    <div className='py-3'>
      <div className='px-4 pb-2 mb-2 border-b'>
        <h3 className='text-sm font-medium text-gray-500'>Search Results</h3>
      </div>
      <div className='grid gap-2 px-2'>
        {products.map((product) => (
          <Link
            onClick={() => setIsSearchOpen(false)}
            to={`singleproduct/${product.id}`}
            key={product.id}
            className='flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg 
                     cursor-pointer transition-colors duration-200'
          >
            <img
              src={product.thumbnail}
              alt={product.name}
              className='w-16 h-16 object-cover rounded-lg shadow-sm'
            />
            <div>
              <h3 className='font-medium text-gray-800 mb-1'>{product.name}</h3>
              <p className='text-primary font-medium'>
                ${product.price.toFixed(2)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductResults;

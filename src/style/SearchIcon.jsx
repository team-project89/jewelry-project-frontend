import useProducts from "@/hooks/useProducts";
import TextFieldSearch from "@/style/TextFieldSearch";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import ProductResults from "@/feature/home/products/productResults";
import { IoMdClose } from "react-icons/io";

function SearchIcon() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { products } = useProducts();

  return (
    <div className='relative w-full'>
      {/* Desktop search bar */}
      <div className='hidden xl:block relative group'>
        <TextFieldSearch 
          hiddenStyle='w-[350px]' 
          onOpen={() => setIsSearchOpen(true)}
          onClose={() => setIsSearchOpen(false)}
          isSearchOpen={isSearchOpen}
          isMobile={false}
        />
        {isSearchOpen && (
          <div className='absolute top-full left-0 w-[450px] mt-3 bg-white 
                         shadow-lg rounded-xl max-h-[70vh] overflow-y-auto z-50
                         border border-gray-100 animate-fadeIn'>
            <ProductResults
              products={products}
              setIsSearchOpen={setIsSearchOpen}
            />
          </div>
        )}
      </div>

      {/* Mobile/Tablet search */}
      <div className='xl:hidden'>
        <button
          onClick={() => setIsSearchOpen(true)}
          className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'
        >
          <BsSearch className='w-5 h-5 text-gray-500' />
        </button>

        {/* Mobile Search Overlay */}
        {isSearchOpen && (
          <div className='fixed inset-0 bg-white z-50 animate-fadeIn'>
            {/* Header with close button */}
            <div className='flex items-center justify-between p-4 border-b'>
              <TextFieldSearch 
                hiddenStyle='flex-1 mx-4' 
                onClose={() => setIsSearchOpen(false)}
                isSearchOpen={isSearchOpen}
                isMobile={true}
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className='p-2 hover:bg-gray-100 rounded-full transition-all 
                          duration-300 hover:rotate-90'
              >
                <IoMdClose className='w-6 h-6 text-gray-500' />
              </button>
            </div>

            {/* Search Results */}
            <div className='overflow-y-auto max-h-[calc(100vh-80px)]'>
              <ProductResults
                products={products}
                setIsSearchOpen={setIsSearchOpen}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchIcon;

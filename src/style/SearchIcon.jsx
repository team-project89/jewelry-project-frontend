import TextFieldSearch from "@/style/TextFieldSearch";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import ProductResults from "@/feature/home/products/productResults";
import { IoMdClose } from "react-icons/io";
import useSearch from "@/hooks/useSearch";

// Desktop search component
const DesktopSearch = ({
  isSearchOpen,
  searchTerm,
  handleOpen,
  handleClose,
  handleSearch,
  searchResults,
  setIsSearchOpen,
}) => (
  <div className='hidden xl:block relative group'>
    <TextFieldSearch
      hiddenStyle='w-[350px]'
      onOpen={handleOpen}
      onClose={handleClose}
      isSearchOpen={isSearchOpen}
      isMobile={false}
      value={searchTerm || ""}
      onChange={handleSearch}
    />
    {isSearchOpen && searchTerm?.length >= 2 && (
      <div className='text-fieldsearch'>
        <ProductResults
          products={searchResults}
          setIsSearchOpen={setIsSearchOpen}
        />
      </div>
    )}
  </div>
);

// Mobile search component
const MobileSearch = ({
  isSearchOpen,
  searchTerm,
  handleOpen,
  handleClose,
  handleSearch,
  searchResults,
  setIsSearchOpen,
}) => (
  <div className='xl:hidden'>
    <button
      onClick={handleOpen}
      className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'
    >
      <BsSearch className='w-5 h-5 text-gray-500' />
    </button>

    {isSearchOpen && (
      <div className='fixed inset-0 bg-white z-50 animate-fadeIn'>
        <div className='flex items-center justify-between p-4 border-b'>
          <TextFieldSearch
            hiddenStyle='flex-1 mx-4'
            onOpen={handleOpen}
            onClose={handleClose}
            isSearchOpen={isSearchOpen}
            isMobile={true}
            value={searchTerm || ""}
            onChange={handleSearch}
          />
          <button
            onClick={handleClose}
            className='p-2 hover:bg-gray-100 rounded-full transition-all 
                      duration-300 hover:rotate-90'
          >
            <IoMdClose className='w-6 h-6 text-gray-500' />
          </button>
        </div>

        {searchTerm?.length >= 2 && (
          <div className='overflow-y-auto max-h-[calc(100vh-80px)]'>
            <ProductResults
              products={searchResults}
              setIsSearchOpen={setIsSearchOpen}
            />
          </div>
        )}
      </div>
    )}
  </div>
);

function SearchIcon() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { searchTerm, setSearchTerm, searchResults } = useSearch();

  const handleOpen = () => setIsSearchOpen(true);
  const handleClose = () => setIsSearchOpen(false);
  const handleSearch = (value) => setSearchTerm(value);

  const searchProps = {
    isSearchOpen,
    searchTerm,
    handleOpen,
    handleClose,
    handleSearch,
    searchResults,
    setIsSearchOpen,
  };

  return (
    <div className='relative w-full'>
      <DesktopSearch {...searchProps} />
      <MobileSearch {...searchProps} />
    </div>
  );
}

export default SearchIcon;

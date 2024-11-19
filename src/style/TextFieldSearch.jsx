import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function TextFieldSearch({ hiddenStyle, onOpen, onClose, isSearchOpen, isMobile }) {
  return (
    <div className={`relative ${hiddenStyle}`}>
      <input
        type='text'
        placeholder='Search products...'
        onClick={() => onOpen()}
        className='w-full py-3 pl-12 pr-4 rounded-full border border-gray-200 
                  focus:outline-none focus:border-primary focus:ring-2 
                  focus:ring-primary/20 transition-all duration-300 ease-in-out
                  placeholder:text-gray-400 text-sm bg-gray-50 hover:bg-white'
      />
      <BsSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 
                          text-gray-400 w-5 h-5 transition-colors duration-300
                          group-hover:text-primary' />
      {isSearchOpen && !isMobile && (
        <button
          onClick={onClose}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 
                    hover:bg-gray-100 p-1.5 rounded-full transition-all 
                    duration-300 hover:rotate-90'
        >
          <IoMdClose className='w-5 h-5 text-gray-500' />
        </button>
      )}
    </div>
  );
}

export default TextFieldSearch;

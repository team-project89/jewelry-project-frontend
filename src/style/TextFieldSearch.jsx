import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function TextFieldSearch({
  hiddenStyle,
  onOpen = () => {},
  onClose = () => {},
  isSearchOpen,
  isMobile,
  value = "",
  onChange = () => {},
}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={`relative ${hiddenStyle}`}>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='جستجوی محصولات...'
        onFocus={onOpen}
        className='w-full py-3 pl-12 pr-4 rounded-full border border-gray-200 
                  focus:outline-none focus:border-primary focus:ring-2 
                  focus:ring-primary/20 transition-all duration-300 ease-in-out
                  placeholder:text-gray-400 text-sm bg-gray-50 hover:bg-white'
      />
      <BsSearch className='w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2' />
    </div>
  );
}

export default TextFieldSearch;

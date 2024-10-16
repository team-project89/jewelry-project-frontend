import React from "react";
import { BsSearch } from "react-icons/bs";

function TextFieldSearch() {
  return (
    <div className='hidden xl:block'>
      <input
        type='text'
        placeholder='Search...'
        className='input-style placeholder:text-black placeholder:font-thin  placeholder:text-sm'
      />
      <BsSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400' />
    </div>
  );
}

export default TextFieldSearch;

import React from "react";
import { BsSearch } from "react-icons/bs";

function TextField() {
  return (
    <div className='relative w-full'>
      <div className="hidden xl:block">
      
        <input
          type='text'
          placeholder='Search...'
          className='input-style placeholder:text-black placeholder:font-thin placeholder:text-sm'
        />
        <BsSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400' />
      </div>
      <div>
        <BsSearch className='absolute right-2 w-5 h-5 top-1/2 transform -translate-y-1/2 text-secondary-400 xl:hidden' />
      </div>
    </div>
  );
}

export default TextField;

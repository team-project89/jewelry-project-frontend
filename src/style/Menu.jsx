import brand from "../../public/logo.jpg";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaSearch } from "react-icons/fa";

import SignUp from "@/feature/authentication/SignUp";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className='flex w-full justify-between px-12 py-6 items-center'>
      <div className='flex gap-x-8 justify-center items-center'>
        <Navbar title='item1' />
        <Link>Inspiration</Link>
        <Link>Job </Link>
        <Link>Go Pro</Link>
      </div>
      <picture>
        <img src={brand} className='w-44 h-12 object-contain' alt='brand' />
      </picture>
      <div className='flex   relative gap-8 justify-center items-center'>
        <div className='relative '>
          <input
            type='text'
            placeholder='Search...'
            className='border rounded-3xl w-full pl-10 py-2'
          />
          <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
        </div>

        <button className='whitespace-nowrap'> Log in </button>
        <button>
          <SignUp />
        </button>
      </div>
    </div>
  );
}

export default Menu;

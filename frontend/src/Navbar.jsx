import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Frame from './assests/Frame.png'
import cart from './assests/cart.png'

import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () =>{
  return <div className='w-full h-20 '>
    <div className='max-w-screen-x1 h-full mx-auto flex items-center justify-between' >
      <div>
      <img className='w-18' src={Frame} alt='logo'/>
    </div>
    <div >
      <ul className='flex items-center gap-10'>
        <li className='text-base text-black font-bold hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Categories</li>
        <li className='text-base text-black font-bold hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Contact</li>
      </ul>
    </div>
    </div>
    
  </div>
}

export default Navbar;
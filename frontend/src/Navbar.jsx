import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Frame from './assests/Frame.png'
import cart from './assests/cart.png'
import profile from './assests/profile.jpg'

import './Navbar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () =>{
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const productData = useSelector((state)=>state.bazar.productData);
  console.log(userInfo)
  return <div className='w-full h-20 '>
    <div className='max-w-screen-x1 h-full mx-auto flex items-center justify-between' >
      <div>
      <img className='w-18' src={Frame} alt='logo'/>
    </div>
    <div className='flex items-center gap-8'>
      <ul className='flex items-center gap-8'>
        <li className='text-base text-black font-bold hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Categories</li>
        <li className='text-base text-black font-bold hover:text-red-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Contact</li>
      </ul>
      <div className='relative'>
      <img className="w-10"src={cart} alt="cartImg"/>
      <span className='absolute w-10 top-4 left-0 text-sm flex items-center justify-center font-titlefont'>{productData.length}</span>
      </div>
      <Link to ="/login">
      <img class='w-10 h-10 rounded-full' src={ userInfo ? userInfo.image: profile} alt='userlogo' referrerpolicy="no-referrer"/>
      </Link>
      {userInfo && <p>{userInfo.name}</p>}
      <br></br>
    </div>
    </div>
    
  </div>
}

export default Navbar;
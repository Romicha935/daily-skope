import React from 'react'
import { FiHeart } from 'react-icons/fi'
// import {AiPOutlineUserAdd} from 'react-icons/ai'
import { FaShoppingCart, FaUser, FaUserAlt } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'

const Nav = () => {
  return (
    <nav className='flex border-b-2 border-[#f3f3f3] justify-around items-center p-5 z-[999] ml-8'>
        <div className=''>
        <input className='py-3 px-5 bg-gray-100 outline-none mr-5 rounded-md relative w-56' type="text" placeholder='Enter your search shoes' />
    </div>

    <div className='flex gap-10'>
        <a href="">
            <FiHeart className='w-5 h-5 ml-3'/>
        </a>
        <a href=""><FaShoppingCart className='w-5 h-5 ml-3'/>  </a>
        <a href="">
            <FaUser className='w-5 h-5 ml-3'/>
        </a>
    </div>
    </nav>
  )
}

export default Nav
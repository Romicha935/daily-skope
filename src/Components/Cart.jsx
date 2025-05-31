import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import img1 from '../assets/istockphoto-1350560575-170667a.webp'
import { BsFillBagHeartFill } from 'react-icons/bs'
const Cart = () => {
  return (
    <div className='w-[15%-100%] -mr-80'>
          <section className='cart-container flex flex-wrap ml-80 mt-8 z-10'>
        <section className='card m-5 border-2 border-[#ededed] p-5 cursor-pointer'>
          <img className='w-56 mb-4' src={img1} alt="Shoe" />
          <div className='card-details '>
            <h3 className='mb-4'>Shoe</h3>
            <section className='card-reviews mb-4 flex items-center'>
                <AiFillStar className='text-yellow-500'/>
                <AiFillStar className='text-yellow-500'/>
                <AiFillStar className='text-yellow-500'/>
                <AiFillStar className='text-yellow-500'/>
              <span className='total reviews text-xl ml-2'>4</span>
            </section>

            <section className='card-price flex justify-around items-center'>
            <div className='price flex gap-2'>
              <del>$300</del>200
            </div>

            <div className='bag'>
              <BsFillBagHeartFill className='text-[#535353]'/>
            </div>
            </section>
          </div>
        </section>
        </section>
    </div>
  )
}

export default Cart
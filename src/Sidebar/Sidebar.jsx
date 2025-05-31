import React from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Category/Colors/Colors'

const Sidebar = () => {
  return (
    <div>
        <section id='sidebar' className='w-[15%] fixed h-[100%] border-r-2 border-gray-200 z-[3] flex flex-col items-center '>
            <div id='logo-container' className='mb-16 mt-8'>
                <h1 className='text-2xl'>Sidebar</h1>
            </div>
            <Category/>
            <Price/>
            <Colors/>
        </section>
    </div>
  )
}

export default Sidebar
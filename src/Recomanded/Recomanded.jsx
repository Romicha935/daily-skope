import React from 'react'

const Recomanded = () => {
  return (
    <div>
      <div className=' ml-80'>
        <h2 className='ml-5 mb-5 mt-5 text-[20px]'>Recomanded</h2>
        <div id='recomanded-btns' className='flex ml-5 gap-5'>
          <button id='btns' className='  border-2 p-2 bg-transparent'>All Products</button>
          <button id='btns' className='border-2 p-2 bg-transparent'>Nike</button>
          <button id='btns' className='border-2 p-2 bg-transparent'>Adidas</button>
          <button id='btns' className='border-2 p-2 bg-transparent'>Puma</button>
          <button id='btns' className='border-2 p-2 bg-transparent'>Vanse</button>
        </div>
      </div>
    </div>
  )
}

export default Recomanded
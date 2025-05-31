import React from 'react'

const Input = () => {
  return (
    <div>
       <label id='sidebar-label-container'  htmlFor="">
          <input type="radio" name='test' />
          <span className='checkmark  absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-full'></span>All
        </label>
    </div>
  )
}

export default Input
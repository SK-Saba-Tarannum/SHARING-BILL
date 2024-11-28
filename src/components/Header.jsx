import React from 'react'

function Header() {
  return (
    <div className='header flex justify-center align-middle  w-full'>
        <div className='flex'>
            <img className='h-16 w-14 ' src="https://cdn4.iconfinder.com/data/icons/payment-checkout-glyph/48/Sed-70-512.png" alt=""  />
            <p className='text-blue-500 name font-extrabold text-2xl'>Billi...</p>
        </div>
        <div className='h-5 w-5 rounded-full bg-black text-white p-4 text-center flex justify-center  items-center' >
            <p>S</p>
        </div>
    </div>
  )
}

export default Header

import React from 'react'

function MenuItems() {
  return (
    <div className='bg-indigo-100 p-2 rounded-lg text-center
    hover:bg-white transition-all hover:shadow-2xl hover:shadow-indigo/25'>
        <div className='text-center'>
        <img src='/pizza.png' className='max-h-auto max-h-24
        block mx-auto' alt='pizza'/>    
        </div>
    <h4 className='font-semibold text-xl my-3'>
        Nova
    </h4>
    <p className='text-gray-500 text-sm'>
        Nova light is the simss Negosyo basic subscription plan start at
    </p>
    <button className='mt-4 bg-primary text-white
    rounded-full px-8 py-2'>Add to Cart P 1,080</button>
</div>
  )
}

export default MenuItems
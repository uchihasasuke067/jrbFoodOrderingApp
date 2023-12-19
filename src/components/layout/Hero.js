import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section className='hero mt-4'>
    <div className='py-12'>
    <h1 className='text-4xl font-semibold'>The
    <span className='text-green-500'> ORIGINAL</span> Buko Pie Bakeshop</h1>
    <p className='my-6 mt-4 text-gray-500 text-sm'>
        Product of the Philippines
    </p>
    <div className='flex gap-4 text-sm'>
        <button className='bg-indigo-500 uppercase 
        items-center flex gap-2 text-white
        px-4 py-2 rounded-full'>
            Other Products: Tropical Pie, Buko Cassava, Pineapple Pie
            {/* <Right/> */}
        </button>
        <button className='flex gap-2 py-2 text-gray-600 font-semibold'>
            Learn more
            {/* <Right/> */}
        </button>
    </div>
    </div>
    <div className='relative'>
        <Image src={'/pizza.png'} layout={'fill'}
        objectFit={'contain'} alt={'buko pie'}/>
    </div>
</section>
  )
}

export default Hero
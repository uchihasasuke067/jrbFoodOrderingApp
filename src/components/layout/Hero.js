import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
<section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          The <span className="text-primary">
            ORIGINAL
          </span><br />
          Buko Pie Bakeshop<br />
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Product of the Philippines
        </p>
        <div className="flex gap-4 text-sm">
          <button className="justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
  <div className="overflow-hidden rounded-full" style={{ width: '300px', height: '300px' }}>
    <Image src={'/1.jpg'} layout={'fill'} objectFit={'cover'} alt={'pizza'} className="rounded-lg" />
  </div>
</div>

    </section>
  )
}

export default Hero
import React from 'react'
import SectionHeaders from '../../components/layout/SectionHeaders'
import Image from 'next/image'

function RegisterPage() {
  return (
    <section className='mt-4'>
        <h1 className='text-center text-primary text-4xl'>
            Register
        </h1>
        <form className='block max-w-xs mx-auto mt-4'>
            <input type="email" placeholder='Email'></input>
            <input type="password" placeholder='Password'></input>
            <button type='submit'>Submit</button>
            <div className='my-4 text-center text-gray-500'>
                or use Google Account
            </div>
            <div className="flex space-x-4">
      <button className="flex items-center flex-grow text-gray-600 px-3 py-1 rounded-lg">
        <Image src={'/google.png'} alt={''} width={20} height={20} className="mr-2" />
        Google
      </button>
      <button className="flex items-center flex-grow text-gray-600 px-3 py-1 rounded-lg">
        <Image src={'/fb.png'} alt={''} width={20} height={20} className="mr-2" />
        Facebook
      </button>
      <button className="flex items-center flex-grow text-gray-600 px-3 py-1 rounded-lg">
        <Image src={'/github.png'} alt={''} width={20} height={20} className="mr-2" />
        Github
      </button>
    </div>
        </form>            
    </section>
  )
}

export default RegisterPage
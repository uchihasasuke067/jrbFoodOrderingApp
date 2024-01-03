'use client';
import React, { useState } from 'react'
import {signIn} from "next-auth/react";
import Link from 'next/link';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser]=useState(false);
  const [userCreated, setUserCreated]=useState(false);
  const [error, setError] =useState(false);

  async function handleFormSubmit(ev){
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
      const response = await fetch('/api/register',{
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers:{'Content-Type': 'application/json'},
      });

      if (response.ok){
        setUserCreated(true);
      }
      else {
        setError(true);
      }
      setCreatingUser(false);
  }
  return (
    <section className='mt-4'>
        <h1 className='text-center text-primary text-4xl'>
            Register
        </h1>
        {userCreated && (
          <div className='my-4 text-center text-green-600 font-bold'>
            User created. <br/>
            Now you can {' '}
            <Link href={'/login'} className='underline'> login &rarr;</Link>
          </div>
        )}
        {error && (
        <div className='my-4 text-center text-red-600 font-bold'>
          User not created. <br/>
          An Error has been encounter. Try again later
          </div>
        )}
        <form className='block max-w-xs mx-auto mt-4' onSubmit={handleFormSubmit}>
            <input name="email" type="email" placeholder='Email' value={email}
            disabled={creatingUser}
            onChange={ev => setEmail(ev.target.value)}/>
            <input name="pwd" type="password" placeholder='Password' value={password}
            disabled={creatingUser}
            onChange={ev => setPassword(ev.target.value)}/>
            <button type='submit' disabled={creatingUser}>Submit</button>
            <div className='my-4 text-center text-gray-500'>
                or use 
            </div>
            <div className="flex space-x-4">
            <button onClick={() => signIn('google', {callbackUrl:'/'})}
            className="flex items-center flex-grow text-gray-600 px-3 py-1 rounded-lg">
              <img src="/google.png" alt="Google Logo" width={20} height={20} className="mr-2" />
              Google
              </button>
      <button className="flex items-center flex-grow text-gray-600 px-3 py-1 rounded-lg">
        <img src={'/fb.png'} alt={''} width={20} height={20} className="mr-2" />
        Facebook
      </button>
      <button className="flex items-center flex-grow text-gray-600 px-3 py-1 rounded-lg">
        <img src={'/github.png'} alt={''} width={20} height={20} className="mr-2" />
        Github
      </button>
    </div>
    <div className='text-center text-gray-500 my-4 border-t pt-4'>
        Existing Account? {' '}
        <Link className='underline' href={'/login'}>Login here &raquo;</Link>
      </div>
        </form>            
    </section>
  )
}

export default RegisterPage
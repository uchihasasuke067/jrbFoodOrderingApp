'use client';
import {useState} from 'react';

function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginInProgress, setLoginInProgress] = useState();

    async function handleFormSubmit(ev){
        ev.preventDefault();
        const {ok} = await fetch ('/api/login',{
            body: JSON.stringify({email, password}),
            headers: {'Content-Type':'application/json'},
            method: 'POST',
        });
        if (ok){

        } else {

        }
    }
  return (
    <section className='mt-8'>
        <h1 className='text-center text-primary text-4xl mb-4'>
            Login
        </h1>
        <form className='max-w-xs mx-auto' onSubmit={handleFormSubmit}>
        <input name="email" type="email" placeholder='Email' value={email}
            disabled={loginInProgress}
            onChange={ev => setEmail(ev.target.value)}/>
            <input name="pwd" type="password" placeholder='Password' value={password}
            disabled={loginInProgress}
            onChange={ev => setPassword(ev.target.value)}/>
            <button disabled={loginInProgress} type='submit'>Login</button>
            <div className='my-4 text-center text-gray-500'>
                or use 
            </div>
            <div className="flex space-x-4">
            <button className="flex items-center flex-grow text-gray-600 px-3 py-1 rounded-lg">
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
        </form>
    </section>
  )
}

export default LoginPage
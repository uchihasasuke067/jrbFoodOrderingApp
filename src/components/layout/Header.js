'use client';
import {signOut, useSession} from "next-auth/react";
import React from 'react'
import Link from 'next/link'
function Header() {
  const session = useSession();
  console.log(session);
  const status = session.status;
  return (
    <header>
    <div className="flex items-center md:hidden justify-between">
      <Link className="text-primary font-semibold text-2xl" href={'/'}>
      ORIENT
      </Link>
      <div className="flex gap-8 items-center">
        <Link href={'/cart'} className="relative">
        </Link>
      </div>
    </div>
    <div className="hidden md:flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href={'/'}>
          ORIENT
        </Link>
        <Link href={'/'}>Home</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/#about'}>About</Link>
        <Link href={'/#contact'}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
      {status === 'authenticated' && (
        <button 
          onClick={() => signOut()}
          className="bg-primary rounded-full text-white px-8 py-2">
          Logout
        </button>
      )}

      {status !== 'authenticated' && (
    <>
      <Link href={'/login'} className="relative">Login</Link>
      <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2">Register</Link>
    </>
  )}
</nav>

    </div>
  </header>
  )
}

export default Header
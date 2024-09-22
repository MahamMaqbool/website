import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex bg-blue-600 justify-evenly w-full h-11'>
    <Link href='/' className='text-white font-semibold text-2xl'>Home</Link>
      <Link href='About' className='text-white font-semibold text-2xl'>About</Link>
      <Link href='Contact' className='text-white font-semibold text-2xl'>Contact Us</Link>
    </div>
  )
}

export default Header

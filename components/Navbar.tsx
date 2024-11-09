import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <nav className='w-full py-10 flex justify-between content-center border-b-2 border-gray-100 z-10'>
        <span className='flex-1 text-md text-purple-300 font-bold content-center justify-center'>cogni:wave</span>
        <div className='sm:flex hidden flex-row sm:gap-12 flex-1 justify-between text-md'>
            <Link href='#'>Services</Link>
            <Link href='#'>Treatment</Link>
            <Link href='#'>Blog</Link>
            <Link href='#'>About us</Link>
        </div>
        <div className='flex justify-end flex-1 text-md font-normal'>
            <CustomButton title='Contact us' text='text-purple-300'/>
        </div>
    </nav>
  )
}

export default Navbar

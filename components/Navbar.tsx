import React from 'react'
import CustomButton from './CustomButton'
import LinkWithUnderline from './LinkUnderline'
import LogoText from './LogoText'

const Navbar = () => {
  return (
    <nav className='2xl:py-10 py-3 flex justify-between items-center border-b-2 border-gray-100 z-10 sm:mx-20 mx-10'>
      <LogoText/>
      <div className='sm:flex hidden flex-row sm:gap-12 flex-1 justify-between items-center text-md'>
          <LinkWithUnderline title='Services' href='#'/>
          <LinkWithUnderline href='#' title='Treatment'/>
          <LinkWithUnderline href='#' title='Blog'/>
          <LinkWithUnderline href='#' title='About us'/>
      </div>
      <div className='flex justify-end flex-1 text-md font-normal'>
          <CustomButton title='Contact us' text='text-purple-400'/>
      </div>
    </nav>
  )
}

export default Navbar

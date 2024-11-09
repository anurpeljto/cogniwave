import Link from 'next/link'
import React from 'react'

type LinkProps = {
    title: string,
    href: string
}

const LinkWithUnderline = ({title, href}: LinkProps) => {
  return (
    <Link href={href} className='text-lg group transition duration-300 text-nowrap'>
        {title}
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-400'></span>
    </Link>
  )
}

export default LinkWithUnderline
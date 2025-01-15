import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

interface ContentCardProps {
    title?: string,
    img: string,
    description?: string,
    styles?: string
}

const ContentCard = (content: ContentCardProps) => {
  return (
    <div className='bg-white sm:p-8 p-5 flex flex-col gap-5 text-black rounded-lg'>
        <Image src={content.img} alt='Walking under a tree' height={300} width={500} className='object-contain border-2 border-black rounded-lg sm:block hidden'/>
        <Image src={content.img} alt='Walking under a tree' height={200} width={200} className='object-contain border-2 border-black rounded-lg sm:hidden block'/>
        <div>
            <h1 className='font-bold'>{content.title}</h1>
            <p className='text-gray-500 text-sm'>{content.description}</p>
        </div>
        <hr className='mt-10' />
        <div className='flex flex-row justify-between items-center'>
            <CustomButton title='More details' customStyles='border-gray-200 text-sm' />
            <CustomButton title='Search'/>
        </div>
    </div>
  )
}

export default ContentCard
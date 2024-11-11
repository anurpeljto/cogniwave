import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

interface ContentCardProps {
    title: string,
    img?: string,
    description: string,
    styles?: string
}

const ContentCard = (content: ContentCardProps) => {
  return (
    <div className='bg-white p-5 flex-1 flex flex-col gap-5 text-black rounded-lg'>
        <Image src='/undraw_walk_ing_qkyj.svg' alt='Walking under a tree' height={800} width={800} className='object-contain border-2 border-black rounded-lg'/>
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
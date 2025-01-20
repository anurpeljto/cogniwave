import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

interface ContentCardProps {
    title?: string;
    img: string;
    description?: string;
    styles?: string;
    numberOfFile?: string;
}

const ContentCard = (content: ContentCardProps) => {
  return (
    <div className='bg-white sm:p-8 p-5 z-10 flex flex-col gap-5 text-black rounded-lg rounded-tl-xl relative'>
        <Image src={content.img} alt='Walking under a tree' height={300} width={500} className='object-cover border-2 rounded-lg sm:block hidden max-h-[300px]'/>
        <Image src={content.img} alt='Walking under a tree' height={200} width={500} className='object-cover border-2 rounded-lg sm:hidden block'/>
        <div className='flex flex-col gap-2'>
            <h1 className='font-light sm:text-5xl text-3xl'>{content.title}</h1>
            <p className='text-gray-400 text-sm'>{content.description}</p>
        </div>
        <hr className='mt-10' />
        <div className='flex flex-row justify-between items-center'>
            <CustomButton title='More details' customStyles='border-gray-200 text-sm' />
            <CustomButton title='Search'/>
        </div>
        <div className="bg-purple-300
                      h-8 w-20 mt-5 text-white text-center font-bold rounded-tl-full
                      rounded-tr-2xl rounded-br-full absolute left-0 top-[-40px]
                      flex flex-row justify-center items-center">
          <p>/{content.numberOfFile}</p>
        </div>
    </div>
  )
}

export default ContentCard
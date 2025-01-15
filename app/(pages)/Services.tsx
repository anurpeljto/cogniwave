'use client'
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react'

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const text = "Tailored solutions for your well-being".split(" ");
  return (
    <section ref={ref}
      className='min-h-[100vh] w-full gradient text-white sm:px-20 px-19 py-10 flex flex-col'
    >
      <div className='flex flex-col gap-2 w-[450px]'>
        <span className='text-sm text-gray-700 font-light transition-opacity duration-500'>
            SERVICES & PROGRAMS
        </span>
        {
          isInView ? (
            <div className='flex flex-wrap gap-2 w-full'>
              <div>
                {text.map((el,i) => (
                  <motion.span
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                      duration: 1.0,
                      delay: i / 6
                    }}
                    key={i}
                    className='sm:text-5xl text-black'
                    >
                      {el}{" "}
                    </motion.span>
                ))}
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )
        }
      </div>
      <div className='flex sm:flex-row flex-col mt-5 w-full justify-between'>
        <Image src='/therapy.jpg' alt='Therapy session' height={400} width={300} className='object-contain rounded-lg h-[500px]'/>
        <Image src='/therapy.jpg' alt='Therapy session' height={400} width={300} className='object-contain rounded-lg h-[500px]'/>
      </div>
    </section>
  )
}

export default Services
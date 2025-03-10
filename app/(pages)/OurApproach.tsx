'use client';
import React, {useRef} from 'react';
import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import ContentCard from '@/components/ContentCard';

const OurApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {margin: '50px'});
  const text = "Art and science of mental wellness".split(" ");

  return (
    <section ref={ref}
      className='min-h-[100vh] w-full bg-black text-white sm:px-20 px-10 py-10 flex flex-col'
    >
      <div className='flex flex-col justify-center items-center'>
        <span className='text-sm text-gray-400 font-light transition-opacity duration-500'>
          OUR APPROACH
        </span>
        {
            isInView ? 
            (
                <div className='flex gap-2 w-full justify-center items-center'>
                    <div>
                      {text.map((el, i) => (
                      <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                          duration: 1.0,
                          delay: i / 6,
                      }}
                      key={i}
                      className='text-5xl'
                      >
                      {el}{" "}
                      </motion.span>
                  ))}
                    </div>
                    <motion.div
                        initial={{y: 100, opacity: 0}}
                        animate={{y:-100, opacity: 1}}
                        transition={{duration: 2.0}}
                        className='absolute hidden 2xl:block 2xl:right-48 2xl:mt-36 lg:right-20'
                    >
                        <Image src='/undraw_mindfulness_8gqa.svg' alt='walking under a tree' height={400} width={400}/>
                    </motion.div>
                    <motion.div
                        initial={{y: 100, opacity: 0}}
                        animate={{y:40, opacity: 1}}
                        transition={{duration: 2.0}}
                        className='absolute hidden lg:block 2xl:hidden lg:right-24 z-10'
                    >
                        <Image src='/undraw_mindfulness_8gqa.svg' alt='walking under a tree' height={200} width={200}/>
                    </motion.div>
                    <motion.div
                        initial={{y: 100, opacity: 0}}
                        animate={{y:85, opacity: 1}}
                        transition={{duration: 2.0}}
                        className='absolute block sm:hidden right-0 z-10'
                    >
                        <Image src='/undraw_mindfulness_8gqa.svg' alt='walking under a tree' height={200} width={200}/>
                    </motion.div>
                </div>
            )
            :
            (
                <div></div>
            )
        }
      </div>
      {
          isInView ? (
            <motion.div
          initial={{y:100, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 2.2}}
          className='mt-20 flex sm:flex-row flex-col gap-10 w-full justify-center items-center'
        >
          <ContentCard description='Our holistic approach embraces your mind, body and spirit, fostering a balanced and thriving you.' title='Holistic approach' img='/smiley-woman.jpg' numberOfFile= '01' />
          <ContentCard description='Discover the power within as we blend evidence-based techniques with creative self-expression' title='Unlock your potential' img='/flare.jpg' numberOfFile='02' />
        </motion.div>
          ):
          <div>Loading...</div>
        }
    </section>
  );
};

export default OurApproach;

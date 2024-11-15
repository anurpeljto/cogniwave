'use client';
import React, { useEffect, useRef} from 'react';
import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import ContentCard from '@/components/ContentCard';

const OurApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const text = "Art and science of mental wellness".split(" ");

  useEffect(() => {
    if(isInView){
        console.log('In view!');

    }
    else {
        console.log('Not in view');
    }
  }, [isInView]);
  return (
    <section ref={ref}
      className='min-h-[100vh] bg-black text-white sm:px-20 px-10 py-10 flex flex-col'
    >
      <div className='flex flex-col gap-2 w-[450px]'>
        <span className='text-sm text-gray-400 font-light transition-opacity duration-500'>
          OUR APPROACH
        </span>
        {
            isInView ? 
            (
                <div className='flex flex-wrap gap-2 w-full'>
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
                        className='absolute right-32 z-10'
                    >
                        <Image src='/undraw_mindfulness_8gqa.svg' alt='walking under a tree' height={400} width={400}/>
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
          className='mt-20 flex flex-row gap-5 w-full'
        >
          <ContentCard description='Our holistic approach embraces your mind, body and spirit, fostering a balanced and thriving you.' title='Holistic approach'/>
          <ContentCard description='Discover the power within as we blend evidence-based techniques with creative self-expression' title='Unlock your potential'/>
        </motion.div>
          ):
          null
        }
    </section>
  );
};

export default OurApproach;

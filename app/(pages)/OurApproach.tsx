'use client';
import React, { useEffect, useRef, useState} from 'react';
import { motion, useInView } from "framer-motion";

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
      className='min-h-[100vh] bg-black text-white px-20 sm:px-10 py-10 flex flex-col'
    >
      <div className='flex flex-col gap-2 w-[450px]'>
        <span className='text-sm text-gray-400 font-light transition-opacity duration-500'>
          OUR APPROACH
        </span>
        {
            isInView ? 
            (
                <div className='flex flex-wrap gap-2'>
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
            )
            :
            (
                <div></div>
            )
        }
      </div>
    </section>
  );
};

export default OurApproach;

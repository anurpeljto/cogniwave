import CustomButton from '@/components/CustomButton'
import React, { useState, useRef, useEffect } from 'react'

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current){
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="mt-24 flex md:flex-row flex-col sm:mx-20 mx-10 mb-14">
      {/* <video autoPlay loop muted className="absolute top-[-90px] left-[-50px] w-100 h-90 z-0">
        <source src="/spinnyhand.mp4" type="video/mp4"/>
      </video>

      <div className="flex flex-col absolute top-50 left-1/2 z-10 gap-5">
        <span className="text-8xl">
          Embark on your mental journey <br/> with professionals
        </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, earum voluptas cupiditate ut, laboriosam qui sapiente libero molestiae tempore animi odit voluptates quod a officia eaque nulla excepturi, iusto harum?</p>     
      </div>   */}

      {!isVideoLoaded && isInView && (
        <img
          src='vercel.svg'
          className='absolute'
          height={10}
          width={10}
          alt='Placeholder before loading video'
        />
      )}
      <video 
          autoPlay 
          loop
          muted
          onLoadedData={() => setIsVideoLoaded(true)} 
          className="w-full h-[90vh] z-0 object-cover flex-1"
          >
          <source src="/spinnyhand.webm" type="video/webm"/>
      </video>
      <div className="flex flex-col z-10 gap-5 flex-1 animate-appear">
        <span className="lg:text-8xl sm:text-6xl text-xl font-bold text-purple-400 bg-transparent">
          Embark on your mental journey with professionals
        </span>
        <p className="sm:text-lg bg-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, earum voluptas cupiditate ut, laboriosam qui sapiente libero molestiae tempore animi odit voluptates quod a officia eaque nulla excepturi, iusto harum?</p>  
        <div className="w-full flex flex-row justify-start items-center gap-10">
          <CustomButton title="Start cure" bg="bg-purple-400" text="text-white" customStyles="py-3 px-20 font-bold"/> 
          <CustomButton title="Watch review" bg="bg-white" text="text-purple-400" customStyles="py-3 px-20 font-bold border-purple-400"/> 
        </div>  
      </div>
    </section>
  )
}

export default Hero
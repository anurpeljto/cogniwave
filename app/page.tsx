import Image from "next/image";

export default async function Home() {
  return (
    <main className="mt-24 flex md:flex-row flex-col">
      {/* <video autoPlay loop muted className="absolute top-[-90px] left-[-50px] w-100 h-90 z-0">
        <source src="/spinnyhand.mp4" type="video/mp4"/>
      </video>

      <div className="flex flex-col absolute top-50 left-1/2 z-10 gap-5">
        <span className="text-8xl">
          Embark on your mental journey <br/> with professionals
        </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, earum voluptas cupiditate ut, laboriosam qui sapiente libero molestiae tempore animi odit voluptates quod a officia eaque nulla excepturi, iusto harum?</p>     
      </div>   */}

      <video autoPlay loop muted className="w-full h-[90vh] z-0 object-cover flex-1">
        <source src="/spinnyhand.mp4" type="video/mp4"/>
      </video>
      <div className="flex flex-col z-10 gap-5 flex-1">
        <span className="sm:text-8xl text-xl font-bold text-purple-300 bg-transparent">
          Embark on your mental journey with professionals
        </span>
        <p className="sm:text-lg bg-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, earum voluptas cupiditate ut, laboriosam qui sapiente libero molestiae tempore animi odit voluptates quod a officia eaque nulla excepturi, iusto harum?</p>     
      </div>
    </main>
  )
}
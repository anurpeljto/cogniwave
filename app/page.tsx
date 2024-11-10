import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import Hero from "./(pages)/Hero";
import OurApproach from "./(pages)/OurApproach";

export default async function Home() {
  return (
    <main className="flex flex-col gap-14">
      <Hero/>
      <OurApproach/>
    </main>
  )
}
'use client'
import { useRef, Suspense, lazy } from "react";
import Hero from "./(pages)/Hero";
import { useInView } from "framer-motion";

const OurApproach = lazy(() => import('./(pages)/OurApproach'));
const Services = lazy(() => import('./(pages)/Services'));

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  return (
    <main className="flex flex-col">
      <Hero/>
      <Suspense fallback={<div>Loading...</div>}/>
      <OurApproach ref={ref} isInView={isInView}/>
      <Services/>
    </main>
  )
}
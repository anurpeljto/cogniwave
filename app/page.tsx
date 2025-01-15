'use client'
import { Suspense, lazy } from "react";
import Hero from "./(pages)/Hero";

const OurApproach = lazy(() => import('./(pages)/OurApproach'));
const Services = lazy(() => import('./(pages)/Services'));

export default function Home() {
  return (
    <main className="flex flex-col scroll-smooth">
      <Hero/>
      <Suspense fallback={<div>Loading...</div>}/>
      <OurApproach/>
      <Services/>
    </main>
  )
}
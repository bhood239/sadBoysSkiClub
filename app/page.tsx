"use client";
import Image from "next/image";
import About from "./components/About";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex flex-col items-center overflow-hidden">
        
        {/* Fixed Background Image with Tint */}
        <div className="fixed inset-0 z-[-1]">
          <Image
            src={"/pictures/Chairlift1.png"}
            fill
            alt="Chairlift picture"
            className="object-cover"
            priority
          />
          {/* 
            Uniform dark overlay (40% opacity). 
            Starts invisible, fades in over 1.5s to darken the image for text readability.
          */}
          <div 
            className={`absolute inset-0 bg-black/40 transition-opacity duration-[1500ms] ease-in-out ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`} 
          />
        </div>

        {/* Title - Centered vertically in the available space */}
        <div 
          className={`flex-grow flex items-center justify-center px-4 pt-20 transition-all duration-[1500ms] delay-500 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-white text-4xl md:text-7xl font-bold text-center drop-shadow-2xl tracking-tight">
            Slope Side Support Society
          </h1>
        </div>

        {/* Intro Text - Pushed to the bottom, with padding to avoid overlap */}
        <div 
          className={`relative z-10 w-full max-w-4xl px-6 pb-20 md:pb-32 text-center space-y-6 transition-all duration-[1500ms] delay-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-stone-100 font-medium text-lg md:text-2xl leading-relaxed drop-shadow-lg">
            Slope Side Support Society is a non-profit organization dedicated to
            supporting men’s mental health through the power of skiing.
          </h3>
          <p className="text-stone-200 text-base md:text-lg font-light drop-shadow-md max-w-2xl mx-auto">
            We provide free group therapy sessions and individual support
            in a positive, outdoor environment, fostering connection,
            resilience, and personal growth.
          </p>
        </div>
      </section>

      {/* Main Content - White sheet that scrolls over the fixed image */}
      <div className="relative z-10 px-4 md:px-6 -mt-10 pb-10">
        <div className="max-w-[85rem] mx-auto bg-stone-50 rounded-2xl shadow-2xl overflow-hidden">
          <section id="about">
            <About />
          </section>
          <section id="contact" className="pb-20">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

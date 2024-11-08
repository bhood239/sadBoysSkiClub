"use client";
import Image from "next/image";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="mt-14">
      <section id="home" className="relative z-10 min-h-screen">
        <Image
          src={"/pictures/Chairlift1.png"}
          height={700}
          width={700}
          alt="Chairlift picture"
          className="w-full h-full fixed top-0 right-0 z-0 object-cover"
        />
        <h1 className="relative z-10 text-black text-5xl font-bold text-center pt-40">
          Slope Side Support Society
        </h1>
        <div className="absolute bottom-0 w-full h-1/3 bg-stone-50 flex items-center justify-center border-t-2 pb-5 pr-5 pl-5">
          <h3 className="relative z-10 text-black font-semibold text-center text-xl md:text-2xl mb-5">
            Slope Side Support Society is a non-profit organization dedicated to
            supporting men’s mental health through the power of skiing.
            <br /> We provide free group therapy sessions and individual support
            in a positive, outdoor environment, fostering connection,
            resilience, and personal growth.
          </h3>
        </div>
      </section>
      <section id="about" className="relative z-10">
        <About />
      </section>
      <section id="contact" className="relative z-10">
        <Contact />
      </section>
    </div>
  );
}

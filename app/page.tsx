"use client";
import Image from "next/image";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative mt-14">
      <>
        <section id="home" className="relative z-10 min-h-screen">
          <Image
            src={"/pictures/Chairlift1.png"}
            height={700}
            width={700}
            alt="Charlift picture"
            className="w-full h-full fixed top-0 right-0 z-0 object-cover"
          />
          <h1 className="relative z-10 text-black text-5xl font-bold text-center pt-40">
            Sad Boy's Ski Club
          </h1>
          <h3 className="relative z-10 text-black text-center text-2xl mt-8">
            Short description to be added.
          </h3>
        </section>
        <section id="about" className="relative z-10">
          <About />
        </section>
        <section id="contact" className="relative z-10">
          <Contact />
        </section>
        <Footer />
      </>
    </div>
  );
}

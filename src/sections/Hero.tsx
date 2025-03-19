import React from "react";
import ProfileImage from "@/assets/profile.png";
import Image from "next/image";
export const Hero = () => {
  return (
    <section className="py-20" id="hero">
      <div className="container">
        <div className="flex flex-col text-center justify-center gap-4">
        <Image src={ProfileImage} loading="lazy" alt="Profile Image" className="w-24 h-24 rounded-full mx-auto object-cover"/>
        <p className="text-xl max-w-xl mx-auto text-white/80 font-medium ">Hello&#128075; I&apos;m Saad Anna</p>
        <h1 className="text-5xl md:text-[75px] md:leading-none font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">Build Attractive,<br/> Responsive And Beautiful<br/> Front-Ends Websites.</h1>
        <button className="bg-white/5 border border-white/20 w-40 mx-auto text-sm text-white p-3 rounded-full font-semibold">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

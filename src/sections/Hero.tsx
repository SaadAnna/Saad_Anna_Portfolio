import React from "react";
import ProfileImage from "@/assets/profile.png";
import Image from "next/image";
export const Hero = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col text-center justify-center gap-4">
        <Image src={ProfileImage} alt="Profile Image" className="w-24 h-24 rounded-full mx-auto object-cover"/>
        <h1 className="text-xl max-w-xl mx-auto text-white/80 font-semibold ">Hello&#128075; I&apos;m Saad.</h1>
        <p className="lg:text-6xl text-5xl mx-auto leading-tight font-semibold text-white max-w-4xl">Build attractive,<br/> responsive and beautiful<br/> front-ends websites.</p>
        <button className="bg-white/5 border border-white/20 w-40 mx-auto text-sm text-white p-3 rounded-full font-semibold">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

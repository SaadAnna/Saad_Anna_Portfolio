import { Navbar }  from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { LogoMotion } from "@/sections/LogoMotion";
import { Services } from "@/sections/Services";
import { About } from "@/sections/About";
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <LogoMotion />
    <Services />
    <About />
    </>
      
  );
}

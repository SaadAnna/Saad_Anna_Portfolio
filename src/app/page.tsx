import { Navbar }  from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { LogoMotion } from "@/sections/LogoMotion";
import { Services } from "@/sections/Services";
import { About } from "@/sections/About";
import { Work } from "@/sections/Work";
import  { Contact }   from "@/sections/Contact";
import { IntegrationHub } from "@/sections/integrationsHub";
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <LogoMotion />
    <Services />
    <About />
    <Work />
    <Contact />
    <IntegrationHub />
    </>
      
  );
}

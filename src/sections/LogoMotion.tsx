/* eslint-disable jsx-a11y/alt-text */
"use client";
import csslogo from "@/assets/csslogo.png";
import npmlogo from "@/assets/npmlogo.png";
import reactlogo from "@/assets/reactlogo.png";
import pythonlogo from "@/assets/pythonlogo.png";
import tailwindlogo from "@/assets/tailwindlogo.png";
import vscodelogo from "@/assets/vscodelogo.png"; 
import htmllogo from "@/assets/htmllogo.png"; 
import framerlogo from "@/assets/framerlogo.png"; 
import jslogo from "@/assets/jslogo.png"; 
import { motion } from "framer-motion";
export const LogoMotion = () => {
  return (
    <section className="py-20">
      <div className="container">
      <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none lg:text-2xl text-lg p-3 border-white/15 border rounded-full">
            <h2>My Skills</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2 "
            >
              {[
                csslogo,
                npmlogo,
                htmllogo,
                framerlogo,
                jslogo,
                reactlogo,
                pythonlogo,
                tailwindlogo,
                vscodelogo,
                csslogo,
                npmlogo,
                htmllogo,
                framerlogo,
                jslogo,
                reactlogo,
                pythonlogo,
                tailwindlogo,
                vscodelogo,
                
              ].map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logo.src} key={logo.src} className="lg:h-10 h-8 w-auto" />
              ))}
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
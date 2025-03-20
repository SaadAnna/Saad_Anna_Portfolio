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
          <div className="flex mx-auto flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
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
                jslogo,
                framerlogo,
                reactlogo,
                pythonlogo,
                tailwindlogo,
                vscodelogo,
                csslogo,
                npmlogo,
                htmllogo,
                jslogo,
                framerlogo,
                reactlogo,
                pythonlogo,
                tailwindlogo,
                vscodelogo,
              ].map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logo.src} key={logo.src} className="h-32 md:h-24 sm:h-6 w-auto" />
              ))}
            </motion.div>
          </div>
        
      </div>
    </section>
  );
};
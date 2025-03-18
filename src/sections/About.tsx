"use client";

import React, { useEffect, useRef } from "react";

export const About = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Get the text container
    const container = textRef.current;

    // Create an observer for text lines
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Skip special elements that should always be white
          if (entry.target.classList.contains("always-white")) return;

          // Toggle visibility class based on intersection
          if (entry.isIntersecting) {
            entry.target.classList.add("text-white");
            entry.target.classList.remove("text-neutral-500");
          } else {
            entry.target.classList.remove("text-white");
            entry.target.classList.add("text-neutral-500");
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    // Apply special style to the colored spans
    const specialSpans = container.querySelectorAll(".always-white");
    specialSpans.forEach((span) => {
      span.classList.add(
        "text-neutral-600",
        "font-medium",
        "lg:text-4xl",
        "md:text-2xl",
        "sm:text-2xl"
      );
    });

    // Apply animation to normal spans
    const normalSpans = container.querySelectorAll(".animate-span");
    normalSpans.forEach((span) => {
      span.classList.add(
        "text-neutral-500",
        "transition-colors",
        "duration-500",
        "ease-in-out"
      );
      observer.observe(span);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20" id="about">
      <div className="container">
        <div className="flex flex-col gap-10 mx-auto">
          <div className="text-4xl md:text-[45px] mx-auto md:leading-none max-w-2xl font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
            The Human Behind the Screen
          </div>

          <div
            ref={textRef}
            className="lg:text-3xl md:text-2xl sm:text-xl max-w-5xl font-normal mx-auto text-center"
          >
            <span className="always-white">Hello, I&apos;m Saad</span>{" "}
            <span className="animate-span">
              a passionate front-end developer with 2 years of experience
              turning ideas into interactive, pixel-perfect realities.
            </span>{" "}
            <span className="animate-span">
              I specialize in crafting sleek, responsive websites using HTML,
              CSS, JavaScript, and modern frameworks like React.js and Next.js.
            </span>{" "}
            <span className="animate-span">
              With a love for clean code and a keen eye for design, I bring
              creativity and functionality together using tools like Tailwind
              CSS to build seamless user experiences.
            </span>{" "}
            <span className="animate-span">
              Whether it&apos;s a dynamic web app or a stunning UI, I&apos;m all
              about creating digital solutions that not only look great but work
              flawlessly.
            </span>{" "}
            <span className="always-white">
              Let&apos;s build something amazing together!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

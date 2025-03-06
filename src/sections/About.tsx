import React from "react";

export const About = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col gap-10 mx-auto">
          <div className="text-4xl md:text-[45px] mx-auto md:leading-none max-w-2xl font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
            The Human Behind the Screen  
          </div>
          <div className="lg:text-3xl md:text-2xl sm:text-xl max-w-5xl text-neutral-500 cursor-pointer font-normal mx-auto text-center duration-300 ease-linear hover:text-neutral-300 ">
          <span className="text-white font-medium mx-auto text-center  max-w-4xl lg:text-4xl md:text-2xl sm:text-2xl" >Hello, I&apos;m Saad</span>
          {' '}a passionate front-end developer with 2 years of experience turning ideas into interactive, pixel-perfect realities. I specialize in crafting sleek, responsive websites using HTML, CSS, JavaScript, and modern frameworks like React.js and Next.js. With a love for clean code and a keen eye for design, I bring creativity and functionality together using tools like Tailwind CSS to build seamless user experiences. Whether it’s a dynamic web app or a stunning UI, I’m all about creating digital solutions that not only look great but work flawlessly.
          <span className="text-white font-medium mx-auto text-center lg:text-4xl md:text-2xl sm:text-2xl max-w-4xl">{' '}Let’s build something amazing together!</span>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default About;

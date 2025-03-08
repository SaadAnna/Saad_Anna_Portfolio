import React from "react";
import FirstProject from "@/assets/firstproject.png";
import SeconProject from "@/assets/secondproject.png";
import ThirdProject from "@/assets/thirdproject.png";
import Image from "next/image";
export const Work = () => {
  const Works = [
    {
      id: 1,
      image: FirstProject,
      title: "Ai Seo Genarator Landing Page",
      description: "saad anna is the best",
      languages: "HTML / CSS / Javascript",
    },
    {
      id: 2,
      image: SeconProject,
      title: "saad",
      description: "saad anna is the best",
      languages: "HTML / CSS / Javascript",
    },
    {
      id: 2,
      image: ThirdProject,
      title: "saad",
      description: "",
      languages: "HTML / CSS / Javascript",
    },
  ];
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col gap-10 justify-center mx-auto ">
          <div className="text-5xl md:text-[70px] md:leading-none font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
            Success Stories
          </div>
          <div className="flex p-2.5 py-16  rounded-xl gap-14 items-center lg:flex-1 flex-wrap justify-center">
            {Works.map((work) => (
              <div
                key={work.id}
                className="flex flex-col relative  text-start justify-start gap-3 p-2.5 border border-white/20 rounded-xl w-[300px] h-[400px] cursor-pointer"
              >
                <a href="">
                <Image className="w-auto h-48 object-cover border border-white/20 rounded-xl" src={work.image} alt="first project image"></Image>
                </a>
                <div className="text-white tracking-tighter font-semibold text-lg">
                  {work.title}
                </div>
                <div className=" text-white/70 tracking-tighter font-medium text-lg">
                  {work.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

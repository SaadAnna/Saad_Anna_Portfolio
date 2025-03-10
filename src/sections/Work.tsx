import React from "react";
export const Work = () => {
  const Works = [
    {
      id: 1,
      type: "2025 / Side Project",
      title: "Ai Seo Genarator Landing Page",
      description: "",
    },
    {
      id: 2,
      type: "2024 / Side Project",
      title: "E-commerce Landing Page",
      description: "",
    },
    {
      id: 2,
      type: "2023 / Side Project",
      title: "Codew | Front-End Development Startup",
      description: "",
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
                className="flex flex-col relative duration-200 ease-out hover:bg-neutral-950 text-start justify-start gap-2 p-2.5 border border-white/20 rounded-xl w-[300px] h-[300px] cursor-pointer"
              >
              
              <div className="text-sm text-white/70 font-medium">
                {work.type}
              </div>
                <div className="text-white tracking-tighter font-semibold text-2xl">
                  {work.title}
                </div>
                <div className=" text-white/60 tracking-tighter font-normal text-lg max-w-3xl">
                  {work.description}
                </div>
               
              </div>
            ))}
          </div>
          <div className="flex justify-center py-1 mx-auto">
            {" "}
            <a href="https://github.com/SaadAnna" target="_blank" className=" text-center bg-white/5 border border-white/20 w-40 mx-auto text-sm text-white p-3 rounded-full font-semibold">
               View In Git Hub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

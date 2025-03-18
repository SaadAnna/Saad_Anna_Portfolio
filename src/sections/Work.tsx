import React from "react";
export const Work = () => {
  const Works = [
    {
      id: 1,
      type: "2025 / Side Project",
      title: "Ai Seo Genarator Landing Page",
      GitHubLink: false,
      description:
        "The AI SEO Generator Landing Page showcases an AI tool for creating optimized SEO content. It highlights features, benefits, and includes a call-to-action for user engagement.",
      LivePreview: "https://dester.vercel.app/",
      },
    {
      id: 2,
      type: "2024 / Side Project",
      GitHubLink: false,
      title: "Codew Startup Wesite",
      description:
        "A sleek, responsive landing page built with React.js, Vite, Tailwind CSS, and JavaScript. It highlights services, expertise, and includes a call-to-action to attract clients.",
      LivePreview: "https://codewx.netlify.app/",
      },
   
  ];
  return (
    <section className="py-20" id="work">
      <div className="container">
        <div className="flex flex-col gap-10 justify-center mx-auto ">
          <div className="text-5xl md:text-[70px] md:leading-none font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
            My Success Stories
          </div>
          <div className="flex p-2.5 py-16  rounded-xl gap-14 items-center lg:flex-1 flex-wrap justify-start">
            {Works.map((work) => (
              
              <div
                key={work.id}
    
                className="flex flex-col relative duration-200 ease-out hover:bg-neutral-950 text-start justify-start gap-2 p-2.5 border border-white/20 rounded-xl w-[300px] h-[300px] cursor-pointer"
              >
                 <a href={work.LivePreview}>
                <div className="text-sm text-white/70 font-medium">
                  {work.type}
                </div>
                <div className="text-white tracking-tighter font-semibold text-2xl">
                  {work.title}
                </div>
                <div className=" text-white/70 tracking-tighter font-normal text-base max-w-3xl">
                  {work.description}
                </div>
               
                {work.GitHubLink && (
                  <a
                    href="https://github.com/SaadAnna"
                    target="_blank"
                    className="flex justify-center m-auto text-sm text-white/30 hover:text-white duration-300 rounded-full font-medium"
                  >
                    View In GitHub
                  </a>
                  
                )}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

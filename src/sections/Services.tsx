import React from "react";
const services = [
  {
    id: 1,
    icon: (
      <svg
        className="w-8 h-8 text-white dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
        />
      </svg>
    ),
    title: "Web Development",
    description:
      "Crafting sleek, high-performance websites that turn clicks into conversions. From code to launch, we build digital experiences that work as hard as you do.",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-8 h-8 text-white dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M8.649 2.577A10.004 10.004 0 0 1 20.344 6.49a9.995 9.995 0 0 1 1.2 8.486l-.004.01-.005.015a2.958 2.958 0 0 1-2.836 2.001h-2.69a1.037 1.037 0 0 0-.95.68c-.047.13-.068.27-.06.409v.916A3.01 3.01 0 0 1 11.96 22a9.626 9.626 0 0 1-4.195-1l.009.005-.018-.009.01.004a10.1 10.1 0 0 1-5.716-7.996l-.001-.012a9.992 9.992 0 0 1 6.6-10.415Zm3.35 3.429a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12ZM8.53 7.518a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2h-.01Zm6.968 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM6.99 11.004a1 1 0 1 0 0 2H7a1 1 0 1 0 0-2h-.01Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "Designing intuitive, pixel-perfect interfaces that users love. We blend creativity and functionality to create experiences that feel effortless and unforgettable.",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-8 h-8 text-white dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    title: "Shopify Partner",
    description:
      "Your one-stop shop for Shopify success. We design, develop, and optimize stores that not only look stunning but drive sales like clockwork.",
  },
];
export const Services = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-4xl md:text-[45px] mx-auto md:leading-none max-w-2xl font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Collaborate with brands and agencies to create impactful results
        </div>
        <div className="flex p-2.5 py-16  rounded-xl gap-14 items-center lg:flex-1 flex-wrap justify-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col relative  text-start justify-start gap-3 p-2.5 border border-white/20 rounded-xl w-[300px] h-[300px] cursor-pointer"
            >
              <div className="">{service.icon}</div>
              <div className="text-white tracking-tighter font-medium text-2xl">
                {service.title}
              </div>
              <div className=" text-white/70 tracking-tighter font-medium text-lg">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

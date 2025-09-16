"use client";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 rounded-3xl backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl lg:max-w-4xl mx-auto relative">
          <div className="absolute inset-0 rounded-xl backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
            <h4 className="text-2xl">
              S
            </h4>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block" id="navbar">
            <nav className="flex gap-14 text-sm ">
              <a href="#hero" className="text-white/70 hover:text-white transition">
                Home
              </a>
              <a href="#work" className="text-white/70 hover:text-white transition">
                Work
              </a>
              <a href="#about" className="text-white/70 hover:text-white transition">
                About
              </a>
              <a href="#services" className="text-white/70 hover:text-white transition">
                Services
              </a>
              <a href="#contact" className="text-white/70 hover:text-white transition">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex gap-4 items-center">
            <a className="" href="https://github.com/SaadAnna" target="_blank">
              <svg
                className="w-8 h-8 text-white/40 cursor-pointer hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <button
              onClick={toggleMenu}
              className="md:hidden"
              aria-label="Toggle menu"
            >
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
                  d="M18 6H6m12 4H6m12 4H6m12 4H6"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out max-w-2xl mx-auto ${
            isMenuOpen ? "max-h-64 opacity-100 mt-4 " : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/70 backdrop-blur-lg  py-1 px-4 rounded-xl border border-white/15 h-fit">
            <nav className="flex flex-col gap-2">
              <a
                href="#hero"
                className="text-white/70 hover:text-white transition py-2 px-4 hover:bg-white/10 rounded-lg"
              >
                Home
              </a>
              <a
                href="#work"
                className="text-white/70 hover:text-white transition py-2 px-4 hover:bg-white/10 rounded-lg"
              >
                Work
              </a>
              <a
                href="#about"
                className="text-white/70 hover:text-white transition py-2 px-4 hover:bg-white/10 rounded-lg"
              >
                About
              </a>
              <a
                href="#services"
                className="text-white/70 hover:text-white transition py-2 px-4 hover:bg-white/10 rounded-lg"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-white transition py-2 px-4 hover:bg-white/10 rounded-lg"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

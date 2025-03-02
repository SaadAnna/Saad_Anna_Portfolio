export const Navbar = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 ">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl lg:max-w-3xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className=" w-10 rounded-lg inline-flex justify-center items-center text-xl border-white/15">
              Saad
            </div>
          </div>
          <div className="hidden md:block" id="navabar">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">
                Home
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Work
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                About
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <button className="text-black text-sm sm:hidden lg:block text-medium bg-white border-none p-3 rounded-full">
              Contact Me
            </button>
            <svg
              className="w-8 h-8 lg:hidden sm:block text-white dark:text-white"
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
          </div>
        </div>
      </div>
    </header>
  );
};

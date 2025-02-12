'use client';

import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#4c6ee2] w-full flex justify-between items-center p-4 relative z-[1000]">

      <div className="text-white text-[20px] font-semibold font-degular-display ml-4"></div>

      <div className="hidden md:flex items-center space-x-4 mr-6">
        <div className="text-white text-[20px] font-semibold font-degular">Portfolio</div>
        <div className="text-white text-[20px] font-semibold font-degular">Services</div>
        <div className="text-[#d3f86e] text-[20px] font-semibold font-degular">About</div>
      </div>

      <div className="hidden md:flex items-center">
        <a className="relative" href="#">
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-full bg-black"></span>
          <span className="flex items-center gap-1 relative rounded-full border-2 border-black bg-[#d3f86e] px-4 py-2 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
            Contact me
            <Sparkles />
          </span>
        </a>
      </div>
      <div className="md:hidden mr-4 z-[1100]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} className="text-white" /> : <Menu size={30} className="text-white" />}
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#4c6ee2] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center pt-20 space-y-6 shadow-lg z-[1050]`}
      >
        <div className="text-white text-[20px] font-semibold font-degular" onClick={() => setIsOpen(false)}>Portfolio</div>
        <div className="text-white text-[20px] font-semibold font-degular" onClick={() => setIsOpen(false)}>Services</div>
        <div className="text-[#d3f86e] text-[20px] font-semibold font-degular" onClick={() => setIsOpen(false)}>About</div>
        <a className="relative mt-4" href="#">
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-full bg-black"></span>
          <span className="flex items-center gap-1 relative rounded-full border-2 border-black bg-[#d3f86e] px-4 py-2 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
            Contact me
            <Sparkles />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

import { Sparkles } from 'lucide-react';
import React from 'react';

function Navbar() {
  return (
    <div className="bg-[#4c6ee2] w-full flex justify-end items-center p-4">
      <div className="flex items-center space-x-4 mr-6">
        <div className="text-white text-[20px] font-semibold font-['Degular Display']">Portfolio</div>
        <div className="text-white text-[20px] font-semibold font-['Degular Display']">Services</div>
        <div className="text-[#d3f86e]  text-[20px] font-semibold font-['Degular Display']">About</div>
      </div>

      <div className="flex items-center">
        <a className="relative" href="#">
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-full bg-black"></span>
          <span className="flex items-center gap-1 relative rounded-full border-2 border-black bg-[#d3f86e] px-4 py-2 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
          Contact me
          <Sparkles/>
        </span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

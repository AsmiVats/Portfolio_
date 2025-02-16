'use client';

import { Sparkles, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#4c6ee2] w-full flex justify-between items-center p-4 relative z-[1000]">

      <div className="text-white font-semibold font-degular ml-4">
      <Image 
        src='/logo.svg' 
        alt='Logo' 
        layout="intrinsic" 
        width={120} 
        height={32} 
      />      
      </div>

      <div className="hidden md:flex items-center space-x-4 justify-between mx-auto">
        <Link href='#home' className="text-white text-[20px] font-semibold font-degular">Portfolio</Link>
        <Link href='#services' className="text-white text-[20px] font-semibold font-degular">Services</Link>
        <Link href='#about' className="text-[#d3f86e] text-[20px] font-semibold font-degular">About</Link>
      </div>

      <div className="hidden md:flex items-center">
        <a className="relative" href="mailto:asmivats15@gmail.com">
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-full bg-black"></span>
          <span className="flex items-center gap-1 relative rounded-full border-2 border-black bg-[#d3f86e] px-4 py-2 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 transform active:scale-96 ">
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
        <a href='#home' className="text-white text-[20px] font-semibold font-degular" onClick={() => setIsOpen(false)}>Portfolio</a>
        <a href='#services' className="text-white text-[20px] font-semibold font-degular" onClick={() => setIsOpen(false)}>Services</a>
        <a href='#about' className="text-[#d3f86e] text-[20px] font-semibold font-degular" onClick={() => setIsOpen(false)}>About</a>
        <a className="relative mt-4" href="mailto:asmivats15@gmail.com">
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

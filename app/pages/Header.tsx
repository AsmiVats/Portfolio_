'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import element1 from '@/app/asserts/header/Frame.png';
import element2 from '@/app/asserts/header/Frame (1).png';
import element3 from '@/app/asserts/header/Vector.png';
import element4 from '@/app/asserts/header/Frame (3).png';
import element5 from '@/app/asserts/header/Group.png';
import element6 from '@/app/asserts/header/Group (1).png';

import TextAnimation from './common/TextAnimation';

const floatingAnimation = {
  y: [0, -10, 10, -10, 0],
  transition: {
    duration: 5,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: "mirror" as "mirror",
  },
};

const elements = [
  { src: element1, className: 'w-[80px]', top: '10%', left: '5%' },
  { src: element2, className: 'w-[80px]', bottom: '15%', right: '10%' },
  { src: element3, className: 'w-[100px]', top: '20%', right: '20%' },
  { src: element4, className: 'w-[100px]', top: '30%', left: '15%' },
  { src: element5, className: 'w-[80px]', bottom: '10%', left: '20%' },
  { src: element6, className: 'w-[80px]', top: '40%', right: '5%' },
];

function Header() {
  return (
    <div className="bg-[#4c6ee2] h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      <div className="font-extrabold text-pretty text-center text-[#ffffff] mb-10">
        {/* <img src='/title.svg' alt="Title" /> */}
      </div>
      <motion.div initial={{ y: 0 }} animate={floatingAnimation} className="text-center">
        <TextAnimation />
        <span className="text-white text-[24px] font-medium font-degular">
          I'm Asmi Vats
          <br />
        </span>
        <span className="text-white text-[24px] font-light font-ivypresto">
          Web Developer & Student
        </span>
      </motion.div>
      
      {/* Floating Background Elements */}
      {elements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ y: 0 }}
          animate={floatingAnimation}
          className={`absolute ${element.className}`}
          style={{ top: element.top, bottom: element.bottom, left: element.left, right: element.right }}
        >
          <Image src={element.src} alt={`Element ${index + 1}`} />
        </motion.div>
      ))}
    </div>
  );
}

export default Header;

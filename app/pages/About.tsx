'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';


const technologies = [
  {
    name: 'Figma',
    description: 'Design Tool',
    bg:"bg-[#0ACF8333]",
    image: '/icons/figma.png'
  },
  {
    name: 'TypeScript',
    description: 'JavaScript but better',
    bg:"bg-[#3178C633]",
    image: '/icons/typescript.png'
  },
  {
    name: 'React',
    description: 'JavaScript Library',
    bg:"bg-[#61DAFB33]",
    image: '/icons/react.png'
  },
  {
    name: 'NextJS',
    description: 'React framework',
    bg:"bg-[#000000]",
    image: '/icons/next.png'
  },
  {
    name: 'Tailwind',
    description: 'CSS framework',
    bg:"bg-[#0EA5E933]",
    image: '/icons/tailwind.png'
  },
  {
    name: 'Git',
    description: 'Version control',
    bg:"bg-[#F1502F33]",
    image: '/icons/git.png'
  },
  {
    name: 'NodeJS',
    description: 'Backend tool',
    bg:"bg-[#3ECF8E33]",
    image: '/icons/node.png'
  },
  {
    name: 'NPM',
    description: 'Package manager',
    bg:"bg-[#F02D6533]",
    image: '/icons/npm.png'
  }
];

function About() {
  return (
    <div id='about' className="min-h-screen bg-white p-8 md:p-16 font-degular">
      <div className="max-w-6xl mx-auto space-y-24">
        <section>
          <h1 className="text-5xl font-semibold mb-8">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-800 text-lg leading-relaxed">
              I&apos;m Asmi Vats, a web developer and software engineer dedicated to crafting intuitive, high-performance digital solutions. With a strong foundation in design and development, I blend creativity with technical expertise to build seamless, user-friendly experiences.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between group cursor-pointer">
                  <div>
                    <h3 className="text-lg font-medium">OS Code Solutions (August 2024 - January 2025)</h3>
                    <p className="text-gray-600 uppercase text-sm mt-1">FULL-STACK DEVELOPER</p>
                  </div>
                  <ArrowUpRight className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between group cursor-pointer">
                  <div>
                    <h3 className="text-lg font-medium">VIT Bhopal University</h3>
                    <p className="text-gray-600 uppercase text-sm mt-1">B.TECH IN COMPUTER SCIENCE</p>
                    <p className="text-gray-600 text-sm mt-1">GPA - 9.22</p>
                  </div>
                  <ArrowUpRight className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mb-6">Current technologies</h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                <div className={`w-10 h-10 flex items-center justify-center ${tech.bg} rounded-lg overflow-hidden`}>
                  <Image src={tech.image} alt={tech.name} width={25} height={25} />
                </div>
                <div>
                  <h3 className="font-medium">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
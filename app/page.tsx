import React from "react";
import Header from "./pages/Header";
import './globals.css';
import Image from "next/image";
import Banner from '@/app/asserts/baner.png'


import Navbar from "./pages/Navbar";
import ProjectsSection from "./pages/projects/ProjectsSection";

export default async function Home() {

  // await new Promise(r=>setTimeout(r,10000));
  return (
    <div>
      <Navbar/>
      <Header/>
      <ProjectsSection/>
      <div className="my-4">
        <Image src={Banner} alt="Banner" className="w-full"/>
      </div>
    </div>
  );
}

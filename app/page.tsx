import React from "react";
import Header from "./pages/Header";
import './globals.css';


import Navbar from "./pages/Navbar";
import {ProjectSection} from "./pages/projects/ProjectSection";

export default async function Home() {

  // await new Promise(r=>setTimeout(r,10000));
  return (
    <div>
      <Navbar/>
      <Header/>
      <ProjectSection/>
    </div>
  );
}

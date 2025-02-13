import React from "react";
import Header from "./pages/Header";
import './globals.css';
import Navbar from "./pages/Navbar";
import ProjectsSection from "./pages/projects/ProjectsSection";
import About from "./pages/About";
import { Footer } from "./pages/Footer";
import ServicesList from "./pages/ServicesList";

export default async function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <ProjectsSection/>
      <ServicesList/>

      <About/>

      <Footer/>
    </div>
  );
}

import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default async function Home() {

  // await new Promise(r=>setTimeout(r,10000));
  return (
    <div>
      <Navbar/>
      <Header/>
    </div>
  );
}

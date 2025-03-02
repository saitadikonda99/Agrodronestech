import React from "react";

import "./page.css";
import Navbar from "@/app/components/navbar/navbar";
import Hero from "@/app/ui/hero/hero";
import About from "@/app/ui/about/about";
import Footer from "@/app/components/footer/footer";

export default function Home() {

  return (
      <div className="HomeComponent">
        <div className="HomeComponent-in">
          <Navbar />
          <Hero />
          <About /> 
          <Footer />
        </div>  
      </div>
  );
}

import React from "react";

import "./page.css";
import Navbar from "@/app/components/navbar/navbar";
import Hero from "@/app/ui/hero/hero";
import About from "@/app/ui/about/about";
import Footer from "@/app/components/footer/footer";
import Services from "@/app/ui/services/services";
import Contact from "./ui/contact/contact";
import Products from "./ui/products/products";

export default function Home() {

  return (
      <div className="HomeComponent">
        <div className="HomeComponent-in">
          <Navbar page='home'/>
          <Hero />
          <About /> 
          <Services />
          <Products />
          <Contact /> 
          <Footer />
        </div>  
      </div>
  );
}

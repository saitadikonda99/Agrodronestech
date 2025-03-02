import React from "react";

import "./page.css";
import Navbar from "@/app/components/navbar/navbar";
import Hero from "@/app/ui/hero/hero";

export default function Home() {

  return (
      <div className="HomeComponent">
        <div className="HomeComponent-in">
          <Navbar />
          <Hero />
        </div>  
      </div>
  );
}

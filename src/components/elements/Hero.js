import React from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";

function Hero() {
  return (
    <section className="hero is-dark">
      <div className="hero-head">
        <NavBar />
      </div>
    </section>
  );
}

export default Hero;

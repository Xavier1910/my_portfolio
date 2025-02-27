import React from "react";
import GradientText from "./Animations/GradientText";
import ShinyText from "./Animations/ShinyText";
import 'animate.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="HeroImage">
        <div className="imageContainer">
        <img src="images/profile.png " alt="HeroImage" />
        </div>
      </div>
      <div className="hero-content">
        <div className="heroBox">
          <h1 className="heroHead animate__animated animate__lightSpeedInRight ">
            <GradientText children={"Hi, I'm Xavier"} />{" "}
          </h1>
          <p className="heroTitle">
            <ShinyText text={"Full Stack Web Developer"} />
          </p>
          <p id="Slogan"><span>D</span>esign.<span>D</span>evelop.<span>D</span>eploy</p><br />
          <p id="desc" className="">Turning ideas into interactive, high-performance web solutions – because great code powers great experiences!</p>
          <a href="#projects" className="cta-button">
            Check out my work
          </a>
        </div>
      </div>
      
    </section>
  );
}

export default Hero;

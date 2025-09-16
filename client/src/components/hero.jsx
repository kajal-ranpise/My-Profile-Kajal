import React from "react";
import heroBg from "../assets/img/hero-bg.jpg";

function Hero() {
  return (
    <section id="hero" className="hero section">
      <img src={heroBg} alt="Hero Background" data-aos="fade-in" />

      <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>Kajal Ranpise</h2>
            <p>I'm a professional illustrator from San Francisco</p>
            <a href="/about" className="btn-get-started">About Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

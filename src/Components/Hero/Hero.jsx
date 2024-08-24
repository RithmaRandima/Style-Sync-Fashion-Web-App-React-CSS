import React from "react";
import "./Hero.css";
import hero_bg from "../../Assets/hero-bg.jpg";
import { Background, Parallax } from "react-parallax";

const Hero = () => {
  return (
    <div className="hero">
      <Parallax strength={300} className="hero-parallax">
        <Background className="custom-bg">
          <img src={hero_bg} alt="fill murray" />
        </Background>

        {/* overlay box */}
        <div className="hero-details-overlay">
          <h1>Build Your Own Style.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ratione, aperiam voluptate ut aliquam illum sunt fugit.
          </p>
          <button>Shop now</button>
        </div>
      </Parallax>

      {/* popup box */}
      <div className="hero-popup-box">
        <h1>
          STREET <br /> WEARS
        </h1>
        <p>HIGH QUALITY COOL T-SHIRTS FOR STREET FASHION</p>
        <button>start shopping</button>
      </div>

      {/*small popup box */}
      <div className="hero-popup-box-small">
        <h1>Get 20% OFF On Your First Purchase</h1>
      </div>
    </div>
  );
};

export default Hero;

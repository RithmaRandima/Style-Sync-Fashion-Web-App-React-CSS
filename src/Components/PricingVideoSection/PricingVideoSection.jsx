import React from "react";
import "./PricingVideoSection.css";
import pricing_video from "../../Assets/PricingVideo.mp4";

const PricingVideoSection = () => {
  return (
    <div className="pricingVideo">
      <video autoPlay loop muted id="pricingVideo">
        <source src={pricing_video} type="video/mp4" />
      </video>
      <div className="pricingVideoContent">
        <h1>
          Live Your{" "}
          <span style={{ color: " rgb(255, 0, 123)", fontWeight: "700" }}>
            Life{" "}
          </span>{" "}
          In Your <br />
          <span style={{ color: " rgb(255, 0, 123)", fontWeight: "700" }}>
            {" "}
            Own World
          </span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          necessitatibus unde qui molestiae in earum dolores quasi neque,
          voluptas, facilis obcaecati nulla a quaerat sapiente vel tenetur sed
          eaque quo?
        </p>
      </div>
    </div>
  );
};

export default PricingVideoSection;

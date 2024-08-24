import React, { useEffect } from "react";
import "./CSS/LoginSignup.css";
import { Background, Parallax } from "react-parallax";
import img_bg from "../Assets/login-bg.png";

const LoginSignup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="loginsignup">
      <Parallax strength={300} className="hero-parallax">
        <Background className="custom-bg">
          <img src={img_bg} alt="fill murray" />
        </Background>
      </Parallax>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an Account? <span>Login here</span>{" "}
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, I agree to the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

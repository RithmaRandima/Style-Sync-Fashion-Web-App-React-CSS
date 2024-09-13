import React from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top md:py-[70px] py-[20px]">
          {/* col-01 */}
          <div className="footer-top-content-box">
            {/* logo */}
            <div className="nav-logo">
              <h5>
                style<span>sync.</span>
              </h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              debitis, autem laudantium cupiditate repudiandae cumque dolorum
              nobis quos totam maxime.
            </p>
            <div className="mx-auto footer-social-section">
              <div className="social-icon-container">
                <FaFacebookF />
              </div>
              <div className="social-icon-container">
                <FaTwitter />
              </div>
              <div className="social-icon-container">
                <FaInstagram />
              </div>
              <div className="social-icon-container">
                <FaYoutube />
              </div>
              <div className="social-icon-container">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* col-02 */}
          <div className="hidden md:block footer-top-content-box">
            <h5>Resources</h5>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
            <p>News</p>
          </div>

          {/* col-03 */}
          <div className="hidden md:block footer-top-content-box">
            <h5>Support</h5>
            <p>FAQs</p>
            <p>Proof of Payments</p>
            <p>Feedback</p>
            <p>Home</p>
          </div>

          {/* col-04 */}
          <div className="footer-top-content-box">
            <h5>Contact</h5>
            <p>
              Address: 2001 W. Trenton,nUnit 108, Edinburg, TX. 78539 &
              Condition
            </p>
            <p>Phone: 956-588-8168</p>
            <p>E-mail: info@zerogravity.com</p>
          </div>
        </div>
        {/* copyright */}
        <div className="footer-bottom">
          <p>
            &#169; <span>stylesync.</span> Cafe 2024 &#183; All Right Reserved.
          </p>
          <div className="hidden md:flex">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

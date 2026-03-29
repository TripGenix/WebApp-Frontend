import React from "react";
import "./AboutMiddle.css";

import img1 from "../../assets/ele.jpeg";
import img2 from "../../assets/sigiriya.jpeg";
import img3 from "../../assets/turtle.jpeg";

import icon1 from "../../assets/about_1_1.svg";
import icon2 from "../../assets/about_1_2.svg";
import icon3 from "../../assets/about_1_3.svg";

const AboutMiddle = () => {
  return (
    <div className="about-area" id="about-sec">
      <div className="about-container">
        {/* LEFT IMAGE GROUP - All 3 boxes now have floating-anim */}
        <div className="about-left">
          <div className="about-images-wrapper">
            <div className="img-box box-1 floating-anim">
              <img src={img1} alt="Wildlife" className="about-img" />
            </div>
            <div className="img-box box-2 floating-anim">
              <img src={img2} alt="Sigiriya" className="about-img" />
            </div>
            <div className="img-box box-3 floating-anim">
              <img src={img3} alt="Turtle" className="about-img" />
            </div>
          </div>
        </div>

        {/* RIGHT TEXT GROUP */}
        <div className="about-right">
          <div className="title-area">
            <span className="sub-title">Welcome To TripGenix</span>
            <h2 className="sec-title">
              Sri Lanka's Most Trusted <br /> Travel Platform
            </h2>
          </div>

          <p>
            Discover Sri Lanka through a platform built for travellers who seek authenticity, comfort, and reliability. Whether you're exploring ancient cities, pristine beaches, or misty mountains, we bring you the best experiences—all in one trusted place.
          </p>

          <p>
            Our mission is to make your journey smoother, safer, and more meaningful. With personalised recommendations, verified guides, and seamless planning tools, we ensure every traveller enjoys Sri Lanka’s beauty without hassle.
          </p>

          {/* ABOUT ITEMS */}
          <div className="about-item-wrap">
            <div className="about-item">
              <div className="about-item-img circle">
                <div className="flip-icon">
                  <img src={icon1} alt="icon" />
                </div>
              </div>
              <div className="about-item-content">
                <h5>Exclusive Trip</h5>
                <p>Personalized trips with the shortest, most convenient routes.</p>
              </div>
            </div>

            <div className="about-item">
              <div className="about-item-img circle">
                <div className="flip-icon">
                  <img src={icon2} alt="icon" />
                </div>
              </div>
              <div className="about-item-content">
                <h5>Safety First Always</h5>
                <p>Your safety is our priority, with all services fully verified.</p>
              </div>
            </div>

            <div className="about-item">
              <div className="about-item-img circle">
                <div className="flip-icon">
                  <img src={icon3} alt="icon" />
                </div>
              </div>
              <div className="about-item-content">
                <h5>Professional Guide</h5>
                <p>Travel confidently with friendly, expert local guides.</p>
              </div>
            </div>
          </div>

          <div className="about-button">
            <a className="contact-btn" href="/contact">Contact With Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMiddle;
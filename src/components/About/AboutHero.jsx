import oceanimg from "../../assets/ocean1.jpeg";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <div className="about-hero">
      <div className="parallax-wrapper">
        <img src={oceanimg} alt="ocean background" className="parallax-img" />
      </div>
    
      <div className="hero-content">
       
        <h1 className="main-title">About TRIPGENIX</h1>
        <div className="title-underline"></div>
      </div>
    </div>
  );
}
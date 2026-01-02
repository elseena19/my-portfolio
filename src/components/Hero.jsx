import "./Hero.css";
import Lottie from "lottie-react";
import heroAnimation from "../assets/ai-graphic.json";

export default function Hero() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <p className="hero-badge">
            Full-Stack Web Developer • AI-Focused
          </p>

          <p className="hero-status">
            <span className="status-dot"></span>
            Working at Elytri AI Innovation Pvt. Ltd.
          </p>

          <h1 className="hero-title">
            Hi, I’m <br />
            <span className="gradient-text">Elseena Niveditha</span>
          </h1>

          <p className="hero-desc">
            Full-Stack Web Developer with 1.7+ years of experience building scalable,
            production-ready web applications enhanced with AI-powered features
            and automation workflows.
          </p>

          <div className="hero-buttons">
            {/* Scroll to Experience */}
            <button
              className="btn-primary"
              onClick={() => scrollToSection("experience")}
            >
              View Experience
            </button>

            {/* External Link */}
            <a
              className="btn-secondary"
              href="https://www.linkedin.com/in/elseena-niveditha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>

            {/* Scroll to Contact */}
            <button
              className="btn-secondary"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT GRAPHIC */}
        <div className="hero-right">
          <Lottie
            animationData={heroAnimation}
            loop
            className="hero-lottie"
          />
        </div>

      </div>
    </section>
  );
}

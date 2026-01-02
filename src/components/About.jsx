import "./About.css";
import profileImg from "../assets/profile.jpg"; // <-- your photo
// Optional: Lottie background
import Lottie from "lottie-react";
import aiGraphic from "../assets/ai-graphic.json";

export default function About() {
  return (
    <section className="about-section">
      {/* Background animation */}
      <div className="about-bg-animation">
        {
        <Lottie animationData={aiGraphic} loop />
        }
      </div>

      {/* SECTION HEADER (OUTSIDE CARD) */}
      <div className="about-header">
        <span className="about-label">ABOUT ME</span>
        <h2 className="about-heading">Developer who delivers</h2>
        <div className="about-underline"></div>
      </div>

      {/* CONTENT */}
      <div className="about-wrapper">
        {/* LEFT CARD */}
        <div className="about-left glass-card">
          <p>
            I am a Full-Stack Web Developer with 1.7+ years of experience building
            and maintaining scalable web applications.
          </p>

          <p>
            I work mainly with WordPress, backend development, and API integrations
            using Python, PHP, and JavaScript. I focus on clean, secure, and
            performance-driven solutions.
          </p>

          <ul className="about-points">
            <li>Full-stack web development & backend systems</li>
            <li>API integrations, payment gateways & automation</li>
            <li>AI-powered features and creative AI content</li>
            <li>Performance optimization & scalability</li>
          </ul>

          <div className="about-stats">
            <div className="stat-card">
              <span>Experience</span>
              <strong>1.7+ yrs</strong>
            </div>
            <div className="stat-card">
              <span>Role</span>
              <strong>Full-Stack Developer</strong>
            </div>
            <div className="stat-card">
              <span>Focus</span>
              <strong>AI-Enhanced Applications</strong>
            </div>
          </div>
        </div>

        {/* RIGHT PROFILE CARD */}
        <div className="profile-card glass-card">
          <div className="profile-ring">
            <img src={profileImg} alt="Elseena Niveditha" />
          </div>

          <h3>Elseena Niveditha</h3>
          <p className="role">Full-Stack Developer</p>

          <div className="profile-info">
            <div>
              <span>Email</span>
              elseenaniveditha@gmail.com
            </div>
            <div>
              <span>Phone</span>
              +91 8660294964
            </div>
            <div>
              <span>Location</span>
              Bengaluru, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

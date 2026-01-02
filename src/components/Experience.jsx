import "./Experience.css";
import Lottie from "lottie-react";
import aiGraphic from "../assets/ai-graphic.json";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">

      {/* Background animation */}
      <div className="experience-bg-animation">
        <Lottie animationData={aiGraphic} loop />
      </div>

      <div className="experience-wrapper">
        {/* Header */}
        <div className="experience-header">
          <span className="experience-label">CAREER</span>
          <h2 className="experience-title">Experience</h2>
          <div className="experience-underline"></div>
        </div>
        
        {/* Experience Card 1 */}
        
        <div className="experience-card">
          <div className="experience-card-header">
            <div>
              <h3>Associate Engineer (WordPress / Web Developer)</h3>
              <p className="company">Elytri AI Innovation Pvt. Ltd.</p>
            </div>
            <span className="date">March 2025 – Present</span>
          </div>

          <ul className="experience-points">
            <li>Designed and developed WordPress-based websites and plugins with a focus on performance and scalability</li>
            <li>Built AI-powered WordPress plugins for automated FAQ generation and review response systems</li>
            <li>Integrated AI services and backend APIs following secure, API-first architecture</li>
            <li>Developed responsive e-commerce websites using Elementor and WooCommerce</li>
            <li>Implemented third-party APIs and payment gateways with secure data handling</li>
            <li>Managed deployments and updates using Git and cloud CI/CD platforms such as Railway</li>
            <li>Collaborated with cross-functional teams to deliver production-ready web solutions</li>
          </ul>
        </div>

        {/* Experience Card 2 */}
        <div className="experience-card">
          <div className="experience-card-header">
            <div>
              <h3>AI Full Stack Developer</h3>
              <p className="company">Vision Impact</p>
            </div>
            <span className="date">March 2024 – March 2025</span>
          </div>

          <ul className="experience-points">
            <li>Developed and maintained full-stack web applications using Python, PHP, and JavaScript</li>
            <li>Built AI-driven automation bots for WhatsApp and Telegram platforms</li>
            <li>Integrated AI features using available AI frameworks and APIs</li>
            <li>Implemented Razorpay payment gateway for secure online transactions</li>
            <li>Worked on RESTful and GraphQL APIs for backend services</li>
            <li>Contributed to no-code platform development for rapid application creation</li>
            <li>Collaborated with senior developers to improve system architecture</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

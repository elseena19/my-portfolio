import "./Projects.css";
import { useState } from "react";
import Lottie from "lottie-react";
import aiGraphic from "../assets/ai-graphic.json";

export default function Projects() {
  const [showWebsites, setShowWebsites] = useState(false);

  return (
    <section className="projects-section">
      {/* Background animation */}
      <div className="projects-bg-animation">
        <Lottie animationData={aiGraphic} loop />
      </div>

      <div className="projects-wrapper">
        {/* Header */}
        <div className="projects-header">
          <span className="projects-label">PORTFOLIO</span>
          <h2 className="projects-title">Projects</h2>
          <div className="projects-underline"></div>
        </div>

        {/* Cards */}
        <div className="projects-grid">

          {/* Web Development Projects */}
          <div className="project-card">
            <h3 className="project-title">Web Development Projects</h3>

            <p className="project-desc">
              A collection of production-ready websites developed for businesses,
              education, and content platforms. These projects focus on
              performance, responsive design, SEO, and maintainable architecture.
            </p>

            {/* Toggle */}
            <div
              className="project-links-toggle"
              onClick={() => setShowWebsites(!showWebsites)}
            >
              🌐 View Live Websites (5)
            </div>

            {showWebsites && (
              <div className="project-links-popup">
                <a href="https://trsfashions.com" target="_blank" rel="noreferrer">
                  trsfashions.com
                </a>
                <a href="https://upasanabooks.com" target="_blank" rel="noreferrer">
                  upasanabooks.com
                </a>
                <a href="https://kannadatypography.com" target="_blank" rel="noreferrer">
                  kannadatypography.com
                </a>
                <a href="https://krisschool.in" target="_blank" rel="noreferrer">
                  krisschool.in
                </a>
                <a href="https://elytri.com" target="_blank" rel="noreferrer">
                  elytri.com
                </a>
              </div>
            )}

            <ul className="project-points">
              <li>Responsive and mobile-first design</li>
              <li>SEO-optimized & performance-focused pages</li>
              <li>Secure integrations & CMS structure</li>
              <li>Real-world production deployments</li>
            </ul>

            <div className="project-tags">
              <span>WordPress</span>
              <span>PHP</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>WooCommerce</span>
            </div>
          </div>

          {/* Custom WordPress Plugin */}
          <div className="project-card">
            <h3 className="project-title">
              Custom WordPress Plugin (AI-Powered)
            </h3>

            <p className="project-desc">
              A custom WordPress plugin developed to automate FAQ generation and
              review responses using AI models. Built for internal and
              client-specific use.
            </p>

            <ul className="project-points">
              <li>AI-driven FAQ content generation</li>
              <li>Automated review response system</li>
              <li>Secure API integrations</li>
              <li>Admin-controlled plugin configuration</li>
            </ul>

            <p className="project-private">🔒 Private / Internal Implementation</p>

            <div className="project-tags">
              <span>WordPress</span>
              <span>PHP</span>
              <span>OpenAI API</span>
              <span>Hugging Face</span>
            </div>
          </div>

          {/* AI Creative Projects */}
          <div className="project-card">
            <h3 className="project-title">
              AI Creative Projects (Videos & Images)
            </h3>

            <p className="project-desc">
              A collection of AI-generated videos and images created from original
              scripts and concepts, focusing on creative AI workflows and
              storytelling.
            </p>

            <ul className="project-points">
              <li>Script-to-video AI generation</li>
              <li>Scene & character consistency</li>
              <li>Advanced prompt engineering</li>
              <li>AI-generated creative visuals</li>
            </ul>

            <a
              href="https://drive.google.com/drive/folders/1mh5qfhELLjN0bcIzSb23xV7vdCGkHNj7?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              ▶ View AI Video Samples
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

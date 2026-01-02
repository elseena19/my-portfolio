import "./Contact.css";
import Lottie from "lottie-react";
import aiGraphic from "../assets/ai-graphic.json";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      
      {/* Background Animation */}
      <div className="contact-bg-animation">
        <Lottie animationData={aiGraphic} loop />
      </div>

      <div className="contact-wrapper">
        <div className="contact-card">
          <span className="contact-label">GET IN TOUCH</span>
          <h2 className="contact-title">Let’s build something great</h2>

          <div className="contact-actions">
            <a
              href="mailto:elseenaniveditha@gmail.com"
              className="contact-btn primary"
            >
              Email me
            </a>

            <a
              href="https://wa.me/918660294964"
              target="_blank"
              rel="noreferrer"
              className="contact-btn secondary"
            >
              Call / WhatsApp
            </a>
          </div>

          <p className="contact-note">
            Typical response time: &lt; 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}

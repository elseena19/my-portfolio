import "./Skills.css";
import Lottie from "lottie-react";
import aiGraphic from "../assets/ai-graphic.json";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "PHP", icon: "🐘" },
  { name: "JavaScript", icon: "🟨" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "SQL", icon: "🗄️" },
  { name: "WordPress", icon: "📝" },
  { name: "Elementor", icon: "🧩" },
  { name: "WooCommerce", icon: "🛒" },
  { name: "Shopify", icon: "🏬" },
  { name: "Django", icon: "🌿" },
  { name: "REST APIs", icon: "🔗" },
  { name: "OpenAI APIs", icon: "🤖" },
  { name: "Hugging Face", icon: "🤗" },
  { name: "PyTorch", icon: "🔥" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "AI Automation", icon: "⚙️" },
  { name: "LangGraph", icon: "🧩" },
  { name: "AutoGen", icon: "🔄" },
  { name: "CrewAI", icon: "👥" },
  { name: "GraphQL", icon: "🕸️" },
  { name: "Razorpay", icon: "💳" },
  { name: "Shiprocket", icon: "🚚" },
  { name: "WhatsApp API", icon: "💬" },
  { name: "Telegram Bot API", icon: "📨" },
  { name: "Google APIs", icon: "🌍" },
];

export default function Skills() {
  return (
    <section className="skills-section">

      {/* 2️⃣ AI GRAPHIC LAYER */}
      <div className="skills-bg-graphic">
        <Lottie animationData={aiGraphic} loop />
      </div>

      {/* 3️⃣ CONTENT */}
      <div className="skills-content">

        <div className="skills-header">
          <span className="skills-label">CAPABILITIES</span>
          <h2 className="skills-title">Skills</h2>
          <div className="skills-underline"></div>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import "./Services.css";

function Services() {
  return (
    <section id="services">
      <h2>My Services</h2>
      <div className="services-container">
        <div className="service-box">
          <FaCode size={40} />
          <h3>Web Development</h3>
          <p>Building responsive and modern websites.</p>
        </div>
        <div className="service-box">
          <FaPaintBrush size={40} />
          <h3>UI/UX Design</h3>
          <p>Designing user-friendly and attractive interfaces.</p>
        </div>
        <div className="service-box">
          <FaMobileAlt size={40} />
          <h3>Mobile Apps</h3>
          <p>Creating cross-platform mobile applications.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;

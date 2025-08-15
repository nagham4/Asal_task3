import React from "react";

export default function Experience() {
  return (
    <div className="experienceContainer">
      <h2 className="sectionTitle">Professional Experience</h2>

      <div className="experience">
        <h3>Frontend Developer — Freelance</h3>
        <span className="year">Jan 2024-Present</span>
        <p className="italic">Palestine - Jenin</p>
        <ul>
          <li>Developed responsive, mobile-first websites using HTML, CSS, JavaScript, and React.</li>
          <li>Implemented reusable UI components for faster development cycles.</li>
          <li>Optimized site performance, improving load times by up to 30%.</li>
          <li>Collaborated with clients to refine requirements and deliver tailored solutions.</li>
        </ul>
      </div>

      <div className="experience">
        <h3>Frontend Development Intern — Asal Company</h3>
        <span className="year">Sep 2023-Dec 2023</span>
        <p className="italic">Palestine - Jenin</p>
        <ul>
          <li>Assisted in building and maintaining React components for a client dashboard.</li>
          <li>Worked with REST APIs to fetch and display dynamic data.</li>
          <li>Improved accessibility and SEO performance across multiple pages.</li>
        </ul>
      </div>
    </div>
  );
}

import './resume.css';
import React from "react";
import Summary from "./Summary";
import Education from "./Education";
import Experience from "./Experience";

export default function Resume() {
  return (
    <div className="resumeContainer">
      <h1 className="resumeTitle">Resume</h1>
      <p className="resumeIntro">
        Below is a summary of my professional experience, education, and skills. I am passionate about continuous learning and growth in my career.
      </p>

      <div className="resumeContent">
        <div className="leftColumn">
          <Summary />
          <Education />
        </div>
        <div className="rightColumn">
          <Experience />
        </div>
      </div>
    </div>
  );
}

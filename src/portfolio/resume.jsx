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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptatem non est provident, temporibus praesentium in corrupti nemo obcaecati modi esse explicabo asperiores, laboriosam iste! Ad provident facere labore exercitationem!
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

import React from "react";
import "./skills.css";


const skillsData = [
  { name: "HTML", level: 100 },
  { name: "PHP", level: 80 },
  { name: "CSS", level: 90 },
  { name: "WordPress/CMS", level: 90 },
  { name: "JavaScript", level: 75 },
  { name: "Photoshop", level: 55 },
];

export default function Skills() {
  return (
    <div className="skillsContainer">
      <h1 className="skillsHeading">Skills</h1>
      <p className="skillsText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore soluta possimus.
      </p>

      <div className="skillsGrid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skillBox">
            <div className="skillHeader">
              <span className="skillName">{skill.name}</span>
              <span className="skillPercentage">{skill.level}%</span>
            </div>
            <div className="barBackground">
              <div
                className="barFill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




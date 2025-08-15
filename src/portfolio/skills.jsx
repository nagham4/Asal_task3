import React from "react";
import "./skills.css";


const skillsData = [
  { name: "HTML5, CSS3, JavaScript (ES6+)", level: 100 },
  { name: "PHP", level: 80 },
  { name: "TypeScript", level: 90 },
  { name: "React.js", level: 90 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Figma", level: 70 },
];

export default function Skills() {
  return (
    <div className="skillsContainer">
      <h1 className="skillsHeading">Skills</h1>
      <p className="skillsText">
        Here are some of the skills I have acquired over the years. I am always eager to learn more and improve my abilities.
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




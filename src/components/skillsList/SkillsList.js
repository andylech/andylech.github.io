import React from "react";
import "./SkillsList.scss";
import {skillsSection} from "../../portfolio";

export default function SkillsList() {
  return (
    <div>
      <div className="skills-list-main-div">
        <ul className="dev-icons">
          {skillsSection.skillsList.map((skills, i) => {
            return (
              <li key={i} className="skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

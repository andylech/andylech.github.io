import React, {useContext} from "react";
import "./Skills.scss";
// import SkillsList from "../../components/skillsList/SkillsList";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <div className="skills-text-div">
          <h1
            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
          >
            {skillsSection.title}{" "}
          </h1>
          {/* <SkillsList /> */}
          <div>
            {skillsSection.skillsList.map((skill, i) => {
              return (
                <p
                  key={i}
                  className={isDark ? "dark-mode skills-text" : "skills-text"}
                >
                  {skill}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

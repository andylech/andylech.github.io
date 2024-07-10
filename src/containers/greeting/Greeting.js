import React, {useContext} from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greeting-main-div" id="greeting">
      <div className="greeting-text-div">
        <div>
          <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
            {" "}
            {greeting.title}{" "}
          </h1>
          <p
            className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p"}
          >
            {greeting.subTitle}
          </p>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

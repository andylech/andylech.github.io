import React, {useContext} from "react";
import "./Footer.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="footer-div">
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        Theme by{" "}
        <a href="https://github.com/saadpasta/developerFolio">developerFolio</a>{" "}
        team
      </p>
    </div>
  );
}

import React, {useContext} from "react";
import "./Footer.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="footer-div">
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        Hosted on GitHub Pages from{" "}
        <a href="https://github.com/andylech/andylech.github.io">
          andylech.github.io
        </a>
      </p>
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        Original theme by{" "}
        <a href="https://github.com/saadpasta/developerFolio">developerFolio</a>{" "}
        team
      </p>
    </div>
  );
}

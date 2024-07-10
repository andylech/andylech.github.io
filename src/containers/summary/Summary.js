import React from "react";
import "./Summary.scss";
import {summarySection} from "../../portfolio";

export default function Summary() {
  if (!summarySection.display) {
    return null;
  }
  return (
    <div className="section-div" id="summary">
      <div className="summary-content-div">
        <h1 className="section-title">{summarySection.title}</h1>
        <div className="summary-text-div">
          {summarySection.highlightList.map((highlight, i) => {
            return (
              <li key={i} className="summary-text">
                {highlight}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

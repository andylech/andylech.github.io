import React, {useContext} from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import {talkSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <div className="section-div" id="talks">
      <div className="talks-content-div">
        <h1 className="section-title">{talkSection.title}</h1>
        {/* <p
          className={
            isDark
              ? "dark-mode talk-header-subtitle"
              : "subTitle talk-header-subtitle"
          }
        >
          {talkSection.subtitle}
        </p> */}
        <div className="button-div">
          <Button
            className="project-button"
            text="Sessionize Profile"
            target="reference"
            href={talkSection.sessionizeProfile}
          />
        </div>
        {talkSection.talks.map((talk, i) => {
          return (
            <TalkCard
              key={i}
              talkDetails={{
                title: talk.title,
                subtitle: talk.subtitle,
                slides_url: talk.slides_url,
                event_url: talk.event_url,
                image: talk.image,
                isDark
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

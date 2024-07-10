import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";

export default function Contact() {
  return (
    <div className="section-div" id="contact">
      <div className="contact-content-div">
        <h1 className="section-title">{contactInfo.title}</h1>
        {/* <p
          className={
            isDark
              ? "dark-mode contact-subtitle"
              : "subTitle contact-subtitle"
          }
        >
          {contactInfo.subtitle}
        </p> */}
        <div className="contact-text-div">
          {contactInfo.number && (
            <>
              <a className="contact-detail" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
              <br />
              <br />
            </>
          )}
          <a
            className="contact-detail-email"
            href={"mailto:" + contactInfo.email_address}
          >
            {contactInfo.email_address}
          </a>
          <br />
          <br />
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./index.css";

import { texts } from "../../theme/infoObjects/all.ts";
import { Header } from "../Header/Header.tsx";
import { Phone } from "../../theme/icons/Phone.tsx";
import { Mail } from "../../theme/icons/Mail.tsx";
import { WebIcon } from "../../theme/icons/WebIcon.tsx";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts-content">
        <Header
          location="contacts"
          styles={{
            flexDirection: "column",
            gap: 15,
            marginTop: 0,
            marginLeft: 0,
            position: "initial",
          }}
        />
        <div className="contacts-line" />
        <div className="contacts-section">
          <p className="contacts-text">{texts.contacts.adress1}</p>
          <p className="contacts-text">{texts.contacts.adress2}</p>
        </div>
        <div className="contacts-line" />
        <div className="contacts-section">
          <div className="contact-section-content">
            <Phone className="contact-link-icon" />
            <a className="contact-link" href="tel:+375296182295">
              {texts.contacts.phone}
            </a>
          </div>
          <div className="contact-section-content">
            <Mail className="contact-link-icon" />
            <a className="contact-link" href="mailto:beltopagent@gmail.com">
              {texts.contacts.mail}
            </a>
          </div>
          <div className="contact-section-content">
            <WebIcon className="contact-link-icon" />
            <a className="contact-link" href="http/beltopagent.by">
              {texts.contacts.webSite}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

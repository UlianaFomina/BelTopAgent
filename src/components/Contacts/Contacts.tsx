import React from "react";
import "./index.css";

import { texts } from "../../theme/infoObjects/all.ts";
import { Header } from "../Header/Header.tsx";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts-content">
        <Header location="contacts" />
        <div className="contacts-line" />
        <div className="contacts-section">
          <p className="contacts-text">{texts.contacts.adress1}</p>
          <p className="contacts-text">{texts.contacts.adress2}</p>
        </div>
        <div className="contacts-line" />
        <div className="contacts-section" style={{ gap: 20 }}>
          <a href="tel:+375296182295">{texts.contacts.phone}</a>
          <a href="mailto:beltopagent@gmail.com">{texts.contacts.mail}</a>
          <a href="http/beltopagent.by">{texts.contacts.webSite}</a>
        </div>
      </div>
    </div>
  );
};

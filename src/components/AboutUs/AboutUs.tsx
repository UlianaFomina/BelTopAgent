import React from "react";
import "./index.css";

import { texts } from "../../theme/infoObjects/all.ts";

export const AboutUs = () => {
  return (
    <div className="about">
      <div className="about-info">
        <p className="about-info-text" style={{ textAlign: "right" }}>
          {texts.aboutUs.text1}
        </p>
      </div>
      <div className="about-logo"></div>
      <div className="about-info">
        <p className="about-info-text" style={{ textAlign: "left" }}>
          {texts.aboutUs.text2}
        </p>
      </div>
    </div>
  );
};

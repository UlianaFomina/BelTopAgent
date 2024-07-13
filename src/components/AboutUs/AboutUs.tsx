import React from "react";
import "./index.css";

import { texts } from "../../theme/infoObjects/all.ts";
import { Speedometr } from "../../theme/icons/Speedometer.tsx";
import { Licence } from "../../theme/icons/Licence.tsx";
import Logo from "../../theme/images/Logo.png";

export const AboutUs = () => {
  return (
    <div className="about">
      <div className="about-info">
        <div className="about-info-content">
          <Speedometr className="speedometr-icon" />
          <p className="about-info-text" style={{ textAlign: "right" }}>
            {texts.aboutUs.text1}
          </p>
        </div>
      </div>
      <div className="about-logo">
        <img src={Logo} alt="logo" className="about-logo-img" />
      </div>
      <div className="about-info">
        <div className="about-info-content">
          <p className="about-info-text" style={{ textAlign: "left" }}>
            {texts.aboutUs.text2}
          </p>
          <Licence className="licence-icon" />
        </div>
      </div>
    </div>
  );
};

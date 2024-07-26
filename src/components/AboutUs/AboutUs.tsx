import React, { useEffect } from "react";
import "./index.css";

import { texts } from "../../theme/infoObjects/all.ts";
import { Speedometr } from "../../theme/icons/Speedometer.tsx";
import { Licence } from "../../theme/icons/Licence.tsx";
import { Pages } from "../../models.ts";
import Logo from "../../theme/images/Logo.png";
import { useInView } from "react-intersection-observer";

interface IAboutUsProps {
  setLocation: (val: Pages) => void;
}

export const AboutUs = ({ setLocation }: IAboutUsProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) setLocation(Pages.ABOUT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className="about" id={Pages.ABOUT}>
      <div className="about-info">
        <div className="about-info-content">
          <Speedometr className="speedometr-icon" />
          <p className="about-info-text" style={{ textAlign: "right" }}>
            {texts.aboutUs.text1}
          </p>
        </div>
      </div>
      <div className="about-logo" ref={ref}>
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

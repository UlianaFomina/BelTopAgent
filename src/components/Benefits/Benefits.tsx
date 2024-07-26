import React, { useEffect } from "react";
import "./index.css";

import { texts } from "../../theme/infoObjects/all.ts";
import { Pages } from "../../models.ts";
import { useInView } from "react-intersection-observer";

interface IBenefitsProps {
  setLocation: (val: Pages) => void;
}

export const Benefits = ({ setLocation }: IBenefitsProps) => {
  const options = Object.values(texts.benefits.options);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) setLocation(Pages.BENEFITS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <div className="benefits layout" id={Pages.BENEFITS}>
      <h3 className="benefits-title" ref={ref}>
        {texts.benefits.title}
      </h3>
      <div className="benefits-option-list">
        {options.map((option, index) => {
          return (
            <div className="option-container" key={index}>
              <p className="option-text">{option}</p>
              {index === options.length - 1 ? (
                <></>
              ) : (
                <div className="option-line" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

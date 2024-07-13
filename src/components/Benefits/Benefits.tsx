import React from "react";
import "./index.css";

import { texts } from "../../theme/infoObjects/all.ts";

export const Benefits = () => {
  const options = Object.values(texts.benefits.options);
  return (
    <div className="benefits layout">
      <h3 className="benefits-title">{texts.benefits.title}</h3>
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

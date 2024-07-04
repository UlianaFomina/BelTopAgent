import React, { ReactElement } from "react";
import "./index.css";

import { texts } from "../../theme/infoObjects/all.ts";

export const Offers = () => {
  return (
    <div className="offers">
      <h2 className="offers-title">{texts.offers.title}</h2>
      <div className="offers-setcion-container">
        <Section
          content={[
            texts.offers.option1,
            "2",
            texts.offers.option3,
            "4",
            texts.offers.option5,
          ]}
        />
        <Section
          content={["1", texts.offers.option2, "3", texts.offers.option4, "5"]}
        />
      </div>
    </div>
  );
};

type ISectionProps = {
  content: string[];
};

const Section = ({ content }: ISectionProps) => {
  return (
    <div className="offers-section">
      {content.map((item) => {
        if (item.length === 1) {
          return <p className="offers-section-num">{item}</p>;
        } else {
          return (
            <div className="offers-section-info">
              <p className="offers-section-info-text">{item}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

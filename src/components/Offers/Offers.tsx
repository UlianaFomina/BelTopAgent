import React, { useEffect } from "react";
import "./index.css";

import { texts } from "../../theme/infoObjects/all.ts";
import { Pages } from "../../models.ts";
import { useInView } from "react-intersection-observer";

interface IOffersProps {
  setLocation: (val: Pages) => void;
}

export const Offers = ({ setLocation }: IOffersProps) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) setLocation(Pages.OFFERS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className="offers" id={Pages.OFFERS}>
      <h2 className="offers-title" ref={ref}>
        {texts.offers.title}
      </h2>
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
          return (
            <p className="offers-section-num" key={item}>
              {item}
            </p>
          );
        } else {
          return (
            <div className="offers-section-info" key={item}>
              <p className="offers-section-info-text">{item}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

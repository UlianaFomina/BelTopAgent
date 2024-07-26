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

  const isHorisontalOrientation = window.innerHeight < window.innerWidth;

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
          isHorisontalOrientation={isHorisontalOrientation}
        />
        <Section
          isHorisontalOrientation={isHorisontalOrientation}
          content={["1", texts.offers.option2, "3", texts.offers.option4, "5"]}
        />
      </div>
    </div>
  );
};

type ISectionProps = {
  content: string[];
  isHorisontalOrientation?: boolean;
};

const Section = ({ content, isHorisontalOrientation }: ISectionProps) => {
  return (
    <div
      className="offers-section"
      style={{
        flexDirection: isHorisontalOrientation ? "row" : "column",
        width: isHorisontalOrientation ? "" : "100%",
        alignSelf: "center",
      }}
    >
      {content.map((item) => {
        if (item.length === 1 && isHorisontalOrientation) {
          return (
            <p className="offers-section-num" key={item}>
              {item}
            </p>
          );
        } else if (item.length !== 1) {
          return (
            <div
              className="offers-section-info"
              key={item}
              style={{
                width: isHorisontalOrientation ? "" : "70%",
                padding: isHorisontalOrientation ? "" : "5%",
              }}
            >
              <p className="offers-section-info-text">{item}</p>
            </div>
          );
        } else return <></>;
      })}
    </div>
  );
};

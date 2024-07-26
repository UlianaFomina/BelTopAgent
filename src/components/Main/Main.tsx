import React, { useEffect } from "react";
import "./index.css";
import MainImg from "../../theme/images/Main.png";
import { texts, titles } from "../../theme/infoObjects/all.ts";
import { Pages } from "../../models.ts";
import { useInView } from "react-intersection-observer";

interface IMainProps {
  setHeaderMode: (val: "dark" | "light" | undefined) => void;
  setLocation: (val: Pages) => void;
}

export const Main = ({ setHeaderMode, setLocation }: IMainProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setHeaderMode("light");
      setLocation(Pages.MAIN);
    } else {
      setHeaderMode("dark");
      setLocation(Pages.ABOUT);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className="main" id={Pages.MAIN}>
      <div className="main-info">
        <div className="main-info-title" ref={ref}>
          <h1 className="main-info-title-text">{titles.projectName}</h1>
        </div>
        <div className="main-info-desk">
          <h2 className="main-info-desk-text">{texts.main.desc}</h2>
        </div>
      </div>
      <img src={MainImg} alt="main-image" className="main-img" />
    </div>
  );
};

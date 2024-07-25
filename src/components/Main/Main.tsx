import React from "react";
import "./index.css";
import MainImg from "../../theme/images/Main.png";
import { texts, titles } from "../../theme/infoObjects/all.ts";
import { Pages } from "../../models.ts";

export const Main = () => {
  return (
    <div className="main" id={Pages.MAIN}>
      <div className="main-info">
        <div className="main-info-title">
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

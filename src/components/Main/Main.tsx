import React from "react";
import "./index.css";
import MainImg from "../../theme/images/Main.png";

export const Main = () => {
  return (
    <div className="main">
      <div className="main-info">
        <h1>БЕЛТОПАГЕНТ</h1>
        <div>
          <h2>
            Трубы и трубная продукция для нефтегазовой и нефтехимической
            промышленности
          </h2>
        </div>
      </div>
      <img src={MainImg} alt="main-image" />
    </div>
  );
};

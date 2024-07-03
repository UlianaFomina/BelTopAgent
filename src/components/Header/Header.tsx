import React from "react";
import "./index.css";
import { LogoMini } from "../../theme/icons/LogoMini.tsx";

export const Header = () => {
  return (
    <div className="header-container">
      <LogoMini />
      <h3>О НАС</h3>
      <h3>ПРЕДЛОЖЕНИЯ</h3>
      <h3>ПРЕИМУЩЕСТВА</h3>
      <h3>КОНТАКТЫ</h3>
    </div>
  );
};

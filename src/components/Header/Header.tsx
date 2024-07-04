import React from "react";
import "./index.css";
import { LogoMini } from "../../theme/icons/LogoMini.tsx";
import { titles } from "../../theme/infoObjects/all.ts";

export const Header = () => {
  return (
    <div className="header-container">
      <LogoMini />
      <a href="/#">{titles.aboutUs}</a>
      <a href="/#">{titles.offers}</a>
      <a href="/#">{titles.benefits}</a>
      <a href="/#">{titles.contacts}</a>
    </div>
  );
};

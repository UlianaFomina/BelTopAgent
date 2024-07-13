import React from "react";
import "./index.css";
import { LogoMini } from "../../theme/icons/LogoMini.tsx";
import { titles } from "../../theme/infoObjects/all.ts";

interface IHeaderProps {
  location?: "main" | "about" | "benefits" | "offers" | "contacts";
  styles?: React.CSSProperties;
}

export const Header = ({ location, styles }: IHeaderProps) => {
  return (
    <div className="header-container" style={styles}>
      <LogoMini className="header-logo" />
      <a href="/#" className="header-link">
        {titles.aboutUs}
      </a>
      <a href="/#" className="header-link">
        {titles.offers}
      </a>
      <a href="/#" className="header-link">
        {titles.benefits}
      </a>
      <a href="/#" className="header-link">
        {titles.contacts}
      </a>
    </div>
  );
};

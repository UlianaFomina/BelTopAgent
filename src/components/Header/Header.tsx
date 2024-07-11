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
      <LogoMini />
      <a href="/#">{titles.aboutUs}</a>
      <a href="/#">{titles.offers}</a>
      <a href="/#">{titles.benefits}</a>
      <a href="/#">{titles.contacts}</a>
    </div>
  );
};

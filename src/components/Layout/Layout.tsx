import React, { ReactElement } from "react";
import "./index.css";
import { Header } from "../Header/Header.tsx";

interface ILayoutProps {
  children?: ReactElement;
  location?: "main" | "about" | "benefits" | "offers" | "contacts";
}

export const Layout = ({ children, location }: ILayoutProps) => {
  return (
    <div className="layout">
      <Header location={location} />
      {children}
    </div>
  );
};

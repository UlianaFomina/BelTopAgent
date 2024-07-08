import React, { ReactElement } from "react";
import "./index.css";
import { Header } from "../Header/Header.tsx";

interface ILayoutProps {
  children?: ReactElement;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

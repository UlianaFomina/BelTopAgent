import React, { ReactElement } from "react";
import "./index.css";
import { LogoMini } from "../../theme/icons/LogoMini.tsx";
import { titles } from "../../theme/infoObjects/all.ts";
import { Pages } from "../../models.ts";

interface IHeaderProps {
  location: Pages;
  setLocation?: (val: Pages) => void;
  styles?: React.CSSProperties;
}

type IHeaderItem = {
  content: ReactElement | string;
  id: Pages;
};

const headerList: IHeaderItem[] = [
  {
    content: <LogoMini className="header-logo" />,
    id: Pages.MAIN,
  },
  {
    content: titles.aboutUs,
    id: Pages.ABOUT,
  },
  {
    content: titles.offers,
    id: Pages.OFFERS,
  },
  {
    content: titles.benefits,
    id: Pages.BENEFITS,
  },
  {
    content: titles.contacts,
    id: Pages.CONTACTS,
  },
];

export const Header = ({ location, setLocation, styles }: IHeaderProps) => {
  return (
    <div className="header-container" style={styles}>
      {headerList.map((item) => {
        return (
          <button onClick={() => ScrollById(item.id)}>{item.content}</button>
        );
      })}
    </div>
  );
};

const ScrollById = (id: Pages) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

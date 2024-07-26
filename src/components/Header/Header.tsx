import React, { ReactElement } from "react";
import "./index.css";
import { LogoMini } from "../../theme/icons/LogoMini.tsx";
import { titles } from "../../theme/infoObjects/all.ts";
import { Pages } from "../../models.ts";

interface IHeaderProps {
  mode?: "dark" | "light";
  setLocation: (val: Pages) => void;
  location: Pages;
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

export const Header = ({
  setLocation,
  styles,
  mode,
  location,
}: IHeaderProps) => {
  return (
    <div className="header-container" style={styles}>
      {headerList.map((item) => {
        const activeClass =
          item.id === location
            ? `header-link-${mode}-active`
            : `header-link-${mode}`;
        return (
          <button
            onClick={() => {
              ScrollById(item.id);
              setLocation(item.id);
            }}
            key={item.id}
            style={{}}
            className={`${activeClass} header-link`}
          >
            {item.content}
          </button>
        );
      })}
    </div>
  );
};

export const ScrollById = (id: Pages) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

import React from "react";
import "./index.css";

import { Main } from "../../components/Main/Main.tsx";
import { AboutUs } from "../../components/AboutUs/AboutUs.tsx";
import { Offers } from "../../components/Offers/Offers.tsx";
import { Benefits } from "../../components/Benefits/Benefits.tsx";
import { Contacts } from "../../components/Contacts/Contacts.tsx";
import { Header } from "../../components/Header/Header.tsx";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Main />
      <AboutUs />
      <Offers />
      <Benefits />
      <Contacts />
    </>
  );
};

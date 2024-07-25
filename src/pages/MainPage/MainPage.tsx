import React, { useState } from "react";
import "./index.css";
import { Pages } from "../../models.ts";

import { Main } from "../../components/Main/Main.tsx";
import { AboutUs } from "../../components/AboutUs/AboutUs.tsx";
import { Offers } from "../../components/Offers/Offers.tsx";
import { Benefits } from "../../components/Benefits/Benefits.tsx";
import { Contacts } from "../../components/Contacts/Contacts.tsx";
import { Header } from "../../components/Header/Header.tsx";

export const MainPage = () => {
  const [location, setLocation] = useState<Pages>(Pages.MAIN);

  return (
    <div className="main-page">
      <Header location={location} setLocation={setLocation} />
      <Main />
      <AboutUs />
      <Offers />
      <Benefits />
      <Contacts />
    </div>
  );
};

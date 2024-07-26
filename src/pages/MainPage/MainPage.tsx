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
  const [headerMode, setHeaderMode] = useState<"dark" | "light" | undefined>(
    "dark"
  );

  return (
    <div className="main-page">
      <Header setLocation={setLocation} mode={headerMode} location={location} />
      <Main setHeaderMode={setHeaderMode} setLocation={setLocation} />
      <AboutUs setLocation={setLocation} />
      <Offers setLocation={setLocation} />
      <Benefits setLocation={setLocation} />
      <Contacts
        setHeaderMode={setHeaderMode}
        location={location}
        setLocation={setLocation}
      />
    </div>
  );
};

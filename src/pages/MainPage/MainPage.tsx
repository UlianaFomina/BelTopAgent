import React from "react";
import "./index.css";
import { Layout } from "../../components/Layout/Layout.tsx";
import { Main } from "../../components/Main/Main.tsx";
import { AboutUs } from "../../components/AboutUs/AboutUs.tsx";
import { Offers } from "../../components/Offers/Offers.tsx";
import { Benefits } from "../../components/Benefits/Benefits.tsx";
import { Contacts } from "../../components/Contacts/Contacts.tsx";

export const MainPage = () => {
  return (
    <>
      <Layout>
        <Main />
      </Layout>
      <Layout>
        <AboutUs />
      </Layout>
      <Layout>
        <Offers />
      </Layout>
      <Layout>
        <Benefits />
      </Layout>
      <Contacts />
    </>
  );
};

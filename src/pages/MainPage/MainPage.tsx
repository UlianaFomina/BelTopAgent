import React from "react";
import "./index.css";
import { Layout } from "../../components/Layout/Layout.tsx";
import { Main } from "../../components/Main/Main.tsx";
import { AboutUs } from "../../components/AboutUs/AboutUs.tsx";
import { Offers } from "../../components/Offers/Offers.tsx";

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
    </>
  );
};

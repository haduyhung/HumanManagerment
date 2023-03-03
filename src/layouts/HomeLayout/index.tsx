import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HomeLayoutWrapper, { ContentWrapper } from "./styled";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <HomeLayoutWrapper>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </HomeLayoutWrapper>
  );
};

export default HomeLayout;

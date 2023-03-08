import React from "react";
import CompanyForm from "../components/CompanyForm";
import CompanyList from "../components/CompanyList";
import CompanyPageWrapper from "./styled";

const CompanyPage = () => {
  return (
    <>
      <CompanyPageWrapper>
        <CompanyForm />
        <CompanyList />
      </CompanyPageWrapper>
    </>
  );
};

export default CompanyPage;

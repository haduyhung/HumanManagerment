import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../../../layouts/HomeLayout";
import {
  deleteCompany,
  getCompany,
  getSearchCompany,
  postUploadCompany,
  putUpdateCompany,
} from "../../../sevices/company";
import { RequestCompany } from "../../../types";
import CompanyForm from "../components/CompanyForm";
import CompanyList from "../components/CompanyList";
import CompanyPageWrapper from "./styled";

const CompanyPage = () => {
  const { companies, setCompanies, showForm, setShowForm, searchInput } =
    useContext(Context);
  const [reload, setReload] = useState<boolean>(false);
  const [company, setCompany] = useState<RequestCompany>({
    _id: "",
    companyName: "",
    email: "",
    address: "",
    phoneNumber: 0,
  });

  const onSubmit = useCallback(
    async (company: RequestCompany, id?: string) => {
      let response = {};
      try {
        if (id) {
          response = await putUpdateCompany(company, id);
        } else response = await postUploadCompany(company);
        setReload(true);
        setCompany({
          _id: "",
          companyName: "",
          email: "",
          address: "",
          phoneNumber: 0,
        });
        setShowForm(false);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    [setShowForm]
  );

  const onDelete = useCallback(async (_id: string) => {
    try {
      const response = await deleteCompany(_id);
      setReload(true);
      return response;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onSearch = useCallback(
    async (data: string) => {
      let response: any;
      response = await getSearchCompany({ data: data });
      setCompanies(response.data.data);
    },
    [setCompanies]
  );

  useEffect(() => {
    onSearch(searchInput);
  }, [onSearch, searchInput]);

  const callGetCompany = useCallback(async () => {
    try {
      const response = await getCompany();
      setCompanies(response.data.data);
      setReload(false);
      return response;
    } catch (error) {
      console.log(error);
    }
  }, [setCompanies]);

  useEffect(() => {
    callGetCompany();
  }, [callGetCompany, reload]);

  return (
    <>
      <CompanyPageWrapper>
        <CompanyList
          {...{
            showForm: showForm,
            setShowForm: setShowForm,
            companies: companies,
            setCompany: setCompany,
            company: company,
            onDelete: onDelete,
          }}
        />
        <CompanyForm
          {...{
            company: company,
            setCompany: setCompany,
            onSubmit: onSubmit,
            showForm: showForm,
            setShowForm: setShowForm,
          }}
        />
      </CompanyPageWrapper>
    </>
  );
};

export default CompanyPage;

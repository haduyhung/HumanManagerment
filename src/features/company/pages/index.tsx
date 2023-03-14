import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../../../layouts/HomeLayout";
import {
  deleteCompany,
  getCompany,
  postUploadCompany,
  putUpdateCompany,
  getSearch,
} from "../../../sevices/company";
import { debounce } from "lodash";
import { RequestCompany } from "../../../types";
import CompanyForm from "../components/CompanyForm";
import CompanyList from "../components/CompanyList";
import CompanyPageWrapper from "./styled";

const CompanyPage = () => {
  const { companies, setCompanies, showForm, setShowForm } =
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

  const debounceSearch = async (data: string) => {
    const responce = await getSearch({ companyName: data });
    console.log("responce", responce);
  };

  const onSearch = debounce((data: string) => {
    debounceSearch(data);
  }, 150);

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
        <div className="search-wrapper">
          <div className="search-label">Search:</div>
          <input
            className="search-input"
            onChange={(val) => onSearch(val.target.value)}
          />
        </div>
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

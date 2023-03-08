import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import List from "../../../../components/list";
import { getCompany } from "../../../../sevices/company";
import { Company } from "../../../../types";
import CompanyPageWrapper from "./styled";

const CompanyList = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  const columns: ColumnsType<Company> = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Company name",
      dataIndex: "companyName",
      key: "companyName",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text) => <div>{text}</div>,
    },
    // {
    //   title: "Employees",
    //   dataIndex: "role",
    //   key: "role",
    // },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Updated at",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
  ];

  const callGetCompany = async () => {
    try {
      const response = await getCompany();
      setCompanies(response.data.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callGetCompany();
  }, []);

  return (
    <CompanyPageWrapper>
      <List {...{ data: companies, columns: columns }} />
    </CompanyPageWrapper>
  );
};

export default CompanyList;

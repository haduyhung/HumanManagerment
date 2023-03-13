import { ColumnsType } from "antd/es/table";
import { AxiosResponse } from "axios";
import React, { useContext } from "react";
import List from "../../../../components/list";
import { Context } from "../../../../layouts/HomeLayout";
import { Company, RequestCompany } from "../../../../types";
import CompanyPageWrapper from "./styled";

const CompanyList = (props: {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  showForm: boolean;
  onDelete: (id: string) => Promise<AxiosResponse<any, any> | undefined>;
  companies: Company[];
  setCompany: React.Dispatch<React.SetStateAction<RequestCompany>>;
  company: RequestCompany;
}) => {
  const { setShowForm, companies, setCompany, onDelete } = props;

  const { handleFocusRef, ref } = useContext(Context);

  const columns: ColumnsType<Company> = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "CompanyName",
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
    {
      title: "Employees",
      dataIndex: "employees",
      key: "employees",
      render: (text) => <div>{text}</div>,
    },
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
    {
      key: "functions",
      render: (text) => (
        <>
          <button
            style={{ marginRight: "10px" }}
            onClick={() => {
              setShowForm(true);
              setCompany({
                _id: text._id,
                companyName: text.companyName,
                email: text.email,
                address: text.address,
                phoneNumber: text.phoneNumber,
              });
              handleFocusRef(ref);
            }}
          >
            Edit
          </button>
          <button onClick={() => onDelete(text._id)}>Delete</button>
        </>
      ),
    },
  ];

  return (
    <CompanyPageWrapper>
      <List {...{ data: companies, columns: columns, pagination: false }} />
    </CompanyPageWrapper>
  );
};

export default CompanyList;

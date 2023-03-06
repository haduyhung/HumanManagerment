import React from "react";
import { Company } from "../../types/company.type";
import { User } from "../../types/user.type";
import ListWrapper from "./styled";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

const List = (props: { users: Array<User> }) => {
  const { users } = props;

  const columns: ColumnsType<User> = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
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
  ];

  return (
    <ListWrapper style={{ maxWidth: "1600px" }}>
      <Table columns={columns} dataSource={users} />
    </ListWrapper>
  );
};

export default List;

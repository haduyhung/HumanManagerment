import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import List from "../../../../components/list";
import { User } from "../../../../types";
import UserListWrapper from "./styled";

const UserList = (props: {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  showForm: boolean;
  users: User[];
}) => {
  const { setShowForm, showForm, users } = props;

  const onEdit = (item: User) => {
    setShowForm(true);
  };

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
    {
      key: "functions",
      render: (text) => (
        <>
          <button style={{ marginRight: "10px" }} onClick={() => onEdit(text)}>
            Edit
          </button>
          <button onClick={() => console.log("123123", text)}>Delete</button>
        </>
      ),
    },
  ];

  return (
    <UserListWrapper>
      <List {...{ data: users, columns: columns, pagination: false }} />
      <div onClick={() => setShowForm(!showForm)} className="button-add-user">
        {!showForm ? "add new user" : "close form"}
      </div>
    </UserListWrapper>
  );
};

export default UserList;

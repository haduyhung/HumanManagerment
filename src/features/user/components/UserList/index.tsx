import { ColumnsType } from "antd/es/table";
import { AxiosResponse } from "axios";
import React from "react";
import List from "../../../../components/list";
import { RequestUser, User } from "../../../../types";
import UserListWrapper from "./styled";

const UserList = (props: {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  showForm: boolean;
  onDelete: (id: string) => Promise<AxiosResponse<any, any> | undefined>;
  users: User[];
  setUser: React.Dispatch<React.SetStateAction<RequestUser>>;
  user: RequestUser;
}) => {
  const { setShowForm, showForm, users, setUser, onDelete } = props;

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
      title: "Age",
      dataIndex: "age",
      key: "age",
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
          <button
            style={{ marginRight: "10px" }}
            onClick={() => {
              setShowForm(true);
              setUser({
                _id: text._id,
                username: text.username,
                email: text.email,
                gender: text.gender,
                age: text.age,
                phoneNumber: text.phoneNumber,
              });
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
    <UserListWrapper>
      <List {...{ data: users, columns: columns, pagination: false }} />
      <button
        onClick={() => {
          setShowForm(!showForm);
          setUser({
            _id: "",
            username: "",
            email: "",
            gender: "",
            age: 0,
            phoneNumber: 0,
          });
        }}
        className="button-add-user"
      >
        {!showForm ? "add new user" : "close form"}
      </button>
    </UserListWrapper>
  );
};

export default UserList;

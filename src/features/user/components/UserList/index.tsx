import { ColumnsType } from "antd/es/table";
import { AxiosResponse } from "axios";
import React, { forwardRef, useContext, useImperativeHandle } from "react";
import List from "../../../../components/list";
import { Context } from "../../../../layouts/HomeLayout";
import { RequestUser, User } from "../../../../types";
import UserListWrapper from "./styled";

const UserList = (
  props: {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    showForm: boolean;
    onDelete: (id: string) => Promise<AxiosResponse<any, any> | undefined>;
    users: User[];
    setUser: React.Dispatch<React.SetStateAction<RequestUser>>;
    user: RequestUser;
  },
  testRef: any
) => {
  const { setShowForm, users, setUser, onDelete } = props;

  const { handleFocusRef, ref } = useContext(Context);

  const abc: string = "hehehe";

  useImperativeHandle(testRef, () => {
    return { alertHi: () => alert(`Hi: ${abc}`) };
  });

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
      title: "Companies",
      dataIndex: "companies",
      key: "companies",
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
              setUser({
                _id: text._id,
                username: text.username,
                email: text.email,
                gender: text.gender,
                age: text.age,
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
    <UserListWrapper>
      <List {...{ data: users, columns: columns, pagination: false }} />
      <input ref={testRef} />
    </UserListWrapper>
  );
};

export default forwardRef(UserList);

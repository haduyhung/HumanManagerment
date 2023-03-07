import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import List from "../../components/list";
import { getUser } from "../../sevices/user";
import { User } from "../../types/user.type";
import UserPageWrapper from "./styled";

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  console.log("users", users);

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

  const callGetUser = async () => {
    try {
      const response = await getUser();
      setUsers(response.data.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callGetUser();
  }, []);

  return (
    <>
      <UserPageWrapper>
        <List {...{ data: users, columns: columns }} />
      </UserPageWrapper>
    </>
  );
};

export default UserPage;

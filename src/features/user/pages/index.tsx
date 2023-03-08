import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { getUser } from "../../../sevices/user";
import { User } from "../../../types";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import UserLayoutWrapper from "./styled";

const UserPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

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
      <UserLayoutWrapper>
        <UserList
          {...{ showForm: showForm, setShowForm: setShowForm, users: users }}
        />
        {showForm && <UserForm />}
      </UserLayoutWrapper>
    </>
  );
};

export default UserPage;

import React, { useEffect, useState } from "react";
import List from "../../components/list";
import { getUser } from "../../sevices/user";
import { User } from "../../types/user.type";
import UserPageWrapper from "./styled";

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  console.log("users", users);
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
        <List {...{ users: users }} />
      </UserPageWrapper>
    </>
  );
};

export default UserPage;

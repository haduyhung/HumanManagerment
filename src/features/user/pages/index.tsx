import { debounce } from "lodash";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../../layouts/HomeLayout";
import { getSearchCompany } from "../../../sevices/company";
import {
  deleteUser,
  getSearchUser,
  getUser,
  postUploadUser,
  putUpdateUser,
} from "../../../sevices/user";
import { RequestUser } from "../../../types";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import UserLayoutWrapper from "./styled";

const UserPage = () => {
  const { users, setUsers, showForm, setShowForm, searchInput } =
    useContext(Context);
  const [reload, setReload] = useState<boolean>(false);
  const testRef = useRef();
  const onFocusTestInput = (ref: any) => {
    console.log("ref", ref);
    ref.current.alertHi();
  };
  const [user, setUser] = useState<RequestUser>({
    _id: "",
    username: "",
    email: "",
    gender: "",
    age: 0,
    phoneNumber: 0,
  });

  const onSubmit = useCallback(
    async (user: RequestUser, id?: string) => {
      let response = {};
      try {
        if (id) {
          response = await putUpdateUser(user, id);
        } else response = await postUploadUser(user);
        setReload(true);
        setUser({
          _id: "",
          username: "",
          email: "",
          gender: "",
          age: 0,
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

  const debounceSearch = async (data: string) => {
    const response = await getSearchUser({ data: data });
    setUsers(response.data.data);
  };

  debounce(() => {
    debounceSearch(searchInput);
  }, 250);

  const onDelete = useCallback(async (_id: string) => {
    try {
      const response = await deleteUser(_id);
      setReload(true);
      return response;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const callGetUser = useCallback(async () => {
    try {
      const response = await getUser();
      setUsers(response.data.data);
      setReload(false);
      return response;
    } catch (error) {
      console.log(error);
    }
  }, [setUsers]);

  useEffect(() => {
    callGetUser();
  }, [callGetUser, reload]);

  return (
    <>
      <UserLayoutWrapper>
        <UserList
          {...{
            showForm: showForm,
            setShowForm: setShowForm,
            users: users,
            setUser: setUser,
            user: user,
            onDelete: onDelete,
          }}
          ref={testRef}
        />
        <button onClick={() => onFocusTestInput(testRef)}>Test ref</button>
        <UserForm
          {...{
            user: user,
            setUser: setUser,
            onSubmit: onSubmit,
            showForm: showForm,
            setShowForm: setShowForm,
          }}
        />
      </UserLayoutWrapper>
    </>
  );
};

export default UserPage;

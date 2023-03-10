import React, { createContext, useMemo, useRef, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HomeLayoutWrapper, { ContentWrapper } from "./styled";
import { Outlet } from "react-router-dom";

export const dataContext = {
  users: [],
  setUsers: (users: []) => {},
  showForm: false,
  setShowForm: (val: any) => {},
  ref: { current: null },
  handleFocusRef: (ref: any) => {},
};
export const Context = createContext(dataContext);

const HomeLayout = () => {
  const [users, setUsers] = useState<[]>([]);
  const ref = useRef(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const handleFocusRef = (ref: any) => {
    setTimeout(() => {
      ref.current.focus();
    }, 1);
  };
  const value = useMemo(
    () => ({ users, setUsers, showForm, setShowForm, ref, handleFocusRef }),
    [showForm, users]
  );

  return (
    <Context.Provider value={value}>
      <HomeLayoutWrapper>
        <Header />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
        <Footer />
      </HomeLayoutWrapper>
    </Context.Provider>
  );
};

export default HomeLayout;

import React, { createContext, useMemo, useRef, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HomeLayoutWrapper, { ContentWrapper } from "./styled";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const dataContext = {
  searchInput: "",
  setSearchInput: (data: string) => {},
  users: [],
  setUsers: (users: []) => {},
  companies: [],
  setCompanies: (companies: []) => {},
  showForm: false,
  setShowForm: (val: any) => {},
  ref: { current: null },
  handleFocusRef: (ref: any) => {},
};
export const Context = createContext(dataContext);

const HomeLayout = () => {
  const location = useLocation();

  const [searchInput, setSearchInput] = useState<string>("");
  const [users, setUsers] = useState<[]>([]);
  const [companies, setCompanies] = useState<[]>([]);
  const ref = useRef(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const handleFocusRef = (ref: any) => {
    setTimeout(() => {
      ref.current.focus();
    }, 1);
  };
  const value = useMemo(
    () => ({
      searchInput,
      setSearchInput,
      users,
      setUsers,
      companies,
      setCompanies,
      showForm,
      setShowForm,
      ref,
      handleFocusRef,
    }),
    [companies, searchInput, showForm, users]
  );

  return (
    <Context.Provider value={value}>
      <HomeLayoutWrapper>
        <Header />
        <ContentWrapper>
          {location.pathname === "/" && <Navigate to={"/users"} replace />}
          <Outlet />
        </ContentWrapper>
        <Footer />
      </HomeLayoutWrapper>
    </Context.Provider>
  );
};

export default HomeLayout;

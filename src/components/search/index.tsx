import SearchBoxWrapper from "./styled";
import React, { useContext } from "react";
import { debounce } from "lodash";
import { getSearchCompany } from "../../sevices/company";
import { Context } from "../../layouts/HomeLayout";
import { useLocation } from "react-router-dom";
import { getSearchUser } from "../../sevices/user";

const SearchBox = () => {
  const { setCompanies, setUsers } = useContext(Context);
  const location = useLocation();

  const debounceSearch = async (data: string) => {
    let response: any;
    if (location.pathname === "/companies") {
      response = await getSearchCompany({ data: data });
      setCompanies(response.data.data);
    } else if (location.pathname === "/users") {
      response = await getSearchUser({ data: data });
      setUsers(response.data.data);
    }
  };

  const onSearch = debounce((data: string) => {
    debounceSearch(data);
  }, 250);

  return (
    <SearchBoxWrapper>
      <div className="search-label">Search:</div>
      <input
        className="search-input"
        onChange={(val) => onSearch(val.target.value)}
      />
    </SearchBoxWrapper>
  );
};

export default SearchBox;

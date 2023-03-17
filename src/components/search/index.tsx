import SearchBoxWrapper from "./styled";
import React, { useContext, useState } from "react";
import { debounce } from "lodash";
import { getSearchCompany } from "../../sevices/company";
import { Context } from "../../layouts/HomeLayout";
import { useLocation } from "react-router-dom";
import { getSearchUser } from "../../sevices/user";
import * as icon from "../../assets/icons";

const SearchBox = () => {
  const { setCompanies, setUsers } = useContext(Context);
  const [openSearch, setOpenSearch] = useState(false);
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
      <div className="search-label" onClick={() => setOpenSearch(!openSearch)}>
        {openSearch ? (
          <div className="search-label-open">search:</div>
        ) : (
          <img src={icon.SearchIcon} alt="React Logo" width={18} height={18} />
        )}
      </div>
      <input
        className={`search-input${openSearch ? "-open" : ""}`}
        onChange={(val) => onSearch(val.target.value)}
      />
    </SearchBoxWrapper>
  );
};

export default SearchBox;

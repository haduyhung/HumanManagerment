import SearchBoxWrapper from "./styled";
import React, { useContext } from "react";
import { debounce } from "lodash";
import { getSearch } from "../../sevices/company";
import { Context } from "../../layouts/HomeLayout";

const SearchBox = () => {
  const { setCompanies } = useContext(Context);

  const debounceSearch = async (data: string) => {
    const responce = await getSearch({ companyName: data });
    setCompanies(responce.data.data);
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

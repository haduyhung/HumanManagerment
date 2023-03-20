import SearchBoxWrapper from "./styled";
import React, { useContext, useState } from "react";
import { debounce } from "lodash";
import { Context } from "../../layouts/HomeLayout";
import * as icon from "../../assets/icons";

const SearchBox = () => {
  const { setSearchInput } = useContext(Context);
  const [openSearch, setOpenSearch] = useState(false);

  const onSearch = debounce((data: string) => {
    setSearchInput(data);
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

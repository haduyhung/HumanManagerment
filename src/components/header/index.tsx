import React, { useContext } from "react";
import HeaderWrapper from "./styled";
import { useNavigate } from "react-router";
import { Context } from "../../layouts/HomeLayout";
import SearchBox from "../search";
import * as icon from "../../assets/icons";

interface itemLinkMenu {
  title: string;
  onActionLink?: () => any;
  function?: Function;
}

const Header = () => {
  const { showForm, setShowForm, handleFocusRef, ref } = useContext(Context);

  const a = localStorage.getItem("userInfo");
  const userInfo = a && JSON.parse(a);

  const navigate = useNavigate();
  const listLinkMenu: itemLinkMenu[] = [
    {
      title: "Người rừng",
      onActionLink: () => navigate("/users"),
    },
    {
      title: "Công ty",
      onActionLink: () => navigate("/companies"),
    },
  ];

  return (
    <HeaderWrapper>
      <div className="logo" onClick={() => navigate("/")}>
        Quản lý người rừng
      </div>
      <div className="menu-list">
        {listLinkMenu.map((item: itemLinkMenu, index: number) => {
          return (
            <div
              className="menu-list-item"
              key={index}
              onClick={item.onActionLink}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      {userInfo && (
        <>
          <div className="menu-functions">
            <SearchBox />
            <div
              className="menu-functions-button"
              style={{
                visibility: showForm ? "hidden" : "visible",
              }}
              onClick={() => {
                setShowForm(true);
                handleFocusRef(ref);
              }}
            >
              <img
                src={icon.PlusIcon}
                alt="React Logo"
                width={18}
                height={18}
              />
            </div>
            <div
              className="menu-functions-button"
              onClick={() => navigate("profile")}
            >
              <img
                className="image-profile"
                alt={userInfo.username}
                src={userInfo.avatar}
                width={30}
                height={30}
              />
            </div>
          </div>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;

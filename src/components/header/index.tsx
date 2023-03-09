import React from "react";
import HeaderWrapper from "./styled";
import { useNavigate } from "react-router";
interface itemLinkMenu {
  title: string;
  onActionLink?: () => any;
  function?: Function;
}

const Header = () => {
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
      <div className="menu-functions">{}</div>
    </HeaderWrapper>
  );
};

export default Header;

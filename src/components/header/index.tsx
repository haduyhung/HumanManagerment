import React, { useContext } from "react";
import HeaderWrapper from "./styled";
import { useNavigate } from "react-router";
import { Context } from "../../layouts/HomeLayout";

interface itemLinkMenu {
  title: string;
  onActionLink?: () => any;
  function?: Function;
}

const Header = () => {
  const { showForm, setShowForm, handleFocusRef, ref } = useContext(Context);

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
      <div className="menu-functions">
        <div
          style={{
            visibility: showForm ? "hidden" : "visible",
            backgroundColor: "white",
            color: "brown",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "50px",
            fontSize: "20px",
            cursor: "pointer",
            marginLeft: "100px",
          }}
          onClick={() => {
            setShowForm(true);
            handleFocusRef(ref);
            console.log("ref", ref);
          }}
        >
          +
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

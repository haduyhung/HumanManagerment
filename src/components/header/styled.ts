import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  .logo {
    font-size: 30px;
    margin-right: 100px;
    color: brown;
  }
  .menu-list {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    .menu-list-item {
      cursor: pointer;
      font-size: 22px;
      font-weight: 700;
      margin: 10px 20px;
      border-bottom: 2px solid none;
      :hover {
        border-bottom: 2px solid red;
      }
    }
  }
  .menu-functions {
    margin-left: 60px;
    display: flex;
    .menu-functions-button {
      background-color: white;
      color: brown;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px gray solid;
      border-radius: 50px;
      cursor: pointer;
      margin-left: 5px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .image-profile {
      object-fit: cover;
      width: 30px;
      height: 30px;
      border-radius: 20px;
    }
  }
`;

export default HeaderWrapper;

import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: brown;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  .logo {
    font-size: 30px;
    margin-right: 100px;
    color: whitesmoke;
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
    display: flex;
    .button-create {
      background-color: white;
      color: brown;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      border-radius: 50px;
      font-size: 20px;
      cursor: pointer;
      margin-left: 5px;
    }
  }
`;

export default HeaderWrapper;

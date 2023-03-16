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
      border: 1px black solid;
      border-radius: 50px;
      cursor: pointer;
      margin-left: 5px;
    }
    .function-search {
      .search-logo {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        border-radius: 20px;
        background-color: white;
        cursor: pointer;
      }
      .search-box-wrapper {
        display: none;
      }
      :hover {
        .search-logo {
          display: none;
        }
        .search-box-wrapper {
          display: inline;
        }
      }
    }
  }
  .menu-user-profile {
    cursor: pointer;
    margin-left: 30px;
    font-size: 20px;
    font-weight: 700;
    .link-username {
      color: pink;
      font-style: italic;
    }
  }
`;

export default HeaderWrapper;

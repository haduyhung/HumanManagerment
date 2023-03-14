import styled from "styled-components";

const UserPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  .search-wrapper {
    display: flex;
    border: 1px solid black;
    border-radius: 20px;
    padding: 5px 10px;
    margin-bottom: 10px;
    .search-label {
      font-size: 20px;
      margin-right: 5px;
      font-weight: 700;
    }
    .search-input {
      border: none;
      outline: none;
      font-size: 20px;
    }
  }
`;

export default UserPageWrapper;

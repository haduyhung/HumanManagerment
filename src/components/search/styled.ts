import styled from "styled-components";

const SeachBoxWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px 10px;
  background-color: white;
  .search-label {
    font-size: 15px;
    margin-right: 5px;
    font-weight: 700;
  }
  .search-input {
    border: none;
    outline: none;
    font-size: 15px;
  }
`;

export default SeachBoxWrapper;

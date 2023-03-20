import styled from "styled-components";

const SeachBoxWrapper = styled.div`
  display: inline-flex;
  border: 1px solid gray;
  border-radius: 20px;
  min-width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  .search-label {
    cursor: pointer;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    :hover {
      background-color: gray;
      transition: 2;
    }
    .search-label-open {
      padding-left: 5px;
    }
  }
  .search-input {
    display: none;
  }
  .search-input-open {
    display: block;
    border: none;
    outline: none;
    margin-right: 5px;
  }
`;

export default SeachBoxWrapper;

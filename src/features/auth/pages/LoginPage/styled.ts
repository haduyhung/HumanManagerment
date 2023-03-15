import styled from "styled-components";

const LoginWrapper = styled.div`
  margin: auto;
  height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
  .fields-container {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    padding: 20px;
    .field-item {
      display: flex;
      margin-bottom: 10px;
      align-items: center;
      .field-label {
        width: 300px;
        display: flex;
      }
      .input-field {
      }
    }
    .field-line {
      border: 0.5px solid black;
      margin-top: 15px;
      margin-bottom: 10px;
    }
  }
`;

export default LoginWrapper;

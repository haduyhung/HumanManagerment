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
    .login-label {
      font-size: 28px;
      margin-bottom: 15px;
      color: brown;
      font-weight: 600;
    }
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
      .ant-input:focus {
        border-color: brown;
      }
      .ant-input:hover {
        border-color: brown;
      }
      .ant-input-password {
      }
      .ant-input-password:focus {
        border-color: brown;
      }
      .ant-input-password:hover {
        border-color: brown;
      }
    }
    .field-line {
      border: 0.25px solid brown;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    .ant-btn:hover {
      color: brown;
      border: 1px solid brown;
    }
  }
`;

export default LoginWrapper;

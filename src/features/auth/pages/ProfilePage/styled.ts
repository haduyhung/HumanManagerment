import styled from "styled-components";

const LoginWrapper = styled.div`
  margin: auto;
  height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
  .profile-container {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    padding: 20px;
    .profile-title {
      color: brown;
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .profile-content {
      .profile-col {
        display: flex;
        font-size: 20px;
        margin-bottom: 10px;
        .profile-label {
          display: flex;
          min-width: 150px;
          color: brown;
        }
        .profile-info {
          font-weight: 600;
        }
      }
    }
    .profile-line {
      border: 0.5px solid black;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    .profile-functions {
      .ant-btn {
        width: 100%;
        margin: 5px 0px;
        :hover {
          color: brown;
          border: brown;
          border: 1px brown solid;
        }
      }
    }
  }
`;

export default LoginWrapper;

import { Button, Input } from "antd";
import React from "react";
import LoginWrapper from "./styled";

const LoginPage = () => {
  return (
    <LoginWrapper>
      <div className="fields-container">
        <div className="field-item">
          <div className="field-label">Email/Phone Number:</div>
          <Input className="input-field" placeholder="Enter your email" />
        </div>
        <div className="field-item">
          <div className="field-label">Password:</div>
          <Input className="input-field" placeholder="Enter your password" />
        </div>
        <div className="field-line"></div>
        <Button>Login</Button>
      </div>
    </LoginWrapper>
  );
};

export default LoginPage;

import { Button, Input } from "antd";
import React, { useState } from "react";
import LoginWrapper from "./styled";

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState<any>({});
  const onLogin = () => {
    console.log("userInfo", userInfo);
  };

  return (
    <LoginWrapper>
      <div className="fields-container">
        <div className="field-item">
          <div className="field-label">Email/Phone Number:</div>
          <Input
            className="input-field"
            placeholder="Enter your email"
            value={userInfo.emailOrPhone}
            onChange={(value) =>
              setUserInfo({ ...userInfo, emailOrPhone: value.target.value })
            }
          />
        </div>
        <div className="field-item">
          <div className="field-label">Password:</div>
          <Input
            className="input-field"
            placeholder="Enter your password"
            value={userInfo.password}
            onChange={(value) =>
              setUserInfo({ ...userInfo, password: value.target.value })
            }
          />
        </div>
        <div className="field-line"></div>
        <Button onClick={onLogin}>Login</Button>
      </div>
    </LoginWrapper>
  );
};

export default LoginPage;

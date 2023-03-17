import { Button, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../sevices/auth";
import LoginWrapper from "./styled";

const LoginPage = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<any>({});
  const onLogin = async () => {
    let response: any;
    try {
      response = await login(userInfo);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("userInfo", JSON.stringify(response.data.userInfo));
      navigate("/users");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <LoginWrapper>
      <div className="fields-container">
        <div className="login-label">Đăng Nhập</div>
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
          <Input.Password
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

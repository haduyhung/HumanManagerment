import { Button as ButtonAntd } from "antd";
import ButtonWrapper from "./styled";
import React from "react";

const Button = (props: {
  label: String;
  loading?:
    | boolean
    | {
        delay?: number;
      };
}) => {
  const { label, loading } = props;
  return (
    <ButtonWrapper>
      <ButtonAntd loading={loading}>{label}</ButtonAntd>
    </ButtonWrapper>
  );
};

export default Button;

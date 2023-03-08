import { Input, InputNumber, Select } from "antd";
import React from "react";
import UserFormWrapper from "./styled";

const UserForm = () => {
  return (
    <UserFormWrapper>
      <div className="field-item">
        <div className="field-label">Username:</div>
        <Input className="input-field" placeholder="Ng Van A" />
      </div>
      <div className="field-item">
        <div className="field-label">Email:</div>
        <Input className="input-field" placeholder="ngavana@gmail.com" />
      </div>
      <div className="field-item">
        <div className="field-label">Gender:</div>
        <Select
          className="input-field"
          defaultValue="Male"
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Gay", label: "Gay" },
          ]}
        />
      </div>
      <div className="field-item">
        <div className="field-label">Age:</div>
        <InputNumber className="input-field" min={0} defaultValue={3} />
      </div>
      <div className="field-item">
        <div className="field-label">Phone Number:</div>
        <InputNumber className="input-field" placeholder="0123456789" />
      </div>
    </UserFormWrapper>
  );
};

export default UserForm;

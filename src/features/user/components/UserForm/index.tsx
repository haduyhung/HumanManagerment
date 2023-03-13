import { Input, InputNumber, Modal, Select, Spin } from "antd";
import React, { useContext } from "react";
import { Context } from "../../../../layouts/HomeLayout";
import { RequestUser } from "../../../../types";
import UserFormWrapper from "./styled";

const UserForm = (props: {
  user: RequestUser;
  setUser: React.Dispatch<React.SetStateAction<RequestUser>>;
  onSubmit: (user: RequestUser, id?: string) => Promise<{} | undefined>;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user, setUser, onSubmit, showForm, setShowForm } = props;

  const { ref } = useContext(Context);

  return (
    <Modal
      title={user._id ? "Update an user" : "Create a new user"}
      open={showForm}
      onOk={() => {
        onSubmit(user, user._id);
      }}
      okText={user._id ? "save" : "add"}
      onCancel={() => {
        setShowForm(false);
        setUser({
          _id: "",
          username: "",
          email: "",
          gender: "",
          age: 0,
          phoneNumber: 0,
        });
      }}
    >
      <UserFormWrapper>
        <div className="field-item">
          <div className="field-label">Username:</div>
          <Input
            className="input-field"
            ref={ref}
            placeholder="Ng Van A"
            value={user?.username}
            onChange={(value) =>
              setUser({ ...user, username: value.target.value })
            }
          />
        </div>
        <div className="field-item">
          <div className="field-label">Email:</div>
          <Input
            className="input-field"
            placeholder="ngavana@gmail.com"
            value={user?.email}
            onChange={(value) =>
              setUser({ ...user, email: value.target.value })
            }
          />
        </div>
        <div className="field-item">
          <div className="field-label">Gender:</div>
          <Select
            className="input-field"
            value={user.gender}
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
              { value: "Gay", label: "Gay" },
            ]}
            onChange={(value) => {
              setUser({ ...user, gender: value });
            }}
          />
        </div>
        <div className="field-item">
          <div className="field-label">Age:</div>
          <InputNumber
            className="input-field"
            min={0}
            value={user.age}
            onChange={(value) => {
              setUser({ ...user, age: Number(value) });
            }}
          />
        </div>
        <div className="field-item">
          <div className="field-label">Phone Number:</div>
          <InputNumber
            className="input-field"
            placeholder="0123456789"
            value={user.phoneNumber}
            onChange={(value) =>
              setUser({ ...user, phoneNumber: Number(value) })
            }
          />
        </div>
        {/* <div className="field-item">
          <div className="field-label">Companies:</div>
          <Select
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            options={options}
          />
        </div> */}
      </UserFormWrapper>
    </Modal>
  );
};

export default UserForm;

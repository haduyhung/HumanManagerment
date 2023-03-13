import { Input, InputNumber, Modal } from "antd";
import React, { useContext } from "react";
import { Context } from "../../../../layouts/HomeLayout";
import { RequestCompany } from "../../../../types";
import CompanyFormWrapper from "./styled";

const CompanyForm = (props: {
  company: RequestCompany;
  setCompany: React.Dispatch<React.SetStateAction<RequestCompany>>;
  onSubmit: (company: RequestCompany, id?: string) => Promise<{} | undefined>;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { company, setCompany, onSubmit, showForm, setShowForm } = props;

  const { ref } = useContext(Context);

  return (
    <Modal
      title={company._id ? "Update an company" : "Create a new company"}
      open={showForm}
      onOk={() => {
        onSubmit(company, company._id);
      }}
      okText={company._id ? "save" : "add"}
      onCancel={() => {
        setShowForm(false);
        setCompany({
          _id: "",
          companyName: "",
          email: "",
          address: "",
          phoneNumber: 0,
        });
      }}
    >
      <CompanyFormWrapper>
        <div className="field-item">
          <div className="field-label">Company name:</div>
          <Input
            className="input-field"
            ref={ref}
            placeholder="Company A"
            value={company?.companyName}
            onChange={(value) =>
              setCompany({ ...company, companyName: value.target.value })
            }
          />
        </div>
        <div className="field-item">
          <div className="field-label">Email:</div>
          <Input
            className="input-field"
            placeholder="companya@gmail.com"
            value={company?.email}
            onChange={(value) =>
              setCompany({ ...company, email: value.target.value })
            }
          />
        </div>
        <div className="field-item">
          <div className="field-label">Address:</div>
          <Input
            className="input-field"
            placeholder="Wall Str"
            value={company?.address}
            onChange={(value) =>
              setCompany({ ...company, address: value.target.value })
            }
          />
        </div>
        <div className="field-item">
          <div className="field-label">Phone Number:</div>
          <InputNumber
            className="input-field"
            placeholder="0123456789"
            value={company.phoneNumber}
            onChange={(value) =>
              setCompany({ ...company, phoneNumber: Number(value) })
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
      </CompanyFormWrapper>
    </Modal>
  );
};

export default CompanyForm;

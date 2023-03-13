import { User } from "./index";

export type Company = {
  readonly _id: string;
  companyName: string;
  email: string;
  address: string;
  phoneNumber: number;
  employees: Array<User>;
  createdAt: Date;
  updatedAt: Date;
};

export type RequestCompany = {
  _id?: string;
  companyName: string;
  email: string;
  address: string;
  phoneNumber: number;
};

import { Company } from "./index";

export type User = {
  readonly _id: string;
  username: string;
  email: string;
  gender: string;
  age: number;
  phoneNumber: string;
  role: string;
  companies: Array<Company>;
  createdAt: Date;
  updatedAt: Date;
};

export type RequestUser = {
  _id?: string;
  username: string;
  email: string;
  gender: string;
  age: number;
  phoneNumber: number;
};

import { User } from "./index";

export type Company = {
  readonly _id: string;
  name: string;
  email: string;
  address: string;
  companies: Array<User>;
  createdAt: Date;
  updatedAt: Date;
};

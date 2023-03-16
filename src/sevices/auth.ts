import { AxiosRequestConfig } from "axios";
import { instance } from "../libraries/axios";

export const login = (data: any) => {
  const request: AxiosRequestConfig = {
    method: "POST",
    url: "api/user/login",
    data,
  };
  return instance(request);
};

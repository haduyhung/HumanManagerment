import { AxiosRequestConfig } from "axios";
import { instance } from "../libraries/axios";

export const login = (data: any) => {
  const request: AxiosRequestConfig = {
    method: "POST",
    url: "api/test-company/get-all",
    data,
  };
  return instance(request);
};

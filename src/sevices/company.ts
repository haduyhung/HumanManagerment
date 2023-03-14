import { AxiosRequestConfig } from "axios";
import { instance } from "../libraries/axios";
import { RequestCompany } from "../types";

export const getCompany = () => {
  const request: AxiosRequestConfig = {
    method: "GET",
    url: "api/test-company/get-all",
  };
  return instance(request);
};

export const postUploadCompany = (data: RequestCompany) => {
  const request: AxiosRequestConfig = {
    method: "POST",
    url: `api/test-company/create`,
    data,
  };
  return instance(request);
};

export const putUpdateCompany = (data: RequestCompany, id: string) => {
  const request: AxiosRequestConfig = {
    method: "PUT",
    url: `api/test-company/update/${id}`,
    data,
  };
  return instance(request);
};

export const deleteCompany = (id: string) => {
  const request: AxiosRequestConfig = {
    method: "DELETE",
    url: `api/test-company/delete-one/${id}`,
  };
  return instance(request);
};

export const getCompanyById = (id: string) => {
  const request: AxiosRequestConfig = {
    method: "GET",
    url: `api/test-company/find-one/${id}`,
  };
  return instance(request);
};

export const getSearch = (data: any) => {
  const request: AxiosRequestConfig = {
    method: "GET",
    url: `api/test-company/search`,
    params: data,
  };
  return instance(request);
};

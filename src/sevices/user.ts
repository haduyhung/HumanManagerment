import { AxiosRequestConfig } from "axios";
import { instance } from "../libraries/axios";
import { RequestUser } from "../types/user.type";

export const getUser = () => {
  const request: AxiosRequestConfig = {
    method: "GET",
    url: "api/test-user/get-all",
  };
  return instance(request);
};

export const postUploadUser = (data: RequestUser) => {
  const request: AxiosRequestConfig = {
    method: "POST",
    url: `api/test-user/create`,
    data,
  };
  return instance(request);
};

export const putUpdateUser = (data: RequestUser, id: string) => {
  const request: AxiosRequestConfig = {
    method: "PUT",
    url: `api/test-user/update/${id}`,
    data,
  };
  return instance(request);
};

export const deleteUser = (id: string) => {
  const request: AxiosRequestConfig = {
    method: "DELETE",
    url: `api/test-user/delete-one/${id}`,
  };
  return instance(request);
};

export const getUserById = (id: string) => {
  const request: AxiosRequestConfig = {
    method: "GET",
    url: `api/test-user/find-one/${id}`,
  };
  return instance(request);
};

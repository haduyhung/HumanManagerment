import axios from "axios";
import { getLoggedUserInfo } from "..//utils/token.util";

//const baseURL = process.env.REACT_APP_API_URL as string;

export const instance = axios.create({
  baseURL: "http://localhost:3001",
  //baseURL: "https://thenewbookingmovieticketback-production.up.railway.app/",
});

instance.interceptors.request.use(
  (config: any) => {
    const localData = getLoggedUserInfo();
    if (localData) {
      config.headers = {
        Authorization: `Bearer ${JSON.parse(localData as string).accessToken}`,
      };
    } else {
      config.headers = {
        Authorization: `Bearer`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

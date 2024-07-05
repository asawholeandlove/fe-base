import { TCurrentUser } from "~/types/auths.type";
import axiosClient from "./axiosClient";

const BASE_URL = "/auth";
const LOGIN_URL = BASE_URL + "/login";
const INFO_URL = BASE_URL + "/info";

const authApis = {
  login(data: any) {
    return axiosClient.post<{ accessToken: string }>(LOGIN_URL, data);
  },

  getInfo() {
    return axiosClient.get<TCurrentUser>(INFO_URL);
  },
};

export default authApis;

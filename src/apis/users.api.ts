import axiosClient from "./axiosClient";

const BASE_URL = "/users";
const userApis = {
  create(data: any) {
    return axiosClient.post(BASE_URL, data);
  },
};

export default userApis;

import axiosClient from "./axiosClient";

const BASE_URL = "/submissions";

const submissionApis = {
  submit(body?: any) {
    return axiosClient.post(BASE_URL, body);
  },
};

export default submissionApis;

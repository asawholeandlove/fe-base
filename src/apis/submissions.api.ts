import axiosClient from "./axiosClient";

const BASE_URL = "/submissions";
const BY_FORM_URL = BASE_URL + "/byForm";

const submissionApis = {
  submit(body?: any) {
    return axiosClient.post(BASE_URL, body);
  },

  findByForm(formId: string) {
    return axiosClient.get(BY_FORM_URL + `/${formId}`);
  },
};

export default submissionApis;

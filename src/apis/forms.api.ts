import { TPagination } from "~/types/commons.type";
import { TForm } from "~/types/forms.type";
import axiosClient from "./axiosClient";

const BASE_URL = "/forms";

const formApis = {
  list(params?: any) {
    return axiosClient.get<TPagination<TForm>>(BASE_URL, {
      params,
    });
  },
};

export default formApis;

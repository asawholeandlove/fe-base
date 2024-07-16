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

  getDetail(id: string) {
    return axiosClient.get<TForm>(`${BASE_URL}/${id}`);
  },

  edit(id: string, data: any) {
    return axiosClient.patch(`${BASE_URL}/${id}`, data);
  },

  add(data: any) {
    return axiosClient.post(BASE_URL, data);
  },

  delete(id: string) {
    return axiosClient.delete(`${BASE_URL}/${id}`);
  },
};

export default formApis;

/// <reference types="vite/client" />

import axios from "axios";

declare module "axios" {
  export interface AxiosInstance {
    // config to response directly response.data
    get<T = any>(url: string, config?: any): Promise<T>;
    delete<T = any>(url: string, config?: any): Promise<T>;
    post<T = any>(url: string, data?: any, config?: any): Promise<T>;
    put<T = any>(url: string, data?: any, config?: any): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: any): Promise<T>;
  }
}

import { AxiosRequestConfig } from "axios";
import { ProductResource, ProductResponse } from "./product.interface";
import { apiMilla, EMPRESA_ID } from "@/lib/config";

export async function getNews(page: number): Promise<ProductResponse> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
      page,
    },
  };
  const { data } = await apiMilla.get<ProductResponse>(`/web-products`, config);
  return data;
}

export async function getNewsById(id: number): Promise<ProductResource> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
    },
  };
  const { data } = await apiMilla.get<any>(`/web-products/${id}`, config);
  return data.data;
}

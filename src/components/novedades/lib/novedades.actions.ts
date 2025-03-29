import { AxiosRequestConfig } from "axios";
import { NewsResource, NewsResponse } from "./novedades.interface";
import { apiMilla, EMPRESA_ID } from "@/lib/config";

export async function getNews(): Promise<NewsResource[]> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
    },
  };
  const { data } = await apiMilla.get<NewsResponse>(`/news`, config);
  return data.data;
}

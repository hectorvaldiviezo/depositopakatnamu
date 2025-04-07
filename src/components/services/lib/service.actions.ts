import { AxiosRequestConfig } from "axios";
import { apiMilla, EMPRESA_ID } from "@/lib/config";
import { ServiceResource } from "./service.interface";

export async function getServices(): Promise<ServiceResource[]> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
    },
  };
  const { data } = await apiMilla.get<ServiceResource[]>(`/service`, config);
  return data;
}

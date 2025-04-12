import { AxiosRequestConfig } from "axios";
import { CategoryResource } from "./category.interface";
import { apiMilla, EMPRESA_ID } from "@/lib/config";

export async function getCategories(page: number): Promise<CategoryResource[]> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
      page,
    },
  };
  const { data } = await apiMilla.get<CategoryResource[]>(
    `/category-products`,
    config
  );
  return data;
}

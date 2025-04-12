import { AxiosRequestConfig } from "axios";
import { ProductResource, ProductResponse } from "./product.interface";
import { apiMilla, EMPRESA_ID } from "@/lib/config";

export async function getProducts(
  page: number,
  search?: string,
  category?: string
): Promise<ProductResponse> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
      search: search === "" ? undefined : search,
      category: category === "Todas" ? undefined : category,
      page,
    },
  };
  const { data } = await apiMilla.get<ProductResponse>(`/web-products`, config);
  return data;
}

export async function getProductsById(id: number): Promise<ProductResource> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
    },
  };
  const { data } = await apiMilla.get<any>(`/web-products/${id}`, config);
  return data.data;
}

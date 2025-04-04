import { AxiosRequestConfig } from "axios";
import { apiMilla, EMPRESA_ID } from "@/lib/config";
import { CarouselResource } from "./carousel.interface";

export async function getCarousel(): Promise<CarouselResource[]> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
    },
  };
  const { data } = await apiMilla.get<CarouselResource[]>(`/slider`, config);
  return data;
}

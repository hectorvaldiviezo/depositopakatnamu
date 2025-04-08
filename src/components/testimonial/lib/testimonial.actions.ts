import { AxiosRequestConfig } from "axios";
import { apiMilla, EMPRESA_ID } from "@/lib/config";
import { TestimonialResource } from "./testimonial.interface";

export async function getTestimonials(): Promise<TestimonialResource[]> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
    },
  };
  const { data } = await apiMilla.get<TestimonialResource[]>(
    `/testimonial`,
    config
  );
  return data;
}

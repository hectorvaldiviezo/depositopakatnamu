import { create } from "zustand";
import {
  Links,
  Meta,
  ProductResource,
  ProductResponse,
} from "./product.interface";
import { getNews } from "./product.actions";

interface ProductsState {
  news: ProductResource[];
  meta: Meta;
  links: Links;
  loadNews: (page: number) => void;
  setData: (data: ProductResponse) => void;
}

const useProductsStore = create<ProductsState>((set) => ({
  news: [],
  meta: {
    current_page: 0,
    from: 0,
    last_page: 0,
    links: [],
    path: "",
    per_page: 0,
    to: 0,
    total: 0,
  },
  links: {
    first: "",
    last: "",
    prev: null,
    next: "",
  },
  loadNews: async (page: number) => {
    const data = await getNews(page);
    set((state) => ({
      news: data.data,
      meta: data.meta,
      links: data.links,
    }));
  },
  setData: (data: ProductResponse) =>
    set(() => ({
      news: data.data,
      meta: data.meta,
      links: data.links,
    })),
}));

export default useProductsStore;

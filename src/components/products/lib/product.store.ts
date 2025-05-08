import { create } from "zustand";
import {
  Links,
  Meta,
  ProductResource,
  ProductResponse,
} from "./product.interface";
import { getProducts } from "./product.actions";

interface ProductsState {
  products: ProductResource[];
  meta: Meta;
  links: Links;
  loadProducts: (page: number, search?: string, category?: string) => void;
  setData: (data: ProductResponse) => void;
}

const useProductsStore = create<ProductsState>((set) => ({
  products: [],
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
  loadProducts: async (page: number, search?: string, category?: string) => {
    const data = await getProducts(page, search, category);
    set(() => ({
      products: data.data,
      meta: data.meta,
      links: data.links,
    }));
  },
  setData: (data: ProductResponse) =>
    set(() => ({
      products: data.data,
      meta: data.meta,
      links: data.links,
    })),
}));

export default useProductsStore;

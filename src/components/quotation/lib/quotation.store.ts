import { ProductResource } from "@/components/products/lib/product.interface";
import { create } from "zustand";

interface ProductsState {
  products: ProductResource[];
  addProduct: (product: ProductResource) => void;
  updateProduct: (product: ProductResource) => void;
  removeProduct: (productId: number) => void;
  clearProducts: () => void;
}

const useProductCartStore = create<ProductsState>((set) => ({
  products: [],
  addProduct: (product: ProductResource) =>
    set((state) => {
      if (state.products.some((p) => p.id === product.id)) {
        return state; // Do nothing if the product already exists
      }
      return {
        products: [...state.products, product],
      };
    }),
  updateProduct: (product: ProductResource) =>
    set((state) => {
      const updatedProducts = state.products.map((p) =>
        p.id === product.id ? product : p
      );
      return { products: updatedProducts };
    }),
  removeProduct: (productId: number) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
  clearProducts: () =>
    set(() => ({
      products: [],
    })),
}));

export default useProductCartStore;

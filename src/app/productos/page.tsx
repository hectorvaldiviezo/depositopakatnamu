import { getCategories } from "@/components/category/lib/category.actions";
import { getProducts } from "@/components/products/lib/product.actions";
import Productos from "@/components/products/products";

export const dynamic = "force-dynamic";
export default async function Page() {
  const products = await getProducts(1);
  const categories = await getCategories(1);

  return <Productos productsData={products} categorias={categories} />;
}

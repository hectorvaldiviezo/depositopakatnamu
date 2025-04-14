"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, ShoppingCart } from "lucide-react";
import { ProductResource, ProductResponse } from "./lib/product.interface";
import { CategoryResource } from "../category/lib/category.interface";
import useProductsStore from "./lib/product.store";
import CustomPagination from "../Pagination";
import useProductCartStore from "../quotation/lib/quotation.store";
import { successToast } from "@/lib/core.function";
import { useRouter } from "next/navigation";

export interface ProductsProps {
  productsData: ProductResponse;
  categorias: CategoryResource[];
}

export default function Productos({ productsData, categorias }: ProductsProps) {
  const {
    products: productos,
    setData,
    loadProducts,
    meta,
  } = useProductsStore();

  const { addProduct } = useProductCartStore();
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [productosFiltrados, setProductosFiltrados] = useState<
    ProductResource[]
  >(productsData.data);
  const [productoSeleccionado, setProductoSeleccionado] =
    useState<ProductResource | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const { push } = useRouter();

  useEffect(() => {
    const handler = setTimeout(() => {
      const trimmed = busqueda.trim();
      if (trimmed !== "") {
        loadProducts(1, trimmed, categoriaSeleccionada);
      } else {
        loadProducts(1, trimmed, categoriaSeleccionada);
      }
    }, 300);

    return () => clearTimeout(handler); // Limpia el timeout anterior antes de crear uno nuevo
  }, [busqueda, categoriaSeleccionada]);

  useEffect(() => {
    setData(productsData);
  }, [productsData, setData]);

  useEffect(() => {
    setProductosFiltrados(productos);
  }, [productos]);

  const handlePageChange = async (page: number) => {
    loadProducts(page);
  };

  // Función para abrir el sheet con los detalles del producto
  const verDetalleProducto = (producto: any) => {
    setProductoSeleccionado(producto);
    setSheetOpen(true);
  };

  const handleAddToCart = (producto: ProductResource) => {
    addProduct(producto);
    successToast(`${producto.name}`, "Producto agregado a la cotización");
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-secondary uppercase">
        Catálogo de Productos
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Buscador */}
        <div className="relative grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Buscar productos..."
            className="pl-10"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        {/* Filtro de categorías */}
        <div className="w-full md:w-64">
          <Select
            value={categoriaSeleccionada}
            onValueChange={setCategoriaSeleccionada}
          >
            <SelectTrigger className="w-full">
              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Categoría" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todas">Todas las categorías</SelectItem>
              {categorias.map((category) => (
                <div key={category.id}>
                  <SelectItem
                    value={category.id.toString()}
                    className="font-bold"
                  >
                    {category.name}
                  </SelectItem>
                  {Array.isArray(category.children) &&
                    category.children.length > 0 && (
                      <div className="pl-4 border-l-2 border-secondary">
                        {category.children.map((subCategory) => (
                          <SelectItem
                            key={subCategory.id}
                            value={subCategory.id.toString()}
                          >
                            {subCategory.name}
                          </SelectItem>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grilla de productos */}
      {productosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productosFiltrados.map((producto) => (
            <Card
              key={producto.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => verDetalleProducto(producto)}
            >
              <div className="relative aspect-square">
                <Image
                  src={producto.image || "/placeholder.svg"}
                  alt={producto.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <Badge className="mb-2 bg-secondary hover:bg-secondary/90">
                  {producto.category}
                </Badge>
                <h3 className="font-bold text-lg mb-1 line-clamp-2">
                  {producto.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {producto.subcategory ?? producto.category}
                </p>
                <div className="justify-between items-center hidden">
                  <span className="font-bold text-primary">
                    S/ {producto.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">
                    Por {producto.unit}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">
            No se encontraron productos que coincidan con tu búsqueda.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setBusqueda("");
              setCategoriaSeleccionada("Todas");
            }}
          >
            Limpiar filtros
          </Button>
        </div>
      )}

      {productosFiltrados.length > 0 && (
        <div className="mt-10">
          <CustomPagination meta={meta} onPageChange={handlePageChange} />
        </div>
      )}

      {/* Footer */}

      {/* Sheet para detalles del producto */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="overflow-y-auto">
          {productoSeleccionado && (
            <>
              <SheetHeader>
                <SheetTitle className="text-xl font-bold text-secondary">
                  {productoSeleccionado.name}
                </SheetTitle>
                <SheetDescription className="hidden" />
                <div className="flex justify-start items-center gap-4">
                  <Badge className="bg-secondary rounded-full hover:bg-secondary/90">
                    {productoSeleccionado.category}
                  </Badge>
                  {productoSeleccionado.subcategory && (
                    <span className="text-sm">
                      {productoSeleccionado.subcategory}
                    </span>
                  )}
                </div>
              </SheetHeader>

              <div className="mt-6">
                <div className="relative aspect-square w-full mb-6 rounded-md overflow-hidden">
                  <Image
                    src={productoSeleccionado.image || "/placeholder.svg"}
                    alt={productoSeleccionado.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-2xl font-bold text-primary hidden">
                      S/ {productoSeleccionado.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      Por {productoSeleccionado.unit}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      size={"sm"}
                      className="cursor-pointer"
                      onClick={() =>
                        handleAddToCart(productoSeleccionado as ProductResource)
                      }
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Agregar
                    </Button>
                    {/* ir a cotizar */}
                    <Button
                      variant="outline"
                      size={"sm"}
                      onClick={() => {
                        push("/contactenos");
                      }}
                    >
                      Ir a cotizar
                    </Button>
                  </div>
                </div>

                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: productoSeleccionado.content,
                  }}
                />
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

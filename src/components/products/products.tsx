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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, ShoppingCart, FileText, Download } from "lucide-react";


// Lista de categorías únicas
const categorias = [...new Set(productos.map((p) => p.categoria))];

export default function Productos() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [productosFiltrados, setProductosFiltrados] = useState(productos);
  const [productoSeleccionado, setProductoSeleccionado] = useState<any>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  // Filtrar productos cuando cambia la búsqueda o categoría
  useEffect(() => {
    let resultado = productos;

    // Filtrar por búsqueda
    if (busqueda) {
      resultado = resultado.filter(
        (p) =>
          p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (categoriaSeleccionada !== "Todas") {
      resultado = resultado.filter(
        (p) => p.categoria === categoriaSeleccionada
      );
    }

    setProductosFiltrados(resultado);
  }, [busqueda, categoriaSeleccionada]);

  // Función para abrir el sheet con los detalles del producto
  const verDetalleProducto = (producto: any) => {
    setProductoSeleccionado(producto);
    setSheetOpen(true);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-secondary">
        Catálogo de Productos
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Buscador */}
        <div className="relative flex-grow">
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
              {categorias.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Contador de resultados */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Mostrando {productosFiltrados.length} de {productos.length} productos
        </p>
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
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <Badge className="mb-2 bg-secondary hover:bg-secondary/90">
                  {producto.categoria}
                </Badge>
                <h3 className="font-bold text-lg mb-1 line-clamp-2">
                  {producto.nombre}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {producto.subcategoria}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">
                    S/ {producto.precio.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">
                    Por {producto.unidad}
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

      {/* Sheet para detalles del producto */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="overflow-y-auto">
          {productoSeleccionado && (
            <>
              <SheetHeader>
                <SheetTitle className="text-xl font-bold text-secondary">
                  {productoSeleccionado.nombre}
                </SheetTitle>
                <SheetDescription>
                  <Badge className="mt-1 bg-secondary hover:bg-secondary/90">
                    {productoSeleccionado.categoria}
                  </Badge>
                  <span className="ml-2 text-sm">
                    {productoSeleccionado.subcategoria}
                  </span>
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6">
                <div className="relative aspect-square w-full mb-6 rounded-md overflow-hidden">
                  <Image
                    src={productoSeleccionado.imagen || "/placeholder.svg"}
                    alt={productoSeleccionado.nombre}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-2xl font-bold text-primary">
                      S/ {productoSeleccionado.precio.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      Por {productoSeleccionado.unidad}
                    </p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Cotizar
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

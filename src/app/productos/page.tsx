"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, ShoppingCart, FileText, Download } from "lucide-react"

// Datos de ejemplo para los productos
const productos = [
  {
    id: 1,
    nombre: "Cemento Portland Tipo I",
    categoria: "Cemento",
    subcategoria: "Estructural",
    precio: 24.9,
    unidad: "Bolsa",
    stock: 500,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion:
      "Cemento Portland Tipo I de alta resistencia para uso general en construcción. Ideal para estructuras, cimientos, columnas y losas.",
    especificaciones: [
      "Resistencia a la compresión: 28 MPa a los 28 días",
      "Tiempo de fraguado inicial: 45 minutos",
      "Tiempo de fraguado final: 375 minutos",
      "Peso: 42.5 kg por bolsa",
    ],
    usos: [
      "Construcción de estructuras de concreto",
      "Fabricación de elementos prefabricados",
      "Preparación de morteros y concretos",
      "Obras civiles en general",
    ],
    fichasTecnicas: [
      { nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-cemento.pdf" },
      { nombre: "Hoja de seguridad", url: "/documentos/hoja-seguridad-cemento.pdf" },
    ],
  },
  {
    id: 2,
    nombre: 'Varilla de Acero Corrugado 1/2"',
    categoria: "Acero",
    subcategoria: "Construcción",
    precio: 32.5,
    unidad: "Unidad",
    stock: 1200,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion:
      "Varilla de acero corrugado de 1/2 pulgada de diámetro para refuerzo de estructuras de concreto. Alta resistencia y durabilidad.",
    especificaciones: [
      "Diámetro: 1/2 pulgada (12.7 mm)",
      "Longitud: 9 metros",
      "Límite de fluencia: 4200 kg/cm²",
      "Peso: 7.4 kg por unidad",
    ],
    usos: [
      "Refuerzo de estructuras de concreto",
      "Construcción de columnas y vigas",
      "Losas y cimentaciones",
      "Obras civiles en general",
    ],
    fichasTecnicas: [{ nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-acero.pdf" }],
  },
  {
    id: 3,
    nombre: "Ladrillo King Kong 18 huecos",
    categoria: "Ladrillos",
    subcategoria: "Estructural",
    precio: 0.85,
    unidad: "Unidad",
    stock: 25000,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion:
      "Ladrillo King Kong de 18 huecos, fabricado con arcilla de alta calidad. Excelente resistencia a la compresión y baja absorción de agua.",
    especificaciones: [
      "Dimensiones: 24 x 13 x 9 cm",
      "Peso: 3.8 kg por unidad",
      "Resistencia a la compresión: 130 kg/cm²",
      "Absorción de agua: 14%",
    ],
    usos: [
      "Construcción de muros portantes",
      "Tabiquería estructural",
      "Edificaciones de albañilería confinada",
      "Viviendas multifamiliares",
    ],
    fichasTecnicas: [{ nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-ladrillo.pdf" }],
  },
  {
    id: 4,
    nombre: "Arena Gruesa",
    categoria: "Agregados",
    subcategoria: "Arena",
    precio: 45.0,
    unidad: "m³",
    stock: 200,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion:
      "Arena gruesa lavada de río, libre de impurezas y material orgánico. Ideal para preparación de concreto y morteros.",
    especificaciones: [
      "Granulometría: 0.5 - 5 mm",
      "Densidad aparente: 1500 kg/m³",
      "Contenido de humedad: < 5%",
      "Módulo de finura: 2.5 - 3.0",
    ],
    usos: [
      "Preparación de concreto estructural",
      "Elaboración de morteros para asentado",
      "Rellenos y nivelación",
      "Mezclas asfálticas",
    ],
    fichasTecnicas: [],
  },
  {
    id: 5,
    nombre: 'Tubo PVC 4" para desagüe',
    categoria: "Tuberías",
    subcategoria: "Desagüe",
    precio: 18.9,
    unidad: "Unidad",
    stock: 350,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion:
      "Tubo de PVC de 4 pulgadas para sistemas de desagüe. Resistente a la corrosión y de fácil instalación.",
    especificaciones: ["Diámetro: 4 pulgadas (110 mm)", "Longitud: 3 metros", "Espesor: 3.2 mm", "Color: Naranja"],
    usos: [
      "Sistemas de desagüe domiciliario",
      "Evacuación de aguas residuales",
      "Drenaje pluvial",
      "Instalaciones sanitarias",
    ],
    fichasTecnicas: [{ nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-tubo-pvc.pdf" }],
  },
  {
    id: 6,
    nombre: "Pintura Látex Lavable",
    categoria: "Pinturas",
    subcategoria: "Látex",
    precio: 89.9,
    unidad: "Balde",
    stock: 120,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion:
      "Pintura látex lavable de alta calidad para interiores y exteriores. Excelente poder cubriente y rendimiento.",
    especificaciones: [
      "Contenido: 20 litros",
      "Rendimiento: 40-45 m² por galón",
      "Secado al tacto: 30 minutos",
      "Repintado: 4 horas",
    ],
    usos: [
      "Pintado de paredes interiores",
      "Acabados en exteriores",
      "Superficies de concreto y yeso",
      "Renovación de ambientes",
    ],
    fichasTecnicas: [
      { nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-pintura.pdf" },
      { nombre: "Carta de colores", url: "/documentos/carta-colores-pintura.pdf" },
    ],
  },
  {
    id: 7,
    nombre: 'Plancha de Drywall 1/2"',
    categoria: "Drywall",
    subcategoria: "Placas",
    precio: 35.5,
    unidad: "Unidad",
    stock: 280,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion: "Plancha de drywall regular de 1/2 pulgada de espesor. Ideal para tabiquería interior y cielos rasos.",
    especificaciones: [
      "Dimensiones: 1.22 x 2.44 m",
      "Espesor: 1/2 pulgada (12.7 mm)",
      "Peso: 22 kg por unidad",
      "Borde: Rebajado",
    ],
    usos: [
      "Construcción de tabiques interiores",
      "Cielos rasos y falsos techos",
      "Revestimiento de muros",
      "Proyectos de remodelación",
    ],
    fichasTecnicas: [{ nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-drywall.pdf" }],
  },
  {
    id: 8,
    nombre: "Cerámica para piso 45x45 cm",
    categoria: "Acabados",
    subcategoria: "Cerámicos",
    precio: 24.9,
    unidad: "m²",
    stock: 500,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion: "Cerámica para piso de alto tránsito, formato 45x45 cm. Resistente a la abrasión y fácil limpieza.",
    especificaciones: ["Dimensiones: 45 x 45 cm", "Espesor: 8 mm", "Resistencia a la abrasión: PEI 4", "Acabado: Mate"],
    usos: ["Pisos de alto tránsito", "Ambientes residenciales", "Áreas comerciales", "Espacios interiores"],
    fichasTecnicas: [{ nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-ceramica.pdf" }],
  },
  {
    id: 9,
    nombre: "Alambre de Construcción #16",
    categoria: "Acero",
    subcategoria: "Alambres",
    precio: 5.9,
    unidad: "kg",
    stock: 1500,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion: "Alambre negro recocido #16 para amarre en construcción. Alta maleabilidad y resistencia.",
    especificaciones: ["Calibre: #16", "Diámetro: 1.65 mm", "Presentación: Rollo de 100 kg", "Acabado: Negro recocido"],
    usos: [
      "Amarre de fierro de construcción",
      "Fijación de encofrados",
      "Estructuras de concreto armado",
      "Trabajos generales de construcción",
    ],
    fichasTecnicas: [],
  },
  {
    id: 10,
    nombre: "Pegamento para Cerámica",
    categoria: "Adhesivos",
    subcategoria: "Cerámicos",
    precio: 22.5,
    unidad: "Bolsa",
    stock: 300,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion:
      "Pegamento en polvo para instalación de cerámicos y porcelanatos. Alta adherencia y resistencia a la humedad.",
    especificaciones: [
      "Contenido: 25 kg",
      "Rendimiento: 4-5 m² por bolsa",
      "Tiempo abierto: 20 minutos",
      "Transitabilidad: 24-48 horas",
    ],
    usos: [
      "Instalación de cerámicos",
      "Colocación de porcelanatos",
      "Enchapes en interiores y exteriores",
      "Pisos y paredes",
    ],
    fichasTecnicas: [{ nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-pegamento.pdf" }],
  },
  {
    id: 11,
    nombre: "Calamina Galvanizada 0.22mm",
    categoria: "Techos",
    subcategoria: "Calaminas",
    precio: 18.9,
    unidad: "Unidad",
    stock: 420,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion: "Calamina galvanizada de 0.22mm de espesor. Resistente a la corrosión y de fácil instalación.",
    especificaciones: [
      "Dimensiones: 0.80 x 3.60 m",
      "Espesor: 0.22 mm",
      "Peso: 5.8 kg por unidad",
      "Acabado: Galvanizado",
    ],
    usos: ["Techado de viviendas", "Coberturas temporales", "Construcciones rurales", "Almacenes y depósitos"],
    fichasTecnicas: [{ nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-calamina.pdf" }],
  },
  {
    id: 12,
    nombre: "Tanque de Agua 1100L",
    categoria: "Sanitarios",
    subcategoria: "Almacenamiento",
    precio: 389.9,
    unidad: "Unidad",
    stock: 45,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion: "Tanque de agua de polietileno con capacidad de 1100 litros. Incluye tapa y conexiones.",
    especificaciones: [
      "Capacidad: 1100 litros",
      "Material: Polietileno de alta densidad",
      "Dimensiones: 110 x 110 x 142 cm",
      "Color: Negro",
    ],
    usos: [
      "Almacenamiento de agua potable",
      "Sistemas de reserva domiciliaria",
      "Proyectos residenciales",
      "Instalaciones comerciales",
    ],
    fichasTecnicas: [
      { nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-tanque.pdf" },
      { nombre: "Manual de instalación", url: "/documentos/manual-tanque.pdf" },
    ],
  },
  {
    id: 13,
    nombre: "Malla de Alambre Galvanizado",
    categoria: "Cercos",
    subcategoria: "Mallas",
    precio: 145.0,
    unidad: "Rollo",
    stock: 80,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion: "Malla de alambre galvanizado para cercos perimetrales. Alta resistencia y durabilidad.",
    especificaciones: ["Altura: 2 metros", "Longitud: 20 metros", "Calibre: #12", "Cocada: 2 x 2 pulgadas"],
    usos: ["Cercos perimetrales", "Delimitación de terrenos", "Protección de áreas", "Seguridad residencial"],
    fichasTecnicas: [{ nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-malla.pdf" }],
  },
  {
    id: 14,
    nombre: "Puerta Contraplacada 70cm",
    categoria: "Carpintería",
    subcategoria: "Puertas",
    precio: 129.9,
    unidad: "Unidad",
    stock: 60,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion: "Puerta contraplacada de 70cm de ancho. Incluye marco y bisagras. Lista para instalar.",
    especificaciones: ["Dimensiones: 70 x 207 cm", "Material: MDF", "Espesor: 4 cm", "Color: Natural (para pintar)"],
    usos: ["Divisiones interiores", "Habitaciones", "Baños", "Oficinas"],
    fichasTecnicas: [{ nombre: "Guía de instalación", url: "/documentos/guia-instalacion-puerta.pdf" }],
  },
  {
    id: 15,
    nombre: "Interruptor Simple",
    categoria: "Eléctricos",
    subcategoria: "Interruptores",
    precio: 8.9,
    unidad: "Unidad",
    stock: 800,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion: "Interruptor simple para instalaciones eléctricas domiciliarias. Diseño moderno y fácil instalación.",
    especificaciones: ["Tipo: Simple", "Corriente: 10A", "Voltaje: 220V", "Color: Blanco"],
    usos: [
      "Instalaciones eléctricas domiciliarias",
      "Control de iluminación",
      "Proyectos residenciales",
      "Remodelaciones",
    ],
    fichasTecnicas: [{ nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-interruptor.pdf" }],
  },
  {
    id: 16,
    nombre: 'Llave de Paso 1/2"',
    categoria: "Sanitarios",
    subcategoria: "Válvulas",
    precio: 15.5,
    unidad: "Unidad",
    stock: 250,
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion: "Llave de paso de 1/2 pulgada para control de flujo de agua. Fabricada en bronce cromado.",
    especificaciones: [
      "Diámetro: 1/2 pulgada",
      "Material: Bronce cromado",
      "Presión máxima: 125 PSI",
      "Temperatura máxima: 90°C",
    ],
    usos: [
      "Control de flujo de agua",
      "Instalaciones sanitarias",
      "Sistemas de distribución",
      "Mantenimiento de redes",
    ],
    fichasTecnicas: [{ nombre: "Ficha técnica", url: "/documentos/ficha-tecnica-llave.pdf" }],
  },
]

// Lista de categorías únicas
const categorias = [...new Set(productos.map((p) => p.categoria))]

export default function Productos() {
  const [busqueda, setBusqueda] = useState("")
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas")
  const [productosFiltrados, setProductosFiltrados] = useState(productos)
  const [productoSeleccionado, setProductoSeleccionado] = useState<any>(null)
  const [sheetOpen, setSheetOpen] = useState(false)

  // Filtrar productos cuando cambia la búsqueda o categoría
  useEffect(() => {
    let resultado = productos

    // Filtrar por búsqueda
    if (busqueda) {
      resultado = resultado.filter(
        (p) =>
          p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          p.descripcion.toLowerCase().includes(busqueda.toLowerCase()),
      )
    }

    // Filtrar por categoría
    if (categoriaSeleccionada !== "Todas") {
      resultado = resultado.filter((p) => p.categoria === categoriaSeleccionada)
    }

    setProductosFiltrados(resultado)
  }, [busqueda, categoriaSeleccionada])

  // Función para abrir el sheet con los detalles del producto
  const verDetalleProducto = (producto: any) => {
    setProductoSeleccionado(producto)
    setSheetOpen(true)
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-secondary">Catálogo de Productos</h1>

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
          <Select value={categoriaSeleccionada} onValueChange={setCategoriaSeleccionada}>
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
                <Badge className="mb-2 bg-secondary hover:bg-secondary/90">{producto.categoria}</Badge>
                <h3 className="font-bold text-lg mb-1 line-clamp-2">{producto.nombre}</h3>
                <p className="text-sm text-gray-500 mb-2">{producto.subcategoria}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">S/ {producto.precio.toFixed(2)}</span>
                  <span className="text-sm text-gray-500">Por {producto.unidad}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">No se encontraron productos que coincidan con tu búsqueda.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setBusqueda("")
              setCategoriaSeleccionada("Todas")
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
                <SheetTitle className="text-xl font-bold text-secondary">{productoSeleccionado.nombre}</SheetTitle>
                <SheetDescription>
                  <Badge className="mt-1 bg-secondary hover:bg-secondary/90">{productoSeleccionado.categoria}</Badge>
                  <span className="ml-2 text-sm">{productoSeleccionado.subcategoria}</span>
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
                    <p className="text-2xl font-bold text-primary">S/ {productoSeleccionado.precio.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Por {productoSeleccionado.unidad}</p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Cotizar
                  </Button>
                </div>

                <Tabs defaultValue="descripcion" className="mt-6">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                    <TabsTrigger value="especificaciones">Especificaciones</TabsTrigger>
                    <TabsTrigger value="documentos">Documentos</TabsTrigger>
                  </TabsList>
                  <TabsContent value="descripcion" className="space-y-4">
                    <p>{productoSeleccionado.descripcion}</p>

                    <h4 className="font-bold mt-4">Usos recomendados:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {productoSeleccionado.usos.map((uso: string, index: number) => (
                        <li key={index}>{uso}</li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="especificaciones">
                    <ul className="space-y-2">
                      {productoSeleccionado.especificaciones.map((spec: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 mr-2"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                      <p className="text-sm">
                        <span className="font-medium">Stock disponible:</span> {productoSeleccionado.stock}{" "}
                        {productoSeleccionado.unidad}(s)
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="documentos">
                    {productoSeleccionado.fichasTecnicas && productoSeleccionado.fichasTecnicas.length > 0 ? (
                      <div className="space-y-3">
                        {productoSeleccionado.fichasTecnicas.map((ficha: any, index: number) => (
                          <Button key={index} variant="outline" className="w-full justify-start" asChild>
                            <a href={ficha.url} target="_blank" rel="noopener noreferrer">
                              <FileText className="mr-2 h-4 w-4" />
                              {ficha.nombre}
                              <Download className="ml-auto h-4 w-4" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No hay documentos disponibles para este producto.</p>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}

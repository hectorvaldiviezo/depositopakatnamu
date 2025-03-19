import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Datos de ejemplo para las noticias
const noticias = [
  {
    id: 1,
    titulo: "Nueva sucursal en Trujillo",
    fecha: "15 de marzo de 2024",
    descripcion:
      "Nos complace anunciar la apertura de nuestra nueva sucursal en la ciudad de Trujillo, ampliando nuestra presencia en el norte del país.",
    imagen: "/placeholder.svg?height=400&width=600",
    link: "/novedades/nueva-sucursal",
  },
  {
    id: 2,
    titulo: "Lanzamiento de nueva línea de productos",
    fecha: "28 de febrero de 2024",
    descripcion:
      "Hemos ampliado nuestro catálogo con una nueva línea de productos innovadores que revolucionarán el mercado.",
    imagen: "/placeholder.svg?height=400&width=600",
    link: "/novedades/nueva-linea-productos",
  },
  {
    id: 3,
    titulo: "Reconocimiento a la excelencia empresarial",
    fecha: "10 de febrero de 2024",
    descripcion:
      "Depósito Paktnamu ha sido galardonado con el premio a la excelencia empresarial por su destacada trayectoria y compromiso con la calidad.",
    imagen: "/placeholder.svg?height=400&width=600",
    link: "/novedades/reconocimiento-excelencia",
  },
  {
    id: 4,
    titulo: "Participación en feria internacional",
    fecha: "25 de enero de 2024",
    descripcion:
      "Tuvimos una destacada participación en la feria internacional del sector, presentando nuestras últimas innovaciones y estableciendo importantes contactos comerciales.",
    imagen: "/placeholder.svg?height=400&width=600",
    link: "/novedades/feria-internacional",
  },
  {
    id: 5,
    titulo: "Programa de responsabilidad social",
    fecha: "15 de enero de 2024",
    descripcion:
      "Lanzamos nuestro nuevo programa de responsabilidad social empresarial, enfocado en el apoyo a comunidades locales y la protección del medio ambiente.",
    imagen: "/placeholder.svg?height=400&width=600",
    link: "/novedades/responsabilidad-social",
  },
  {
    id: 6,
    titulo: "Capacitación para colaboradores",
    fecha: "5 de enero de 2024",
    descripcion:
      "Implementamos un nuevo programa de capacitación para nuestros colaboradores, con el objetivo de mejorar sus habilidades y conocimientos.",
    imagen: "/placeholder.svg?height=400&width=600",
    link: "/novedades/capacitacion-colaboradores",
  },
]

export default function Novedades() {
  // En un caso real, aquí se implementaría la lógica de paginación
  // Para este ejemplo, simplemente mostramos todas las noticias

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-secondary">Novedades</h1>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-center">
          Manténgase informado sobre las últimas noticias, eventos y novedades de Depósito Paktnamu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {noticias.map((noticia) => (
          <Card key={noticia.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image src={noticia.imagen || "/placeholder.svg"} alt={noticia.titulo} fill className="object-cover" />
            </div>
            <CardContent className="pt-6">
              <div className="text-sm text-gray-500 mb-2">{noticia.fecha}</div>
              <h2 className="text-xl font-bold mb-3 text-secondary">{noticia.titulo}</h2>
              <p className="line-clamp-3">{noticia.descripcion}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="text-primary p-0">
                <Link href={noticia.link}>Leer más</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center items-center gap-2">
        <Button variant="outline" size="icon" disabled>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Página anterior</span>
        </Button>
        <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Página siguiente</span>
        </Button>
      </div>
    </div>
  )
}


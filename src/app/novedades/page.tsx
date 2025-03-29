import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getNews } from "@/components/novedades/lib/novedades.actions";

export default async function Novedades() {
  const noticias = await getNews();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-secondary">
        Novedades
      </h1>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-center">
          Manténgase informado sobre las últimas noticias, eventos y novedades
          de Depósito Pakatnamú.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {noticias.map((noticia) => (
          <Card
            key={noticia.id}
            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={noticia.image || "/placeholder.svg"}
                alt={noticia.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-6">
              <div className="text-sm text-gray-500 mb-2">{noticia.date}</div>
              <h2 className="text-xl font-bold mb-3 text-secondary">
                {noticia.title}
              </h2>
              <p className="line-clamp-3">{noticia.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="text-primary p-0">
                <Link href={noticia.title}>Leer más</Link>
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
        <Button
          variant="outline"
          size="sm"
          className="bg-primary text-white hover:bg-primary/90"
        >
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
  );
}

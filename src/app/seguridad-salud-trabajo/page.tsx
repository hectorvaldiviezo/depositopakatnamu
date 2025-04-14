import Link from "next/link"
import { FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const dynamic = "force-dynamic";
export default function SeguridadSaludTrabajo() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-secondary">Seguridad, Salud y Trabajo</h1>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg mb-6">
          En Depósito Pakatnamú, la seguridad y salud de nuestros colaboradores y clientes es nuestra prioridad. Nos
          comprometemos a mantener un ambiente de trabajo seguro y saludable, cumpliendo con todas las normativas y
          estándares aplicables.
        </p>
        <p className="text-lg mb-6">
          Nuestras políticas y procedimientos están diseñados para prevenir accidentes, lesiones y enfermedades
          relacionadas con el trabajo, promoviendo una cultura de seguridad en todos los niveles de nuestra
          organización.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-xl font-bold text-secondary">Política de Seguridad y Salud</h2>
            </div>
            <p className="mb-6">
              Nuestra política establece los principios y compromisos para garantizar la seguridad y salud de todos
              nuestros colaboradores, contratistas y visitantes.
            </p>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/docs/politica-seguridad-salud.pdf" target="_blank">
                Descargar Aquí
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-xl font-bold text-secondary">Reglamento Interno</h2>
            </div>
            <p className="mb-6">
              Nuestro reglamento interno establece las normas, procedimientos y responsabilidades que todos debemos
              seguir para mantener un ambiente de trabajo seguro y saludable.
            </p>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/docs/reglamento-interno.pdf" target="_blank">
                Descargar Aquí
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function QuienesSomos() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-secondary">Quiénes Somos</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-lg">
          <Image src="/placeholder.svg" alt="Depósito Pakatnamú" fill className="object-cover" />
        </div>
        <div>
          <p className="text-lg mb-6">
            Depósito Pakatnamú es una empresa líder en el mercado, dedicada a proporcionar soluciones integrales para
            negocios de todos los tamaños. Desde nuestra fundación, hemos trabajado incansablemente para construir una
            reputación basada en la confianza, la calidad y la excelencia en el servicio.
          </p>
          <p className="text-lg mb-6">
            Nuestro equipo está formado por profesionales altamente capacitados y comprometidos con la satisfacción del
            cliente. Entendemos que cada negocio es único, por lo que nos esforzamos por ofrecer soluciones
            personalizadas que se adapten a sus necesidades específicas.
          </p>
          <p className="text-lg">
            En Depósito Pakatnamú, no solo vendemos productos; construimos relaciones duraderas con nuestros clientes,
            basadas en la confianza mutua y el compromiso con la excelencia.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Misión</h2>
            <p>
              Proporcionar soluciones integrales de alta calidad que impulsen el crecimiento y éxito de nuestros
              clientes, a través de un servicio excepcional y productos innovadores que superen sus expectativas.
            </p>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Visión</h2>
            <p>
              Ser reconocidos como el socio estratégico preferido en nuestro sector, liderando el mercado a través de la
              innovación, la excelencia operativa y un compromiso inquebrantable con la satisfacción del cliente.
            </p>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Valores</h2>
            <ul className="space-y-2">
              <li>
                <strong>Integridad:</strong> Actuamos con honestidad y transparencia en todo lo que hacemos.
              </li>
              <li>
                <strong>Excelencia:</strong> Nos esforzamos por superar las expectativas en cada interacción.
              </li>
              <li>
                <strong>Innovación:</strong> Buscamos constantemente nuevas formas de mejorar y crecer.
              </li>
              <li>
                <strong>Compromiso:</strong> Estamos dedicados al éxito de nuestros clientes y colaboradores.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


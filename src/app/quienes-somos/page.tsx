"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Quote } from "lucide-react";

type Section = "historia" | "mision" | "vision" | "valores";

export default function QuienesSomos() {
  const [section, setSection] = useState<Section>("historia");
  const handleButtonClick = (section: Section) => {
    setSection(section);
  };

  const sections = {
    historia: {
      title: "Quiénes Somos",
      value: "historia",
      image: "/placeholder.svg",
      content: (
        <div>
          <p className="text-lg mb-6">
            <strong className="text-secondary"> Depósito Pakatnamú</strong> es una empresa líder en el
            mercado, dedicada a proporcionar soluciones integrales para negocios
            de todos los tamaños. Desde nuestra fundación, hemos trabajado
            incansablemente para construir una reputación basada en la
            confianza, la calidad y la excelencia en el servicio.
          </p>
          <p className="text-lg mb-6">
            Nuestro equipo está formado por <strong>profesionales</strong>{" "}
            altamente capacitados y comprometidos con la satisfacción del
            cliente. Entendemos que cada negocio es único, por lo que nos
            esforzamos por ofrecer soluciones personalizadas que se adapten a
            sus necesidades específicas.
          </p>
          <p className="text-lg">
            En Depósito Pakatnamú, no solo vendemos productos; construimos
            relaciones duraderas con nuestros clientes, basadas en la confianza
            mutua y el compromiso con la excelencia.
          </p>
        </div>
      ),
    },
    mision: {
      title: "Misión",
      value: "mision",
      image: "/placeholder.svg",
      content: (
        <div>
          <Quote className="size-10 fill-secondary text-secondary mb-2 mx-auto" />
          <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
              "Proporcionar soluciones integrales de alta calidad que impulsen
              el crecimiento y éxito de nuestros clientes, a través de un
              servicio excepcional y productos innovadores que superen sus
              expectativas."
            </p>
          </blockquote>
        </div>
      ),
    },
    vision: {
      title: "Visión",
      value: "vision",
      image: "/placeholder.svg",
      content: (
        <div>
          <Quote className="size-10 fill-secondary text-secondary mb-2 mx-auto" />
          <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
              "Ser reconocidos como el socio estratégico preferido en nuestro
              sector, liderando el mercado a través de la innovación, la
              excelencia operativa y un compromiso inquebrantable con la
              satisfacción del cliente."
            </p>
          </blockquote>
        </div>
      ),
    },
    valores: {
      title: "Valores",
      value: "valores",
      image: "/placeholder.svg",
      content: (
        <ul className="space-y-4 text-lg mb-6 list-none pl-0">
          <li className="flex items-start gap-4">
            <span className="w-6 h-6 flex items-center justify-center bg-secondary text-white rounded-full font-bold">
              1
            </span>
            <div>
              <strong className="text-primary uppercase">Integridad</strong>
              <p className="text-muted-foreground">
                Actuamos con honestidad y transparencia en todo lo que hacemos.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-6 h-6 flex items-center justify-center bg-secondary text-white rounded-full font-bold">
              2
            </span>
            <div>
              <strong className="text-primary uppercase">Excelencia</strong>
              <p className="text-muted-foreground">
                Nos esforzamos por superar las expectativas en cada interacción.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-6 h-6 flex items-center justify-center bg-secondary text-white rounded-full font-bold">
              3
            </span>
            <div>
              <strong className="text-primary uppercase">Innovación</strong>
              <p className="text-muted-foreground">
                Buscamos constantemente nuevas formas de mejorar y crecer.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-6 h-6 flex items-center justify-center bg-secondary text-white rounded-full font-bold">
              4
            </span>
            <div>
              <strong className="text-primary uppercase">Compromiso</strong>
              <p className="text-muted-foreground">
                Estamos dedicados al éxito de nuestros clientes y colaboradores.
              </p>
            </div>
          </li>
        </ul>
      ),
    },
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary uppercase">
        {sections[section].title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="flex relative aspect-4/3 rounded-lg overflow-hidden shadow-lg order-last lg:order-first">
          <Image
            src={sections[section].image}
            alt="Depósito Pakatnamú"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center">
          {sections[section].content}
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-muted rounded-full flex max-w-xl mx-auto">
          {Object.entries(sections).map(([key, { title }], index) => (
            <Button
              key={key}
              size="lg"
              className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-full cursor-pointer"
              variant={
                section === key
                  ? key === "valores"
                    ? "secondary"
                    : "secondary"
                  : "ghost"
              }
              onClick={() => handleButtonClick(key as Section)}
            >
              <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white text-xs">
                {index + 1}
              </span>
              <span>{title}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

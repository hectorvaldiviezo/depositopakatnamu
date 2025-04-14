"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { MILLA_BASE } from "@/lib/config";

export const dynamic = "force-dynamic";
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
      image: "/webImages/Quienes Somos",
      content: (
        <div className="text-sm md:text-lg text-justify">
          <p className="mb-6">
            <strong className="text-secondary">Depósito Pakatnamú</strong> es
            una empresa líder en el mercado, dedicada a proporcionar soluciones
            integrales para negocios de todos los tamaños. Desde nuestra
            fundación, hemos trabajado incansablemente para construir una
            reputación basada en la confianza, la calidad y la excelencia en el
            servicio.
          </p>
          <p className="mb-6">
            Nuestro equipo está formado por <strong>profesionales</strong>{" "}
            altamente capacitados y comprometidos con la satisfacción del
            cliente. Entendemos que cada negocio es único, por lo que nos
            esforzamos por ofrecer soluciones personalizadas que se adapten a
            sus necesidades específicas.
          </p>
          <p>
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
      image: "/webImages/Misión",
      content: (
        <div>
          <Quote className="size-10 fill-secondary text-secondary mb-2 mx-auto" />
          <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-base md:text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
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
      image: "/webImages/Vision",
      content: (
        <div>
          <Quote className="size-10 fill-secondary text-secondary mb-2 mx-auto" />
          <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-base md:text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
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
      image: "/webImages/Valores",
      content: (
        <ul className="space-y-4 text-lg mb-6 list-none pl-0">
          {[
            {
              title: "Integridad",
              description:
                "Actuamos con honestidad y transparencia en todo lo que hacemos.",
            },
            {
              title: "Excelencia",
              description:
                "Nos esforzamos por superar las expectativas en cada interacción.",
            },
            {
              title: "Innovación",
              description:
                "Buscamos constantemente nuevas formas de mejorar y crecer.",
            },
            {
              title: "Compromiso",
              description:
                "Estamos dedicados al éxito de nuestros clientes y colaboradores.",
            },
          ].map((value, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="md:min-w-6 md:min-h-6 min-h-5 min-w-5 text-sm md:text-base aspect-square flex items-center justify-center bg-secondary text-white rounded-full font-bold">
                {index + 1}
              </div>
              <div className="flex flex-col">
                <strong className="text-primary uppercase text-sm md:text-base">
                  {value.title}
                </strong>
                <p className="text-muted-foreground text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ),
    },
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 overflow-hidden">
      <div className="mb-8">
        <div className="bg-muted rounded-full flex max-w-2xl mx-auto overflow-auto hiddenScroll transparentScroll">
          {Object.entries(sections).map(([key, { title }], index) => (
            <Button
              key={key}
              size="lg"
              className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-full cursor-pointer"
              variant={section === key ? "default" : "ghost"}
              onClick={() => handleButtonClick(key as Section)}
            >
              <span
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-background text-xs font-bold",
                  section === key ? "bg-muted text-primary" : "bg-secondary"
                )}
              >
                {index + 1}
              </span>
              <span className={cn("", section === key ? "font-bold" : "")}>
                {title}
              </span>
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="flex relative aspect-1/1 rounded-lg overflow-hidden shadow-lg order-last lg:order-first">
          <Image
            src={MILLA_BASE + sections[section].image}
            alt="Depósito Pakatnamú"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center">
          {sections[section].content}
        </div>
      </div>
    </div>
  );
}

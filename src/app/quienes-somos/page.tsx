"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { MILLA_BASE } from "@/lib/config";
import TitleComponent from "@/components/title";

export const dynamic = "force-dynamic";
type Section = "historia" | "mision" | "vision" | "principios";

export default function QuienesSomos() {
  const [section, setSection] = useState<Section>("historia");
  const handleButtonClick = (section: Section) => {
    setSection(section);
  };

  const sections = {
    historia: {
      title: "¿Quiénes Somos?",
      value: "historia",
      image: "/storage/webImages/2/quienes-somos-quienes-somos.png",
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
      image: "/storage/webImages/2/quienes-somos-mision.png	",
      content: (
        <div>
          <Quote className="size-10 fill-secondary text-secondary mb-2 mx-auto" />
          <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-base md:text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
              "Buscamos satisfacer las necesidades del cliente ofreciendo
              productos al mejor precio junto a una atención de calidad, con el
              compromiso de nuestros colaboradores y socios estratégicos;
              poniendo en práctica los valores de respeto, confianza,
              honestidad, responsabilidad y lealtad."
            </p>
          </blockquote>
        </div>
      ),
    },
    vision: {
      title: "Visión",
      value: "vision",
      image: "/storage/webImages/2/quienes-somos-vision.png	",
      content: (
        <div>
          <Quote className="size-10 fill-secondary text-secondary mb-2 mx-auto" />
          <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-base md:text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
              "Que Deposito Pakatnamú sea conocida y reconocida como la empresa
              lider a nivel nacional en la comercialización de materiales de
              construcción y productos siderúrgicos, ofreciendo a los clientes
              una atención personalizada."
            </p>
          </blockquote>
        </div>
      ),
    },
    principios: {
      title: "Principios",
      value: "principios",
      image: "/storage/webImages/2/quienes-somos-valores.png",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-lg">
          {[
            {
              title: "Somos todo terreno",
              description:
                "Miramos el negocio desde el campo, buscando oportunidades de crecimiento en todo tipo de terreno.",
              image:
                "https://milla.grupopakatnamu.com/storage/webImages/2/principios-somos-todo-terreno.png",
            },
            {
              title: "Mentalidad de dueño",
              description:
                "Asumimos el negocio como propio haciéndonos cargo, logrando que las cosas sucedan y gestionando las consecuencias de nuestras decisiones.",
              image:
                "https://milla.grupopakatnamu.com/storage/webImages/2/principios-mentalidad-de-dueno.png",
            },
            {
              title: "Me apasiona conocer mi negocio",
              description:
                "Nos apasiona conocer profundamente sobre nuestro negocio para aportar desde nuestro rol en su crecimiento y desarrollo.",
              image:
                "https://milla.grupopakatnamu.com/storage/webImages/2/principios-me-apasiona-conocer-mi-negocio.png",
            },
            {
              title: "Tomamos la delantera",
              description:
                "En Pakatnamu nos anticipamos a los hechos manteniéndonos proactivos, dinámicos y enérgicos en el cumplimiento de nuestro propósito.",
              image:
                "https://milla.grupopakatnamu.com/storage/webImages/2/principios-tomamos-la-delantera.png",
            },
            {
              title: "Fomento con el ejemplo nuestras normativas",
              description:
                "Somos respetuosos y cuidadores de nuestras políticas y procedimientos, fomentamos el cumplimiento de las mismas y nunca nos desviamos de los lineamientos.",
              image:
                "https://milla.grupopakatnamu.com/storage/webImages/2/principios-fomento-con-el-ejemplo-nuestras-normativas.png",
            },
            {
              title: "El cliente es primero",
              description:
                "Adaptamos ágilmente nuestros procesos y protocolos de atención para generar una experiencia placentera en nuestros clientes.",
              image:
                "https://milla.grupopakatnamu.com/storage/webImages/2/principios-el-cliente-es-primero.png",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="max-w-sm w-full border-none bg-gray-100 p-4 rounded-lg shadow flex gap-2 items-center"
            >
              <div className="relative aspect-square rounded-full overflow-hidden w-1/3">
                <Image
                  src={value.image}
                  fill
                  alt="Depósito Pakatnamú"
                  quality={100}
                  className="rounded-lg object-cover"
                  priority={true}
                />
              </div>
              <div className="flex flex-col w-2/3">
                <strong className="text-secondary text-sm md:text-base">
                  {value.title}
                </strong>
                <p className="text-muted-foreground text-xs text-justify">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  };

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto px-4 py-4 md:px-6 overflow-hidden">
      <TitleComponent
        title={sections[section].title}
        description="Conoce más sobre nosotros"
      />

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

      <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
        <div className="flex relative aspect-1/1 rounded-lg overflow-hidden shadow-lg order-last lg:order-first w-full lg:w-2/5">
          <Image
            src={MILLA_BASE + sections[section].image}
            alt="Depósito Pakatnamú"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
        <div className="flex items-center justify-center w-full lg:w-3/5">
          {sections[section].content}
        </div>
      </div>
    </div>
  );
}

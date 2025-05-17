"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { MILLA_BASE } from "@/lib/config";
import TitleComponent from "@/components/title";
import { AnimatedElement } from "@/components/animated-element";

export const dynamic = "force-dynamic";
type Section = "historia" | "proposito" | "vision" | "principios" | "valores";

export default function QuienesSomos() {
  const [section, setSection] = useState<Section>("historia");
  const handleButtonClick = (section: Section) => {
    setSection(section);
  };

  const sections = {
    historia: {
      withImage: true,
      title: "¿Quiénes Somos?",
      value: "historia",
      image: "/storage/webImages/2/quienes-somos-quienes-somos.png",
      content: (
        <div className="text-sm md:text-lg text-justify">
          <p className="mb-6">
            <strong className="text-secondary">Depósito Pakatnamú</strong> es
            más que un proveedor de materiales: somos el {""}
            <strong className="text-primary">impulso</strong> que transforma el
            esfuerzo en progreso. Nacimos para acompañar el desarrollo de
            quienes construyen.
          </p>
          <p className="mb-6">
            Con productos de calidad, atención personalizada y compromiso real,
            brindamos soluciones que impactan positivamente en la vida de
            nuestros clientes. Desde el norte del Perú, fortalecemos a
            constructoras, ferreterías y familias, ofreciendo un servicio
            confiable, transparente y humano. Nuestro equipo trabaja con
            honestidad, conocimiento y pasión para ayudarte a construir con
            seguridad y visión de futuro.
          </p>
          <p>
            Creemos en el desarrollo sostenible, en el trabajo bien hecho y en
            relaciones basadas en la confianza. Por eso, cada día damos lo mejor
            de nosotros para que tu proyecto avance, crezca y perdure.
          </p>
        </div>
      ),
    },
    proposito: {
      withImage: true,
      title: "Propósito",
      value: "proposito",
      image: "/storage/webImages/2/quienes-somos-proposito.png",
      content: (
        <AnimatedElement animation="fade-up" delay={100} className="h-full">
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
        </AnimatedElement>
      ),
    },
    vision: {
      withImage: true,
      title: "Visión",
      value: "vision",
      image: "/storage/webImages/2/quienes-somos-vision.png	",
      content: (
        <AnimatedElement animation="fade-up" delay={100} className="h-full">
          <Quote className="size-10 fill-secondary text-secondary mb-2 mx-auto" />
          <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-base md:text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
              "Que Deposito Pakatnamú sea conocida y reconocida como la empresa
              lider a nivel nacional en la comercialización de materiales de
              construcción y productos siderúrgicos, ofreciendo a los clientes
              una atención personalizada."
            </p>
          </blockquote>
        </AnimatedElement>
      ),
    },
    principios: {
      withImage: false,
      title: "Principios",
      value: "principios",
      image: "/storage/webImages/2/quienes-somos-valores.png",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-(--breakpoint-lg) gap-6 text-sm md:text-lg auto-rows-fr">
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
            <AnimatedElement
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="h-full"
            >
              <div
                key={index}
                className="max-w-sm h-full w-full bg-gray-100 p-4 rounded-lg shadow flex flex-col gap-4 items-center hover:shadow-xl transition-shadow border-t-4 border-t-primary"
              >
                <div className="relative aspect-square rounded-full overflow-hidden w-2/5">
                  <Image
                    src={value.image}
                    fill
                    alt="Depósito Pakatnamú"
                    quality={100}
                    className="rounded-lg object-cover"
                    priority={true}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <strong className="text-secondary">{value.title}</strong>
                  <p className="text-muted-foreground text-sm text-justify">
                    {value.description}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      ),
    },
    valores: {
      withImage: false,
      title: "Valores",
      value: "valores",
      image: "/storage/webImages/2/quienes-somos-valores.png",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-lg w-full">
          {[
            {
              title: "Calidad de servicio",
              image:
                "https://milla.grupopakatnamu.com/storage/webImages/2/valores-calidad-de-servicio.png",
            },
            {
              title: "Transparencia",
              image:
                "https://milla.grupopakatnamu.com/storage/webImages/2/valores-transparencia.png",
            },
            {
              title: "Orientación al cliente",
              image:
                "https://milla.grupopakatnamu.com/storage/webImages/2/valores-orientacion-al-cliente.png",
            },
            {
              title: "Mejora continua",
              image:
                "https://milla.grupopakatnamu.com/storage/webImages/2/valores-mejora-continua.png",
            },
            {
              title: "Innovación y escalabilidad",
              image:
                "https://milla.grupopakatnamu.com/storage/webImages/2/valores-innovacion-y-escalabilidad.png",
            },
            {
              title: "Proactividad",
              image:
                "https://milla.grupopakatnamu.com/storage/webImages/2/valores-proactividad.png",
            },
          ].map((value, index) => (
            <AnimatedElement
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="h-full"
            >
              <div
                className={
                  "w-full border-none bg-gray-100 p-4 rounded-lg shadow flex gap-2 items-center relative min-h-52 overflow-hidden"
                }
              >
                <Image
                  fill
                  src={value.image}
                  alt="title"
                  className="object-cover"
                ></Image>
                <div
                  className={cn(
                    "absolute inset-0 z-10 rounded-lg",
                    index % 2 === 0 ? "bg-primary/70" : "bg-secondary/70"
                  )}
                ></div>
                <div className="flex flex-col w-full relative z-20">
                  <strong className="text-white md:text-3xl font-extrabold lowercase text-center">
                    {value.title}
                  </strong>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      ),
    },
  };

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto px-4 py-4 md:px-6 overflow-hidden bg-background/40">
      <TitleComponent
        title={sections[section].title}
        description="Conoce más sobre nosotros"
      />

      <div className="mb-8">
        <div className="bg-muted rounded-full flex max-w-3xl mx-auto overflow-auto hiddenScroll transparentScroll">
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

      <div className={"flex flex-col lg:flex-row gap-12 mb-16 items-center"}>
        <div
          className={cn(
            "flex relative aspect-1/1 rounded-lg overflow-hidden shadow-lg order-last lg:order-first w-full lg:w-2/5",
            sections[section].withImage ? "h-full" : "hidden"
          )}
        >
          <Image
            src={MILLA_BASE + sections[section].image}
            alt="Depósito Pakatnamú"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
        <div
          className={cn(
            "flex items-center justify-center w-full",
            sections[section].withImage ? "lg:w-3/5" : "lg:w-full"
          )}
        >
          {sections[section].content}
        </div>
      </div>
    </div>
  );
}

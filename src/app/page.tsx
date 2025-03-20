import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { StatsSection } from "@/components/stats-section";
import { FeaturedServices } from "@/components/featured-services";
import { Testimonials } from "@/components/testimonials";
import { AnimatedElement } from "@/components/animated-element";
import { ArrowRight } from "lucide-react";

const carouselSlides = [
  {
    image: "/slider1.jpg",
    title: "SOLUCIONES INTEGRALES PARA TU NEGOCIO",
    description: "Innovación, calidad y servicio excepcional en cada producto",
  },
  {
    image: "/slider2.jpg",
    title: "ESTAMOS EN TODO EL NORTE DEL PERÚ",
    description: "Colaborando con el crecimiendo de nuestra gente",
  },
  {
    image: "/slider4.jpg",
    title: "ATENCIÓN PERSONALIZADA Y ESPECIALIZADA",
    description: "Nos comprometemos para hacer realidad tus sueños",
  },
];

const partners = [
  { name: "Socio 1", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Socio 2", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Socio 3", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Socio 4", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Socio 5", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Socio 6", logo: "/placeholder.svg?height=100&width=200" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Carousel slides={carouselSlides} />

      <FeaturedServices />

      <section className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="fade-right">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video corporativo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
                DESCUBRE <span className="text-primary">NUESTRA HISTORIA</span>{" "}
                DE ÉXITO
              </h2>
              <p className="text-lg mb-6">
                En Depósito Paktnamu, nos dedicamos a proporcionar soluciones
                integrales que transforman negocios. Con más de dos décadas de
                experiencia en el mercado, hemos construido una reputación
                basada en la confianza, calidad y excelencia en el servicio.
              </p>
              <p className="text-lg mb-6">
                Nuestro compromiso es ser su socio estratégico, entendiendo sus
                necesidades específicas y ofreciendo productos y servicios
                innovadores que superen sus expectativas y potencien su
                crecimiento.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 group">
                <Link href="/quienes-somos" className="flex items-center">
                  Conozca más sobre nosotros
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <StatsSection />

      <Testimonials />

      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <AnimatedElement animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              NUESTROS <span className="text-primary">SOCIOS ESTRATÉGICOS</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              Colaboramos con las marcas líderes del mercado para ofrecerte
              productos de la más alta calidad.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <AnimatedElement
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="flex justify-center"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={200}
                  height={100}
                  className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 bg-primary text-white">
        <div className="container mx-auto text-center">
          <AnimatedElement animation="zoom-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿LISTO PARA LLEVAR TU NEGOCIO AL SIGUIENTE NIVEL?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contáctanos hoy mismo y descubre cómo nuestras soluciones pueden
              impulsar tu crecimiento.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contactenos">CONTÁCTANOS AHORA</Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import Carousel from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { StatsSection } from "@/components/stats-section";
import { FeaturedServices } from "@/components/services/featured-services";
import { Testimonials } from "@/components/testimonials";
import { AnimatedElement } from "@/components/animated-element";
import { InfiniteLogoScroll } from "@/components/infinite-logo-scroll";
import { getCarousel } from "@/components/carousel/lib/carousel.actions";
import { getServices } from "@/components/services/lib/service.actions";
import OurHistory from "@/components/our-history";
import { getStats } from "@/components/stats/lib/stats.actions";

const partners = [
  { name: "Socio 1", logo: "/placeholder.svg" },
  { name: "Socio 2", logo: "/placeholder.svg" },
  { name: "Socio 3", logo: "/placeholder.svg" },
  { name: "Socio 4", logo: "/placeholder.svg" },
  { name: "Socio 5", logo: "/placeholder.svg" },
  { name: "Socio 6", logo: "/placeholder.svg" },
];

export default async function Home() {
  const carouselSlides = await getCarousel();
  const services = await getServices();
  const stats = await getStats();

  return (
    <div className="flex flex-col min-h-screen">
      <Carousel slides={carouselSlides} />

      <FeaturedServices services={services} />

      <OurHistory />

      <StatsSection stats={stats} />

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

          <InfiniteLogoScroll />
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

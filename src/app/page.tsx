import Link from "next/link";
import Carousel from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { FeaturedServices } from "@/components/services/featured-services";
import { Testimonials } from "@/components/testimonial/testimonials";
import { AnimatedElement } from "@/components/animated-element";
import { InfiniteLogoScroll } from "@/components/infinite-logo-scroll";
import { getCarousel } from "@/components/carousel/lib/carousel.actions";
import { getServices } from "@/components/services/lib/service.actions";
import OurHistory from "@/components/our-history";
import { getStats } from "@/components/stats/lib/stats.actions";
import { getTestimonials } from "@/components/testimonial/lib/testimonial.actions";
import { StatsSection } from "@/components/stats/stats-section";
import { getSocios } from "@/components/socios/lib/socios.actions";
import SociosSection from "@/components/socios/socios";

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
  const testimonials = await getTestimonials();
  const socios = await getSocios();

  return (
    <div className="flex flex-col min-h-screen">
      <Carousel slides={carouselSlides} />

      <FeaturedServices services={services} />

      <OurHistory />

      <StatsSection stats={stats} />

      <Testimonials testimonials={testimonials} />

      <SociosSection socios={socios} />

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

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedElement } from "./animated-element";

export default function OurHistory() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="fade-right">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F331701614734139&width=500&show_text=false&height=500&appId"
                width="100%"
                height="100%"
                className="absolute inset-0 border-none overflow-hidden"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
              DESCUBRE <span className="text-primary">NUESTRA HISTORIA</span> DE
              ÉXITO
            </h2>
            <p className="text-lg mb-6">
              Nacida con el afán de proveer a nuestros clientes de los mejores
              productos a los precios más accesibles,{" "}
              <strong>DEPOSITO PAKATNAMU</strong>
              {""} apuesta por la calidad, el buen hacer y por las nuevas
              tecnologías.
            </p>
            <p className="text-lg mb-6">
              Brindamos productos que exceden las expectativas y requerimientos
              establecidos por normas oficiales, con un fuerte compromiso por el
              cuidado del medio ambiente y la responsabilidad social.
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
  );
}

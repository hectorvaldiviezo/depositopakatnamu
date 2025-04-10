import { AnimatedElement } from "../animated-element";
import {
  InfiniteLogoScroll,
  SociosSectionProps,
} from "../infinite-logo-scroll";

export default function SociosSection({ socios }: SociosSectionProps) {
  return (
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

        <InfiniteLogoScroll socios={socios} />
      </div>
    </section>
  );
}

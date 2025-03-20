import { AnimatedCounter } from "./animated-counter"
import { AnimatedElement } from "./animated-element"
import { Users, TrendingUp, Award, Building } from "lucide-react"

export function StatsSection() {
  return (
    <section className="py-20 bg-linear-to-r from-secondary/10 to-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            NUESTRO <span className="text-primary">IMPACTO</span> EN NÚMEROS
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Descubre por qué somos líderes en el mercado y la confianza que miles de clientes depositan en nosotros.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedElement
            animation="fade-up"
            delay={100}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
          >
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary" />
            </div>
            <AnimatedCounter end={15000} suffix="+" />
            <h3 className="text-xl font-semibold mt-2 mb-1">Clientes Satisfechos</h3>
            <p className="text-gray-600 dark:text-gray-300">Confían en nuestra calidad</p>
          </AnimatedElement>

          <AnimatedElement
            animation="fade-up"
            delay={200}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
          >
            <div className="flex justify-center mb-4">
              <TrendingUp className="h-12 w-12 text-primary" />
            </div>
            <AnimatedCounter end={500} suffix="%" />
            <h3 className="text-xl font-semibold mt-2 mb-1">Crecimiento</h3>
            <p className="text-gray-600 dark:text-gray-300">En los últimos 5 años</p>
          </AnimatedElement>

          <AnimatedElement
            animation="fade-up"
            delay={300}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
          >
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-primary" />
            </div>
            <AnimatedCounter end={25} suffix="+" />
            <h3 className="text-xl font-semibold mt-2 mb-1">Premios</h3>
            <p className="text-gray-600 dark:text-gray-300">Reconocimientos de excelencia</p>
          </AnimatedElement>

          <AnimatedElement
            animation="fade-up"
            delay={400}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
          >
            <div className="flex justify-center mb-4">
              <Building className="h-12 w-12 text-primary" />
            </div>
            <AnimatedCounter end={12} />
            <h3 className="text-xl font-semibold mt-2 mb-1">Sucursales</h3>
            <p className="text-gray-600 dark:text-gray-300">A nivel nacional</p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}


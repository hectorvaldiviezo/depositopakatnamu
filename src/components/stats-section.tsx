import { AnimatedElement } from "./animated-element";
import { AnimatedCounter } from "./animated-counter";
import * as LucideReact from "lucide-react";
import React from "react";

// Definir el tipo de los nombres de los íconos
type IconNames = keyof typeof LucideReact;

export function StatsSection() {
  const icons: IconNames[] = [
    "Users",
    "TrendingUp",
    "Award",
    "Building",
    // Puedes agregar más nombres de íconos aquí
  ];

  return (
    <section className="py-20 bg-linear-to-r from-secondary/10 to-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            NUESTRO <span className="text-primary">IMPACTO</span> EN NÚMEROS
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Descubre por qué somos líderes en el mercado y la confianza que
            miles de clientes depositan en nosotros.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {icons.map((iconName, index) => {
            const Icon = LucideReact[iconName] as React.ComponentType<any>;

            return (
              <AnimatedElement
                key={index}
                animation="fade-up"
                delay={100 * index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  {/* Usar el componente de ícono correctamente */}
                  {Icon && <Icon className="h-12 w-12 text-primary" />}
                </div>
                <AnimatedCounter end={index * 1000 + 15000} suffix="+" />
                <h3 className="text-xl font-semibold mt-2 mb-1">{iconName}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Descripción de {iconName}
                </p>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
}

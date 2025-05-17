import * as LucideReact from "lucide-react";
import React from "react";
import { AnimatedElement } from "../animated-element";
import { StatsResource } from "./lib/stats.interface";
import { AnimatedCounter } from "../animated-counter";

// Definir el tipo de los nombres de los íconos

interface StatsSectionProps {
  stats: StatsResource[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-20 bg-background bg-linear-to-r from-secondary/20 to-primary/20">
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 md:px-6">
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
          {stats.map((stat, index) => {
            const Icon = LucideReact[stat.icon] as React.ComponentType<any>;

            return (
              <AnimatedElement
                key={index}
                animation="fade-up"
                delay={100 * index}
                className="bg-background dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  {Icon && <Icon className="h-12 w-12 text-primary" />}
                </div>
                <AnimatedCounter end={stat.number} suffix={stat.symbol} />
                <h3 className="text-xl font-extrabold mt-2 mb-1 text-secondary">
                  {stat.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
}

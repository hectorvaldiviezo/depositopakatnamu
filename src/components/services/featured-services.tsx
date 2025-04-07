import { AnimatedElement } from "../animated-element";
import * as LucideReact from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ServiceResource } from "./lib/service.interface";

interface FeaturedServicesProps {
  services: ServiceResource[];
}

export function FeaturedServices({ services }: FeaturedServicesProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            SERVICIOS <span className="text-primary">PREMIUM</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Ofrecemos soluciones integrales diseñadas para potenciar el éxito de
            tu negocio.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = LucideReact[
              service.icon ?? "Atom"
            ] as React.ComponentType<any>;

            return (
              <AnimatedElement
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-b-4 border-transparent hover:border-primary">
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="h-12 w-12 text-primary" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 grow">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                  >
                    <Link href={service.url}>Saber más</Link>
                  </Button>
                </div>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
}

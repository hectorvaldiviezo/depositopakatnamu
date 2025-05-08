"use client";

import { useState, useEffect } from "react";
import { AnimatedElement } from "../animated-element";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { TestimonialResource } from "./lib/testimonial.interface";

interface TestimonialProps {
  testimonials: TestimonialResource[];
}

export function Testimonials({ testimonials }: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);
  // 200 - 240
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 md:px-6">
        <AnimatedElement animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            LO QUE DICEN <span className="text-primary">NUESTROS CLIENTES</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            La satisfacción de nuestros clientes es nuestro mayor logro y
            motivación para seguir mejorando.
          </p>
        </AnimatedElement>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8 rounded-lg shadow-lg">
                    {/* <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div> */}
                    <p className="text-sm md:text-lg italic mb-6">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="flex items-center">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {testimonial.job}{" "}
                          {testimonial.business
                            ? `- ${testimonial.business}`
                            : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              prev();
              setAutoplay(false);
            }}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white dark:bg-gray-800 text-primary p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => {
              next();
              setAutoplay(false);
            }}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white dark:bg-gray-800 text-primary p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

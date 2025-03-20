"use client";
import { BASE_PATH } from "@/lib/config";
import Image from "next/image";
import { AnimatedElement } from "./animated-element";

// Ejemplo de logos (reemplaza con tus propios logos)
const logos = [
  "/aceros.png",
  "/dino.jpg",
  "/eternit.png",
  "/fibraforte.png",
  "/pacasmayo.png",
  "/siderperu.png",
];

export function InfiniteLogoScroll() {
  return (
    <div className="w-full overflow-hidden bg-background">
      <div className="relative">
        <div className="flex animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="shrink-0 w-36 md:w-[200px] p-6">
              <AnimatedElement
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="flex justify-center"
              >
                <Image
                  src={BASE_PATH + "/clientes" + (logo || "/peru.svg")}
                  alt={`Logo ${index + 1}`}
                  width={1200}
                  height={600}
                  className="h-full max-h-8 md:max-h-14 w-full object-contain filter grayscale hover:grayscale-0 transition-transform duration-300 ease-in-out hover:scale-90"
                />
              </AnimatedElement>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-20 h-full bg-linear-to-r from-background to-transparent" />
        <div className="absolute top-0 right-0 w-20 h-full bg-linear-to-l from-background to-transparent" />
      </div>
    </div>
  );
}

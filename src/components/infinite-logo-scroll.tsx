"use client";
import { BASE_PATH } from "@/lib/config";
import Image from "next/image";
import { AnimatedElement } from "./animated-element";
import { SocioResource } from "./socios/lib/socios.interface";

export interface SociosSectionProps {
  socios: SocioResource[];
}

export function InfiniteLogoScroll({ socios }: SociosSectionProps) {
  return (
    <div className="w-full overflow-hidden bg-background">
      <div className="relative">
        <div className="flex animate-scroll">
          {[...socios, ...socios].map((socio, index) => (
            <div key={index} className="shrink-0 w-36 md:w-[200px] p-6">
              <AnimatedElement
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="flex justify-center"
              >
                <Image
                  src={socio.image}
                  alt={`Logo ${index + 1}`}
                  width={1200}
                  height={1200}
                  className="h-full max-h-8 md:max-h-20 w-full object-contain filter transition-transform duration-300 ease-in-out hover:scale-90"
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

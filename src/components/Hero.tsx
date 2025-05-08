"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  descriptions?: string[];
  src: string;
  height: string;
  gradient: boolean;
  complaint?: boolean;
  noText?: boolean;
  classImg?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  descriptions,
  src,
  height,
  gradient = false,
  complaint = false,
  noText = false,
  classImg = "",
}: HeroProps) {
  const navigate = useRouter();

  return (
    <section className={`relative ${height} flex items-center`} id="hero">
      <Image
        src={src}
        alt="Transporte de carga"
        fill={true}
        style={{ objectFit: "cover" }}
        quality={100}
        className={classImg}
      />
      <div
        className={`absolute inset-0 ${
          gradient
            ? // ? "bg-linear-to-r from-[#0d0e2ace] via-[#0d0e2a93] to-[#0d0e2a81]"
              "bg-linear-to-t from-secondary/60 to-black/20 dark:from-muted dark:to-muted/20"
            : ""
        }`}
      ></div>
      <div
        className={`max-w-(--breakpoint-xl) max-w-(--breakpoint-lg) mx-auto px-4 relative z-10 ${
          noText ? "hidden" : ""
        }`}
      >
        <div className="max-w-full">
          <div className="w-full mb-4 text-white flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-7xl font-bold font-roboto animate-fade-left animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-alternate animate-fill-forwards">
              {title}
            </h1>

            <h1 className="text-3xl md:text-5xl font-roboto text-secondary">
              {subtitle}
            </h1>
            <h1 className="text-xs md:text-2xl mb-8 text-secondary">
              <div className="flex gap-1">
                <span>{description}</span>
                {descriptions && (
                  <div className="bg-red-700 rounded px-1">
                    <Typewriter
                      options={{
                        strings: descriptions,
                        autoStart: true,
                        loop: true,
                        delay: 150,
                      }}
                    />
                  </div>
                )}
              </div>
            </h1>
          </div>

          {complaint && (
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => navigate.push("/libro-reclamaciones/consulta")}
              >
                <Search className="w-6 h-6 mr-2" />
                Consultar reclamo
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

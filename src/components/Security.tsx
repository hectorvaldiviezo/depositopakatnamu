"use client";
import { BASE_PATH } from "@/lib/config";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function Security() {
  const features = [
    "Atención y monitoreo las 24 horas",
    "Cobertura a nivel nacional",
    "Unidades equipadas con implementos de seguridad",
    "Rastreo satelital telemetría",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Tu Carga Segura y a Tiempo
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex items-center justify-center">
            <Tilt>
              <Image
                src={BASE_PATH + "/transporte.png"}
                alt="Seguridad en el transporte"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </Tilt>
          </div>
          <div className="md:w-1/2">
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-4 shrink-0" />
                  <span className="text-lg font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/quotation/ContactForm";
import Image from "next/image";
import TitleComponent from "@/components/title";
export const dynamic = "force-dynamic";

export default function Contactenos() {
  return (
    <div className="container mx-auto pt-4 pb-16 px-4 md:px-6 relative">
      <TitleComponent
        title="Contáctenos"
        description="Complete el formulario a continuación y nos pondremos en contacto con usted a la brevedad."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        <div className="lg:col-span-3">
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 h-full">
          <Card className="shadow-lg h-full">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-6 text-secondary">
                Información de contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Dirección principal</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Av. Augusto B. Leguia Nro. 1050 Urb. San Lorenzo
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lambayeque, Chiclayo, Jose Leonardo Ortiz
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Horario de atención</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lunes a Viernes: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sábados: 8:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Image src="/dplogo.svg" alt="Logo" width={200} height={50} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

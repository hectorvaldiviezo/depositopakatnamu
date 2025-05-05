"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import useProductCartStore from "@/components/quotation/lib/quotation.store";
import { errorToast, successToast } from "@/lib/core.function";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSedes } from "@/components/sedes/lib/sedes.hook";
import { Skeleton } from "@/components/ui/skeleton";
import ContactForm from "@/components/quotation/ContactForm";
import Image from "next/image";
import TitleComponent from "@/components/title";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Particles } from "@/components/magicui/particles";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { DotPattern } from "@/components/magicui/dot-pattern";
export const dynamic = "force-dynamic";

export default function Contactenos() {
  const [formData, setFormData] = useState({
    sede: "",
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      successToast(
        "Formulario enviado con éxito",
        "Nos pondremos en contacto con usted pronto."
      );
    } catch (error) {
      errorToast("Error al enviar el formulario");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 relative">
      <TitleComponent
        title="Contáctenos"
        description="Estamos aquí para ayudarle. Complete el formulario a continuación y
          nos pondremos en contacto con usted a la brevedad."
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

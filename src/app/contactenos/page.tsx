"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contactenos() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío de formulario
    try {
      // En un caso real, aquí se enviaría el formulario a un endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        success: true,
        message:
          "¡Gracias por contactarnos! Nos pondremos en contacto con usted a la brevedad.",
      });

      // Resetear el formulario
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          "Hubo un error al enviar el formulario. Por favor, inténtelo nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-secondary uppercase">
        Contáctenos
      </h1>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-center">
          Estamos aquí para ayudarle. Complete el formulario a continuación y
          nos pondremos en contacto con usted a la brevedad.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        <div className="lg:col-span-3">
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">
                      Nombre completo <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Ingrese su nombre completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Correo electrónico <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Ingrese su correo electrónico"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="asunto">
                    Asunto <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    placeholder="Ingrese el asunto de su mensaje"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">
                    Mensaje <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    placeholder="Escriba su mensaje aquí"
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-md ${
                      submitStatus.success
                        ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
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
                  <Phone className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      (074)25-4406
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      (074)25-0653
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Correo electrónico</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      informes@depositopakatnamu.com
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

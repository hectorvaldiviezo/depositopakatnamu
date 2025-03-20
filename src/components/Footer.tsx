import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  BookOpen,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { ThemeToggleButton } from "./theme-toggle-button";
import Image from "next/image";
import { BASE_PATH } from "@/lib/config";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container py-12 px-4 md:px-6 max-w-(--breakpoint-xl) mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Sucursales
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary group-hover:scale-110 transition-transform" />
                <span>
                  <span className="font-semibold">Lambayeque:</span> Carretera a
                  Lambayeque Mz. A, Lote 6, Km. 4.5
                </span>
              </li>
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary group-hover:scale-110 transition-transform" />
                <span>
                  <span className="font-semibold">Chiclayo:</span> Av. Augusto
                  B. Leguía, 1050 | Urb. San Lorenzo
                </span>
              </li>
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary group-hover:scale-110 transition-transform" />
                <span>
                  <span className="font-semibold">Piura:</span> Carretera a
                  Sullana Km. 1009 | 26 de Octubre
                </span>
              </li>
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary group-hover:scale-110 transition-transform" />
                <span>
                  <span className="font-semibold">Pacasmayo:</span> Avenida
                  Enrique Valenzuela, 419
                </span>
              </li>
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary group-hover:scale-110 transition-transform" />
                <span>
                  <span className="font-semibold">Trujillo:</span> Avenida
                  Nicolás de Piérola, 1721
                </span>
              </li>
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary group-hover:scale-110 transition-transform" />
                <span>
                  <span className="font-semibold">Chimbote:</span> Pasaje. Tres
                  de Octubre | Mz.A Lt.7 - Sector Industrial | Nuevo Chimbote
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Contáctenos
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contactenos"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  Formulario de Contacto
                </Link>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>informes@depositopakatnamu.com</span>
              </li>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Teléfonos
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              </h3>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <div>
                  <p>
                    <span className="font-medium">Lambayeque:</span> 981 604 288
                  </p>
                  <p>
                    <span className="font-medium">Chiclayo:</span> 978 185 795
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <div>
                  <p>
                    <span className="font-medium">Piura:</span> 981 698 001
                  </p>
                  <p>
                    <span className="font-medium">Cajamarca:</span> 942 671 801
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <div>
                  <p>
                    <span className="font-medium">Pacasmayo:</span> 949 801 047
                    / 924 119 386 / 976 716 082
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <div>
                  <p>
                    <span className="font-medium">Trujillo:</span> 958 018 295 /
                    044-251700
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <div>
                  <p>
                    <span className="font-medium">Chimbote:</span> 946 371 324
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Novedades
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 mb-8 text-sm">
              <li>
                <Link
                  href="/novedades/nueva-sucursal"
                  className="hover:text-primary transition-colors"
                >
                  Nueva sucursal en Trujillo
                </Link>
              </li>
              <li>
                <Link
                  href="/novedades/promocion-verano"
                  className="hover:text-primary transition-colors"
                >
                  Promociones de verano
                </Link>
              </li>
              <li>
                <Link
                  href="/novedades/nuevos-productos"
                  className="hover:text-primary transition-colors"
                >
                  Nuevos productos disponibles
                </Link>
              </li>
              <li>
                <Link
                  href="/novedades"
                  className="hover:text-primary transition-colors"
                >
                  Ver todas las novedades
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Libro de Reclamaciones
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </h3>
            <div className="mb-6">
              <Link href="/libro-reclamaciones">
                <Image
                  src={BASE_PATH + "/logo-libro.svg"}
                  width={150}
                  height={60}
                  alt="Transportes Pakatnamú"
                  className="py-2 px-4"
                />
              </Link>
            </div>

            <div className="mt-4">
              <ThemeToggleButton />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 text-center">
          <div className="w-full flex flex-wrap justify-center gap-4 py-4">
            <Link
              href="https://www.facebook.com/depositopakatnamuadm"
              target="_blank"
            >
              <Button
                size="sm"
                variant="default"
                className="flex w-fit gap-2 px-2 items-center text-xs font-medium font-roboto text-secondary rounded-full bg-muted hover:bg-muted/95"
              >
                <Facebook className="w-4 h-4 stroke-transparent fill-secondary" />
                @depositopakatnamuadm
              </Button>
            </Link>
            <Link
              href="https://www.instagram.com/depositopakatnamu/"
              target="_blank"
            >
              <Button
                size="sm"
                variant="default"
                className="flex w-fit gap-2 px-2 items-center text-xs font-medium font-roboto text-secondary rounded-full bg-muted hover:bg-muted/95"
              >
                <Instagram className="w-4 h-4 fill-transparent stroke-secondary" />
                @depositopakatnamu
              </Button>
            </Link>
            <Link
              href="https://pe.linkedin.com/company/depositopakatnamu"
              target="_blank"
            >
              <Button
                size="sm"
                variant="default"
                className="flex w-fit gap-2 px-2 items-center text-xs font-medium font-roboto text-secondary rounded-full bg-muted hover:bg-muted/95"
              >
                <Linkedin className="w-4 h-4 fill-transparent stroke-secondary" />
                @depositopakatnamu
              </Button>
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Depósito Pakatnamú EIRL. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

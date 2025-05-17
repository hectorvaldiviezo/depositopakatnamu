import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { ThemeToggleButton } from "./theme-toggle-button";
import Image from "next/image";
import { BASE_PATH } from "@/lib/config";
import { Button } from "./ui/button";

// Constantes para sucursales
const BRANCHES = [
  {
    name: "Lambayeque",
    address: "Carretera a Lambayeque Mz. A, Lote 6, Km. 4.5",
  },
  {
    name: "Chiclayo",
    address: "Av. Augusto B. Leguía, 1050 | Urb. San Lorenzo",
  },
  {
    name: "Piura",
    address: "Carretera a Sullana Km. 1009 | 26 de Octubre",
  },
  {
    name: "Pacasmayo",
    address: "Avenida Enrique Valenzuela, 419",
  },
  {
    name: "Trujillo",
    address: "Avenida Nicolás de Piérola, 1721",
  },
  {
    name: "Chimbote",
    address:
      "Pasaje. Tres de Octubre | Mz.A Lt.7 - Sector Industrial | Nuevo Chimbote",
  },
];

// Constantes para teléfonos
const PHONES = [
  {
    city: "Lambayeque",
    numbers: ["981 604 288"],
  },
  {
    city: "Chiclayo",
    numbers: ["978 185 795"],
  },
  {
    city: "Piura",
    numbers: ["981 698 001"],
  },
  {
    city: "Cajamarca",
    numbers: ["942 671 801"],
  },
  {
    city: "Pacasmayo",
    numbers: ["949 801 047", "924 119 386", "976 716 082"],
  },
  {
    city: "Trujillo",
    numbers: ["958 018 295", "044-251700"],
  },
  {
    city: "Chimbote",
    numbers: ["946 371 324"],
  },
];

// Constantes para enlaces
const LINKS = [
  { href: "/quienes-somos", label: "Quienes Somos" },
  { href: "/novedades", label: "Novedades" },
  { href: "/productos", label: "Productos" },
];

// Constantes para redes sociales
const SOCIALS = [
  {
    href: "https://www.facebook.com/depositopakatnamuadm",
    icon: Facebook,
    label: "@depositopakatnamuadm",
    iconClass:
      "w-4 h-4 stroke-transparent fill-secondary dark:fill-white dark:stroke-trannsparent",
  },
  {
    href: "https://www.instagram.com/depositopakatnamu/",
    icon: Instagram,
    label: "@depositopakatnamu",
    iconClass:
      "w-4 h-4 fill-transparent stroke-secondary dark:fill-transparent dark:stroke-white",
  },
  {
    href: "https://pe.linkedin.com/company/depositopakatnamu",
    icon: Linkedin,
    label: "@depositopakatnamu",
    iconClass:
      "w-4 h-4 fill-secondary stroke-transparent dark:fill-white dark:stroke-transparent",
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="py-12 px-4 md:px-6 max-w-(--breakpoint-xl) mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Sucursales
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {BRANCHES.map((branch) => (
                <li className="flex items-start group" key={branch.name}>
                  <MapPin className="size-5 min-w-5 mr-2 mt-0.5 text-terciary group-hover:scale-110 transition-transform" />
                  <span>
                    <span className="font-semibold">{branch.name}:</span>{" "}
                    {branch.address}
                  </span>
                </li>
              ))}
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
                  <Mail className="size-5 min-w-5 mr-2 text-terciary" />
                  Formulario de Contacto
                </Link>
              </li>
              <li className="flex items-start">
                <Mail className="size-5 min-w-5 mr-2 text-terciary" />
                <span>informes@depositopakatnamu.com</span>
              </li>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Teléfonos
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              </h3>
              {[
                // Agrupar teléfonos por ciudad
                { cities: ["Lambayeque", "Chiclayo"] },
                { cities: ["Piura", "Cajamarca"] },
                { cities: ["Pacasmayo"] },
                { cities: ["Trujillo"] },
                { cities: ["Chimbote"] },
              ].map((group, idx) => (
                <li className="flex items-start" key={idx}>
                  <Phone className="size-5 min-w-5 mr-2 mt-0.5 text-terciary" />
                  <div>
                    {group.cities.map((city) => {
                      const phone = PHONES.find((p) => p.city === city);
                      if (!phone) return null;
                      return (
                        <p key={city}>
                          <span className="font-medium">{city}:</span>{" "}
                          {phone.numbers.join(" / ")}
                        </p>
                      );
                    })}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Enlaces
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 mb-8 text-sm">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
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

        <div className="mt-12 text-center">
          <div className="w-full flex flex-wrap justify-center gap-4 py-4">
            {SOCIALS.map((social) => (
              <Link href={social.href} target="_blank" key={social.href}>
                <Button
                  size="sm"
                  variant="default"
                  className="cursor-pointer flex w-fit gap-2 px-2 items-center text-xs font-medium font-roboto text-secondary rounded-full bg-muted hover:bg-muted/95 dark:text-white"
                >
                  <social.icon className={social.iconClass} />
                  {social.label}
                </Button>
              </Link>
            ))}
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

import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { ThemeToggleButton } from "./theme-toggle-button"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white w-full">
      <div className="container py-12 px-4 md:px-6 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Sucursales</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Av. Principal 123, Lima, Perú</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Calle Comercial 456, Arequipa, Perú</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>(01) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>info@depositopaktnamu.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Novedades</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/novedades/nueva-sucursal" className="hover:text-primary transition-colors">
                  Nueva sucursal en Trujillo
                </Link>
              </li>
              <li>
                <Link href="/novedades/promocion-verano" className="hover:text-primary transition-colors">
                  Promociones de verano
                </Link>
              </li>
              <li>
                <Link href="/novedades/nuevos-productos" className="hover:text-primary transition-colors">
                  Nuevos productos disponibles
                </Link>
              </li>
              <li>
                <Link href="/novedades" className="hover:text-primary transition-colors">
                  Ver todas las novedades
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contáctenos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contactenos" className="hover:text-primary transition-colors">
                  Formulario de contacto
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover:text-primary transition-colors">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-primary transition-colors">
                  Catálogo de productos
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Link href="https://facebook.com" className="hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://instagram.com" className="hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos en Facebook</h3>
            <div className="bg-white p-2 rounded">
              <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm">Contenido de Facebook</span>
              </div>
            </div>
            <div className="mt-6">
              <ThemeToggleButton />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Depósito Paktnamu. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}


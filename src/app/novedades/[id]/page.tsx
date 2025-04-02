"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";

// Datos de ejemplo para las noticias (en una aplicación real, esto vendría de una API o base de datos)
const noticias = [
  {
    id: 1,
    titulo: "Nueva sucursal en Trujillo",
    fecha: "15 de marzo de 2024",
    descripcion:
      "Nos complace anunciar la apertura de nuestra nueva sucursal en la ciudad de Trujillo, ampliando nuestra presencia en el norte del país.",
    contenido: `
      <p>Depósito Paktnamu se enorgullece en anunciar la inauguración de su nueva sucursal en la ciudad de Trujillo, marcando un hito importante en nuestra expansión por el norte del país.</p>
      
      <p>Esta nueva sede, ubicada estratégicamente en la Avenida Nicolás de Piérola 1721, cuenta con instalaciones modernas y un amplio catálogo de productos para satisfacer las necesidades de nuestros clientes en la región.</p>
      
      <p>La apertura de esta sucursal es parte de nuestro plan estratégico de crecimiento y refleja nuestro compromiso con brindar un servicio de excelencia a más peruanos. Con esta nueva ubicación, buscamos acercarnos aún más a nuestros clientes y proveedores de La Libertad.</p>
      
      <p>La inauguración oficial se llevará a cabo el próximo 30 de marzo, con la presencia de autoridades locales y representantes de importantes empresas de la región. Durante la semana de apertura, ofreceremos promociones especiales y descuentos exclusivos para celebrar junto a nuestros clientes.</p>
      
      <p>Agradecemos a todos nuestros colaboradores, proveedores y clientes por su confianza y apoyo continuo, que han hecho posible este nuevo logro para Depósito Paktnamu.</p>
    `,
    imagen: "/placeholder.svg",
    imagenes_adicionales: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
  },
  {
    id: 2,
    titulo: "Lanzamiento de nueva línea de productos",
    fecha: "28 de febrero de 2024",
    descripcion:
      "Hemos ampliado nuestro catálogo con una nueva línea de productos innovadores que revolucionarán el mercado.",
    contenido: `
      <p>Depósito Paktnamu se complace en anunciar el lanzamiento de su nueva línea de productos innovadores, diseñados para satisfacer las crecientes demandas del mercado y ofrecer soluciones de vanguardia a nuestros clientes.</p>
      
      <p>Esta nueva gama de productos incorpora tecnología de punta y materiales de la más alta calidad, garantizando durabilidad, eficiencia y un rendimiento superior. Nuestro equipo de investigación y desarrollo ha trabajado incansablemente para crear soluciones que no solo cumplan, sino que excedan las expectativas del mercado actual.</p>
      
      <p>Entre los productos destacados de esta nueva línea se encuentran:</p>
      <ul>
        <li>Sistemas avanzados de almacenamiento</li>
        <li>Equipos de última generación para optimización de espacios</li>
        <li>Soluciones eco-amigables para reducir el impacto ambiental</li>
        <li>Herramientas especializadas con tecnología inteligente</li>
      </ul>
      
      <p>Estos nuevos productos ya están disponibles en todas nuestras sucursales y próximamente en nuestra tienda online. Invitamos a todos nuestros clientes a visitar nuestras instalaciones para conocer de primera mano estas innovadoras soluciones.</p>
    `,
    imagen: "/placeholder.svg",
    imagenes_adicionales: [
      "/placeholder.svg",
      "/placeholder.svg",
    ],
  },
  {
    id: 3,
    titulo: "Reconocimiento a la excelencia empresarial",
    fecha: "10 de febrero de 2024",
    descripcion:
      "Depósito Paktnamu ha sido galardonado con el premio a la excelencia empresarial por su destacada trayectoria y compromiso con la calidad.",
    contenido: `
      <p>Con gran orgullo compartimos que Depósito Paktnamu ha sido reconocido con el prestigioso Premio a la Excelencia Empresarial 2024, otorgado por la Cámara de Comercio e Industria, en reconocimiento a nuestra destacada trayectoria y compromiso inquebrantable con la calidad.</p>
      
      <p>Este galardón, que reconoce a las empresas que han demostrado un desempeño sobresaliente en áreas como innovación, servicio al cliente, responsabilidad social y crecimiento sostenible, es un testimonio del arduo trabajo y dedicación de todo nuestro equipo.</p>
      
      <p>Durante la ceremonia de premiación, nuestro Gerente General expresó: "Este reconocimiento es el resultado del esfuerzo colectivo de cada miembro de la familia Paktnamu. Nos impulsa a seguir innovando y mejorando para ofrecer siempre lo mejor a nuestros clientes."</p>
      
      <p>El jurado destacó especialmente nuestras iniciativas de mejora continua, el programa de capacitación para colaboradores y nuestro compromiso con prácticas comerciales éticas y sostenibles.</p>
      
      <p>Agradecemos a nuestros clientes, proveedores y colaboradores por su confianza y apoyo, que han sido fundamentales para alcanzar este importante logro. Reafirmamos nuestro compromiso de seguir trabajando con excelencia y pasión para superar las expectativas de todos nuestros grupos de interés.</p>
    `,
    imagen: "/placeholder.svg",
    imagenes_adicionales: ["/placeholder.svg"],
  },
  {
    id: 4,
    titulo: "Participación en feria internacional",
    fecha: "25 de enero de 2024",
    descripcion:
      "Tuvimos una destacada participación en la feria internacional del sector, presentando nuestras últimas innovaciones y estableciendo importantes contactos comerciales.",
    contenido: `
      <p>Depósito Paktnamu tuvo una destacada participación en la Feria Internacional del Sector, uno de los eventos más importantes de la industria a nivel latinoamericano, que se llevó a cabo del 15 al 20 de enero en el Centro de Convenciones de Lima.</p>
      
      <p>Durante el evento, presentamos nuestras últimas innovaciones y soluciones integrales, captando la atención de numerosos visitantes nacionales e internacionales. Nuestro stand, diseñado con un concepto moderno y funcional, se convirtió en uno de los más visitados de la feria.</p>
      
      <p>El equipo comercial de Depósito Paktnamu aprovechó esta plataforma para establecer importantes contactos con potenciales clientes y proveedores de diversos países, abriendo nuevas oportunidades de negocio y colaboración internacional.</p>
      
      <p>Entre los productos que generaron mayor interés se encuentran nuestras nuevas líneas de soluciones sostenibles y sistemas de gestión inteligente, que reflejan nuestro compromiso con la innovación y la responsabilidad ambiental.</p>
      
      <p>"La participación en esta feria ha sido extremadamente valiosa para nosotros. No solo hemos podido mostrar nuestras capacidades y productos, sino también aprender de las tendencias globales y establecer conexiones que serán fundamentales para nuestro crecimiento futuro", comentó nuestro Director Comercial.</p>
      
      <p>Agradecemos a todos los visitantes que se acercaron a nuestro stand y a los organizadores del evento por brindarnos esta importante plataforma para mostrar lo mejor de Depósito Paktnamu al mundo.</p>
    `,
    imagen: "/placeholder.svg",
    imagenes_adicionales: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
  },
  {
    id: 5,
    titulo: "Programa de responsabilidad social",
    fecha: "15 de enero de 2024",
    descripcion:
      "Lanzamos nuestro nuevo programa de responsabilidad social empresarial, enfocado en el apoyo a comunidades locales y la protección del medio ambiente.",
    contenido: `
      <p>Depósito Paktnamu se enorgullece en anunciar el lanzamiento de su nuevo Programa de Responsabilidad Social Empresarial, "Construyendo Juntos", una iniciativa integral enfocada en generar un impacto positivo en las comunidades donde operamos y contribuir a la protección del medio ambiente.</p>
      
      <p>Este programa, que refleja nuestros valores corporativos y compromiso con el desarrollo sostenible, se estructura en tres ejes principales:</p>
      
      <h3>1. Apoyo a Comunidades Locales</h3>
      <p>Implementaremos proyectos de desarrollo comunitario en colaboración con organizaciones locales, enfocándonos en educación, salud y mejoramiento de infraestructura. Nuestro primer proyecto será la renovación de tres escuelas en zonas rurales cercanas a nuestras sucursales.</p>
      
      <h3>2. Protección Ambiental</h3>
      <p>Nos comprometemos a reducir nuestra huella ambiental a través de prácticas sostenibles en nuestras operaciones. Esto incluye la implementación de un sistema de gestión de residuos, eficiencia energética y la campaña de reforestación "Un Árbol por Cada Venta", que iniciará el próximo mes.</p>
      
      <h3>3. Voluntariado Corporativo</h3>
      <p>Fomentaremos la participación activa de nuestros colaboradores en iniciativas sociales y ambientales, otorgándoles horas laborales para actividades de voluntariado y reconociendo su compromiso con la comunidad.</p>
      
      <p>"En Depósito Paktnamu creemos firmemente que el éxito empresarial debe ir de la mano con la responsabilidad social. Este programa representa nuestro compromiso de contribuir al bienestar de las comunidades y la preservación del medio ambiente para las futuras generaciones", expresó nuestro Gerente de Sostenibilidad.</p>
      
      <p>Invitamos a nuestros clientes, proveedores y colaboradores a sumarse a estas iniciativas y ser parte del cambio positivo que queremos generar en nuestra sociedad.</p>
    `,
    imagen: "/placeholder.svg",
    imagenes_adicionales: [
      "/placeholder.svg",
      "/placeholder.svg",
    ],
  },
  {
    id: 6,
    titulo: "Capacitación para colaboradores",
    fecha: "5 de enero de 2024",
    descripcion:
      "Implementamos un nuevo programa de capacitación para nuestros colaboradores, con el objetivo de mejorar sus habilidades y conocimientos.",
    contenido: `
      <p>Depósito Paktnamu ha implementado un innovador programa de capacitación para todos sus colaboradores, denominado "Creciendo Juntos", diseñado para potenciar el desarrollo profesional y personal de nuestro equipo humano.</p>
      
      <p>Este programa integral, que se desarrollará a lo largo del año 2024, abarca diversas áreas de conocimiento y habilidades, adaptadas a las necesidades específicas de cada departamento y posición dentro de la empresa.</p>
      
      <p>Entre los módulos principales del programa se encuentran:</p>
      <ul>
        <li>Atención al cliente y experiencia de servicio</li>
        <li>Nuevas tecnologías y digitalización</li>
        <li>Liderazgo y trabajo en equipo</li>
        <li>Seguridad y salud ocupacional</li>
        <li>Gestión eficiente de recursos</li>
        <li>Habilidades blandas y comunicación efectiva</li>
      </ul>
      
      <p>Las capacitaciones serán impartidas por especialistas reconocidos en cada área, combinando sesiones presenciales y virtuales para facilitar la participación de todos los colaboradores de nuestras diferentes sucursales.</p>
      
      <p>"Invertir en el desarrollo de nuestro equipo es invertir en el futuro de nuestra empresa. Estamos convencidos de que contar con colaboradores altamente capacitados y motivados es fundamental para ofrecer un servicio de excelencia a nuestros clientes", señaló nuestra Directora de Recursos Humanos.</p>
      
      <p>Adicionalmente, se ha implementado un sistema de reconocimiento para aquellos colaboradores que destaquen en su proceso de aprendizaje y apliquen efectivamente los conocimientos adquiridos en su desempeño diario.</p>
      
      <p>Con esta iniciativa, Depósito Paktnamu reafirma su compromiso con la excelencia operativa y el bienestar de su equipo humano, pilares fundamentales de nuestra filosofía empresarial.</p>
    `,
    imagen: "/placeholder.svg",
    imagenes_adicionales: ["/placeholder.svg"],
  },
];

export default function NoticiaDetalle() {
  const params = useParams();
  const router = useRouter();
  const [noticia, setNoticia] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando una carga de datos
    setLoading(true);

    // Buscar la noticia por ID
    const id = Number(params.id);
    const noticiaEncontrada = noticias.find((n) => n.id === id);

    if (noticiaEncontrada) {
      setNoticia(noticiaEncontrada);
      setLoading(false);
    } else {
      // Si no se encuentra la noticia, redirigir a la página de novedades
      router.push("/novedades");
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="container mx-auto py-20 px-4 md:px-6 text-center">
        <p className="text-lg">Cargando noticia...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6 flex items-center text-secondary hover:text-primary"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Novedades
        </Button>

        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            {noticia.fecha}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            {noticia.titulo}
          </h1>

          <div className="relative aspect-[16/9] w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={noticia.imagen || "/placeholder.svg"}
              alt={noticia.titulo}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            className="prose prose-lg max-w-none dark:prose-invert mb-8"
            dangerouslySetInnerHTML={{ __html: noticia.contenido }}
          />

          {noticia.imagenes_adicionales &&
            noticia.imagenes_adicionales.length > 0 && (
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-secondary">
                  Galería de imágenes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {noticia.imagenes_adicionales.map(
                    (img: string, index: number) => (
                      <div
                        key={index}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md"
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${noticia.titulo} - Imagen ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

          <div className="mt-10 flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500">
                Compartir esta noticia:
              </h4>
              <div className="flex space-x-4 mt-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Compartir</span>
                </Button>
              </div>
            </div>

            <Button
              variant="outline"
              className="text-secondary hover:text-primary"
              onClick={() => router.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Novedades
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

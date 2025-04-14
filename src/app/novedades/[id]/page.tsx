import NoticiaDetalle from "@/components/novedades/noticia-detalle";
import { getNewsById } from "@/components/novedades/lib/novedades.actions";
import NotFoundPage from "@/components/404";
import Hero from "@/components/Hero";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  try {
    const noticia = await getNewsById(Number(id));

    if (!noticia) {
      // Manejo explícito si no se encuentra la noticia
      return <NotFoundPage />;
    }

    return (
      <>
        <Hero
          description=""
          title=""
          height="h-[400px]"
          src={noticia.image || "/placeholder.svg"}
          gradient={false}
        />
        <NoticiaDetalle noticia={noticia} />
      </>
    );
  } catch (error) {
    // Manejo de errores generales
    return <NotFoundPage />;
  }
}

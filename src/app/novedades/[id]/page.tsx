import NoticiaDetalle from "@/components/novedades/noticia-detalle";
import { getNewsById } from "@/components/novedades/lib/novedades.actions";
import NotFoundPage from "@/components/404";
import Hero from "@/components/Hero";

export default async function Page({ params }: { params: { id: string } }) {
  try {
    const noticia = await getNewsById(Number(params.id));

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

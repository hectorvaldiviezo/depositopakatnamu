import NoticiaDetalle from "@/components/novedades/noticia-detalle";
import { getNewsById } from "@/components/novedades/lib/novedades.actions";
import NotFoundPage from "@/components/404";
import Hero from "@/components/Hero";

export const dynamic = "force-dynamic";
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
          height="h-[400px] w-full justify-center"
          src={noticia.image || "/placeholder.svg"}
          gradient={false}
          noText={true}
          classImg="!h-[400px] !w-auto aspect-[3/1] !relative"
        />
        <NoticiaDetalle noticia={noticia} />
      </>
    );
  } catch (error) {
    // Manejo de errores generales
    return <NotFoundPage />;
  }
}

import { getNews } from "@/components/novedades/lib/novedades.actions";
import Novedades from "@/components/novedades/noticias";

export default async function Page() {
  const noticias = await getNews(1);

  return <Novedades newsData={noticias} />;
}

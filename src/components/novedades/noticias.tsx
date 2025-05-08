"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import TitleComponent from "@/components/title";
import { AnimatedElement } from "@/components/animated-element";
import { NewsResource, NewsResponse } from "./lib/novedades.interface";
import { useEffect, useState } from "react";
import CustomPagination from "../Pagination";
import useNovedadesStore from "./lib/novedades.store";

export interface NovedadesProps {
  newsData: NewsResponse;
}

export default function Novedades({ newsData }: NovedadesProps) {
  const { news: noticiasClient, setData, loadNews, meta } = useNovedadesStore();
  const [displayedNews, setDisplayedNews] = useState<NewsResource[]>(
    newsData.data
  );

  useEffect(() => {
    setData(newsData);
  }, [newsData, setData]);

  useEffect(() => {
    if (noticiasClient.length > 0) {
      setDisplayedNews(noticiasClient);
    }
  }, [noticiasClient]);

  const handlePageChange = async (page: number) => {
    loadNews(page);
  };

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto pt-4 pb-8 px-4 md:px-6">
      <TitleComponent
        title="Novedades"
        description="Manténgase informado sobre las últimas noticias, eventos y novedades de Depósito Pakatnamú."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {displayedNews.map((noticia, index) => (
          <AnimatedElement
            key={noticia.id}
            animation="fade-up"
            delay={index * 100}
            className="group"
          >
            <Link
              href={`/novedades/${noticia.id}`}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full"
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="relative h-60 m-2">
                  <Image
                    src={noticia.image || "/placeholder.svg"}
                    alt={noticia.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <CardContent className="pt-2">
                  <div className="text-sm text-gray-500 mb-2">
                    {noticia.date}
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-secondary line-clamp-1">
                    {noticia.title}
                  </h2>
                  <p className="line-clamp-3">{noticia.description}</p>
                </CardContent>
              </Card>
            </Link>
          </AnimatedElement>
        ))}
      </div>

      {/* Paginación */}
      <CustomPagination meta={meta} onPageChange={handlePageChange} />
    </div>
  );
}

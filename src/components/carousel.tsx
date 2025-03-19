"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CarouselProps {
  slides: {
    image: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel({
  slides,
  autoPlay = true,
  interval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (slideIndex: number) => {
    if (isAnimating || slideIndex === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(slideIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const slideInterval = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
      <div
        className="h-full transition-transform duration-1000 ease-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center justify-center">
              <div className="text-center text-white p-4 max-w-4xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
                  {slide.description}
                </p>
                {slide.buttonText && slide.buttonLink && (
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 animate-fade-in-up animation-delay-600"
                  >
                    <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full w-12 h-12 transition-all duration-300 hover:scale-110"
        onClick={prev}
      >
        <ChevronLeft className="h-8 w-8" />
        <span className="sr-only">Anterior</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full w-12 h-12 transition-all duration-300 hover:scale-110"
        onClick={next}
      >
        <ChevronRight className="h-8 w-8" />
        <span className="sr-only">Siguiente</span>
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-primary scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

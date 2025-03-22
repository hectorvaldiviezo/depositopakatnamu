"use client";
import { InfiniteLogoRow } from "./infinite-logo-row";

// Ejemplo de logos (reemplaza con tus propios logos)
const logos = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

export function MultiRowInfiniteLogoScroll() {
  return (
    <div className="w-full overflow-hidden">
      <InfiniteLogoRow logos={logos} direction="left" duration={50} />
      <InfiniteLogoRow logos={logos} direction="right" duration={60} />
      <InfiniteLogoRow logos={logos} direction="left" duration={70} />
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    { name: "INICIO", path: "/" },
    {
      name: "ACERCA DE NOSOTROS",
      path: "#",
      dropdown: [
        { name: "QUIENES SOMOS", path: "/quienes-somos" },
        { name: "SEGURIDAD SALUD Y TRABAJO", path: "/seguridad-salud-trabajo" },
      ],
    },
    { name: "PRODUCTOS", path: "/productos" },
    { name: "NOVEDADES", path: "/novedades" },
    { name: "CONTÁCTENOS", path: "/contactenos" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto max-w-(--breakpoint-xl) flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Avatar className="rounded-xl">
            <AvatarImage src="/dplogo.svg" alt="tp" />
            <AvatarFallback className="bg-transparent text-secondary">
              DP
            </AvatarFallback>
          </Avatar>
          <div className="text-base sm:text-xl tracking-tight font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent flex flex-col">
            DEPÓSITO PAKATNAMU
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 justify-end items-center">
          {routes.map((route) =>
            route.dropdown ? (
              <DropdownMenu key={route.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="link"
                    className={`text-sm font-medium ${
                      route.dropdown.some((item) => isActive(item.path))
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {route.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {route.dropdown.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        href={item.path}
                        className={isActive(item.path) ? "text-primary" : ""}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={route.name}
                href={route.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(route.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {route.name}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background">
          <div className="relative z-20 grid gap-6 p-4 rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {routes.map((route) =>
                route.dropdown ? (
                  <div key={route.name} className="py-2">
                    <h4 className="font-medium">{route.name}</h4>
                    <div className="grid grid-flow-row auto-rows-max pl-4 text-sm">
                      {route.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          className={`py-2 ${
                            isActive(item.path) ? "text-primary" : ""
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={route.name}
                    href={route.path}
                    className={`py-2 ${
                      isActive(route.path) ? "text-primary" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {route.name}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

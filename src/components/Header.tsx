"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

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
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="max-w-(--breakpoint-xl) mx-auto px-4  flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Avatar className="rounded-xl">
            <AvatarImage src="/dplogo.svg" alt="tp" />
            <AvatarFallback className="bg-transparent text-secondary">
              DP
            </AvatarFallback>
          </Avatar>
          <div className="text-base sm:text-xl tracking-tight font-bold bg-linear-to-r from-primary dark:from-primary to-secondary dark:to-blue-600 bg-clip-text text-transparent flex flex-col">
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
                        ? "text-secondary"
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
                        className={isActive(item.path) ? "text-secondary" : ""}
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
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isActive(route.path) ? "text-secondary" : "text-foreground"
                }`}
              >
                {route.name}
              </Link>
            )
          )}
        </nav>
        <div className="block md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger
              className={
                buttonVariants({ variant: "ghost", size: "icon" }) +
                " text-secondary"
              }
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent className="bg-accent z-50">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center justify-center gap-1 pt-6">
                    <Avatar>
                      <AvatarImage src="/dplogo.svg" alt="tp" />
                      <AvatarFallback>DP</AvatarFallback>
                    </Avatar>
                    <div className="text-base font-roboto font-bold flex flex-col bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
                      DEPÓSITO PAKATNAMU
                    </div>
                  </div>
                </SheetTitle>
                <SheetDescription></SheetDescription>
                <nav className="grid place-items-start gap-2">
                  {routes.map((route) =>
                    route.dropdown ? (
                      <div key={route.name} className="py-2">
                        <h4 className="font-semibold text-start">
                          {route.name}
                        </h4>
                        <div className="grid grid-flow-row auto-rows-max pl-4 text-sm place-items-start">
                          {route.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.path}
                              className={`py-1 font-medium ${
                                isActive(item.path) ? "text-secondary" : ""
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
                        className={`py-1 font-medium ${
                          isActive(route.path) ? "text-secondary" : ""
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {route.name}
                      </Link>
                    )
                  )}
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

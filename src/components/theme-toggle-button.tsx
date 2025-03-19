"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      className="flex items-center gap-2 transition-all duration-300 hover:bg-primary hover:text-white"
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-4 w-4" />
          <span>Modo Claro</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" />
          <span>Modo Oscuro</span>
        </>
      )}
    </Button>
  )
}


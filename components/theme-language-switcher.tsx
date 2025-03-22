"use client"

import { useTheme } from "next-themes"
import { usePathname, useRouter } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeLanguageSwitcher() {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleLanguage = () => {
    const currentLang = pathname.startsWith("/en") ? "zh" : "en"
    const newPath = currentLang === "en" 
      ? `/en${pathname.replace("/en", "")}`
      : pathname.replace("/en", "")
    router.push(newPath)
  }

  return (
    <div className="fixed top-4 right-4 flex gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full"
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleLanguage}
        className="rounded-full"
      >
        <span className="text-lg font-bold">文/A</span>
      </Button>
    </div>
  )
} 
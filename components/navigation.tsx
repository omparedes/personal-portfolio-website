"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download, Globe, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#certifications", label: t("nav.certifications") },
    { href: "#contact", label: t("nav.contact") },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
        >
          OP<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center h-8 w-8 text-muted-foreground hover:text-primary transition-colors rounded-md border border-border hover:border-primary/50 hover:bg-primary/5"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md border border-border hover:border-primary/50 hover:bg-primary/5"
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className="font-mono text-xs uppercase">{language}</span>
          </button>

          <Button size="sm" className="ml-2 gap-2">
            <Download className="h-4 w-4" />
            {t("nav.downloadCv")}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center h-8 w-8 text-muted-foreground hover:text-primary transition-colors rounded-md border border-border"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Mobile Language Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md border border-border"
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className="font-mono text-xs uppercase">{language}</span>
          </button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="w-fit gap-2">
              <Download className="h-4 w-4" />
              {t("nav.downloadCv")}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

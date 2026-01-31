"use client"

import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:contact@example.com", icon: Mail, label: "Email" },
]

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              Resume
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            {t("footer.built")}
          </p>

          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

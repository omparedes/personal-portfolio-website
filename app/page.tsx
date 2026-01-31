"use client"

import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/lib/theme-context"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { LanguagesSection } from "@/components/languages-section"
import { ToolsSection } from "@/components/tools-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <main className="min-h-screen bg-background text-foreground">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <LanguagesSection />
          <ToolsSection />
          <CertificationsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </main>
      </LanguageProvider>
    </ThemeProvider>
  )
}

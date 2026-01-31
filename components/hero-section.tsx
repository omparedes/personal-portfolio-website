"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  const stats = [
    { value: "~2", label: t("hero.stats.experience") },
    { value: "4", label: t("hero.stats.projects") },
  ]

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Accent Gradient */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider">
                {t("hero.greeting")}
              </p>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                {t("hero.name")}
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                {t("hero.role")}{" "}
                <span className="text-primary mx-2">{t("hero.separator")}</span>{" "}
                {t("hero.specialization")}
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#projects">
                  {t("hero.cta.projects")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <a href="#contact">{t("hero.cta.contact")}</a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Photo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border">
                <Image
                  src="/profile-photo.jpg"
                  alt="Oscar Paredes Morales - Software Engineer & Data Scientist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Accent Border */}
              <div className="absolute -inset-1 rounded-2xl border border-primary/20 -z-10" />
              <div className="absolute -inset-2 rounded-2xl border border-primary/10 -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

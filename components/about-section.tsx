"use client"

import { Layers, GitBranch, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Layers,
      title: t("about.highlight1.title"),
      description: t("about.highlight1.desc"),
    },
    {
      icon: GitBranch,
      title: t("about.highlight2.title"),
      description: t("about.highlight2.desc"),
    },
    {
      icon: Users,
      title: t("about.highlight3.title"),
      description: t("about.highlight3.desc"),
    },
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
            {t("about.label")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              {t("about.title")}
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2 space-y-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group p-5 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

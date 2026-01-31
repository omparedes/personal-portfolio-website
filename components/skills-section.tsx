"use client"

import { Code, Server, Brain, Boxes } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const skillData = {
  frontend: [
    { name: "TypeScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Angular", level: 85 },
    { name: "Next.js", level: 75 },
    { name: "CSS/Tailwind", level: 85 },
  ],
  backend: [
    { name: "Python", level: 85 },
    { name: "Java", level: 75 },
    { name: "Node.js", level: 80 },
    { name: "REST/GraphQL", level: 80 },
    { name: "PostgreSQL", level: 75 },
  ],
  dataAi: [
    { name: "Data Analysis", level: 80 },
    { name: "Machine Learning", level: 70 },
    { name: "TensorFlow", level: 65 },
    { name: "Pandas/NumPy", level: 80 },
  ],
  engineering: [
    { name: "System Design", level: 60 },
    { name: "CI/CD", level: 70 },
    { name: "Docker/K8s", level: 65 },
    { name: "AWS/GCP", level: 60 },
  ],
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-foreground w-28 shrink-0">{name}</span>
      <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
      <span className="text-xs text-muted-foreground font-mono w-8">{level}%</span>
    </div>
  )
}

export function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories = [
    { icon: Code, titleKey: "skills.frontend", skills: skillData.frontend },
    { icon: Server, titleKey: "skills.backend", skills: skillData.backend },
    { icon: Brain, titleKey: "skills.dataAi", skills: skillData.dataAi },
    { icon: Boxes, titleKey: "skills.engineering", skills: skillData.engineering },
  ]

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
            {t("skills.label")}
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          {t("skills.title")}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.titleKey}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <category.icon className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-foreground">{t(category.titleKey)}</h4>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

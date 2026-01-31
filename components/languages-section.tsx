const languages = [
  {
    name: "TypeScript/JS",
    level: "Expert",
    icon: "TS",
    color: "bg-primary/10 text-primary border-primary/30",
  },
  {
    name: "Python",
    level: "Advanced",
    icon: "PY",
    color: "bg-primary/10 text-primary border-primary/30",
  },
  {
    name: "Java",
    level: "Proficient",
    icon: "JV",
    color: "bg-secondary text-foreground border-border",
  },
  {
    name: "SQL",
    level: "Proficient",
    icon: "SQL",
    color: "bg-secondary text-foreground border-border",
  },
  {
    name: "PHP",
    level: "Proficient",
    icon: "PHP",
    color: "bg-secondary text-foreground border-border",
  },
]

export function LanguagesSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
            Languages
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${lang.color} transition-all hover:border-primary/50`}
            >
              <span className="font-mono font-bold text-sm">{lang.icon}</span>
              <div>
                <p className="font-medium text-foreground text-sm">{lang.name}</p>
                <p className="text-xs text-muted-foreground">{lang.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

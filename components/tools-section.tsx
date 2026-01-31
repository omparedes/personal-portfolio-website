import { GitBranch, Container, Database, Cloud, Terminal, Figma, Layers, TestTube } from "lucide-react"

const tools = [
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Container },
  { name: "PostgreSQL", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "VS Code", icon: Terminal },
  { name: "Figma", icon: Figma },
  { name: "CI/CD", icon: Layers },
  { name: "Jest", icon: TestTube },
]

export function ToolsSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
            Tools
          </h2>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-all"
            >
              <tool.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

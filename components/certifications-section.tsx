"use client"

import { Award, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const certifications = [
  {
    title: "Programming for Everybody (Getting Started with Python)",
    platform: "Coursera",
    link: "https://coursera.org/share/46604c8093becb836e548c8e4cd2cbf7",
  },
  {
    title: "Python Data Structures",
    platform: "Coursera",
    link: "https://coursera.org/share/0ab3741041811e1d06daaaa82f824ed8",
  },
  {
    title: "Using Python to Access Web Data",
    platform: "Coursera",
    link: "https://coursera.org/share/c9a746c5a2748788e83e663d311c4a4c",
  },
  {
    title: "Using Databases with Python",
    platform: "Coursera",
    link: "https://coursera.org/share/25c4165f588913c57a35e055395e6817",
  },
  {
    title: "SQL for Data Science",
    platform: "Coursera",
    link: "https://coursera.org/share/23e9df85c1b988575888777366c97890",
  },
  {
    title: "SQL Problem Solving",
    platform: "Coursera",
    link: "https://coursera.org/share/45b8760dbf713da85bd7e035063f3ff3",
  },
  {
    title: "SQL for Data Science – Capstone Project",
    platform: "Coursera",
    link: "https://coursera.org/share/0f26a2e956292c9817fcf319f60b7f66",
  },
  {
    title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    platform: "Coursera",
    link: "https://coursera.org/share/2d583fb2a940784a10b009ac5e44949e",
  },
  {
    title: "Distributed Computing with Spark SQL",
    platform: "Coursera",
    link: "https://coursera.org/share/1a492d9cc2fe2ceb85598f9c5797633b",
  },
  {
    title: "Fundamentals of Network Communication",
    platform: "Coursera",
    link: "https://coursera.org/share/5d0f3aaf13b23780ce00d37e2efc0c69",
  },
]

export function CertificationsSection() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
            {t("certifications.label")}
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          {t("certifications.title")}
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group p-5 rounded-lg bg-card border border-border hover:border-primary/40 transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary font-mono font-bold text-xs">
                    COURSERA
                  </div>
                </div>

                <h4 className="font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Award className="h-3 w-3" />
                  <span>{t("certifications.platform")}: {cert.platform}</span>
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-1 text-xs text-primary font-medium hover:underline"
              >
                {t("certifications.verify")} <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

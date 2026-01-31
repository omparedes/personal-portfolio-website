"use client"

import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function ProjectsSection() {
  const { t, language } = useLanguage()

  const projects = [
    {
      title: {
        en: "Payment Control System – Primero de Mayo Market",
        es: "Sistema de Control de Pagos – Mercado Primero de Mayo",
      },
      description: {
        en: "Web-based system developed to manage and monitor service payments in a cooperative market. Includes user management, payment records, period-based control, reporting, and payment status visualization. Built with Angular frontend, Python backend, MySQL database, and Dockerized services.",
        es: "Sistema web desarrollado para el control de pagos de servicios en un mercado cooperativo. Incluye gestión de usuarios, registro de pagos, control por periodos, reportes y visualización del estado de pagos. Frontend en Angular, backend en Python, base de datos MySQL y servicios dockerizados.",
      },
      tags: {
        en: ["Angular", "Python", "MySQL", "Docker", "Web App"],
        es: ["Angular", "Python", "MySQL", "Docker", "Aplicación Web"],
      },
      impact: null,
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: {
        en: "Smart Parking System with Computer Vision",
        es: "Sistema de Parqueo Inteligente con Visión Computacional",
      },
      description: {
        en: "Research and development project using computer vision to automatically detect vehicles and available parking spaces. Implements YOLO v11 models for real-time detection using surveillance cameras, integrated with a digital control system to reduce errors and financial losses.",
        es: "Proyecto de investigación y desarrollo que utiliza visión computacional para la detección automática de vehículos y espacios libres. Implementa modelos YOLO (v11) para detección en tiempo real a partir de cámaras de vigilancia, integrando un sistema digital de control para reducir errores y pérdidas económicas.",
      },
      tags: {
        en: ["Computer Vision", "YOLO", "Python", "AI", "Machine Learning"],
        es: ["Visión Computacional", "YOLO", "Python", "IA", "Machine Learning"],
      },
      impact: null,
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: {
        en: "Sales & Customer Automation – Baila Perú Baila (n8n)",
        es: "Automatización de Ventas y Atención – Baila Perú Baila (n8n)",
      },
      description: {
        en: "Automation of customer service and sales workflows using n8n and WhatsApp integration. Includes lead qualification, AI-assisted responses, automated follow-ups, and human-like conversational sales logic.",
        es: "Automatización de flujos de atención y ventas usando n8n e integración con WhatsApp. Incluye calificación de leads, respuestas inteligentes con IA, seguimiento automatizado y lógica conversacional orientada a ventas humanas.",
      },
      tags: {
        en: ["n8n", "Automation", "WhatsApp API", "AI Agents", "Workflows"],
        es: ["n8n", "Automatización", "WhatsApp API", "Agentes IA", "Flujos de Trabajo"],
      },
      impact: null,
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: {
        en: "End-to-End Data Engineering & Machine Learning Pipeline",
        es: "Pipeline Completo de Data Engineering + Machine Learning",
      },
      description: {
        en: "Complete pipeline covering data ingestion, cleaning, transformation, feature engineering, model training, evaluation, and deployment for inference via API. Designed with a production-oriented approach, separating training and inference, model versioning, and monitoring.",
        es: "Pipeline completo que cubre ingesta de datos, limpieza, transformación, feature engineering, entrenamiento de modelos, evaluación y despliegue para inferencia mediante API. Diseñado con enfoque productivo, separación entre entrenamiento e inferencia, versionado de modelos y monitoreo.",
      },
      tags: {
        en: ["Data Engineering", "Machine Learning", "Python", "FastAPI", "MLOps"],
        es: ["Ingeniería de Datos", "Machine Learning", "Python", "FastAPI", "MLOps"],
      },
      impact: null,
      github: null,
      demo: null,
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
            {t("projects.label")}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">
              {t("projects.title")}
            </h3>
            <p className="text-muted-foreground">{t("projects.subtitle")}</p>
          </div>
          <Button variant="outline" className="w-fit bg-transparent" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              {t("projects.viewMore")}
              <ArrowUpRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Featured Projects - Displaying All 4 */}
        <div className="space-y-6 mb-16">
          {projects.map((project) => (
            <div
              key={project.title[language]}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {t("projects.featured")}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title[language]}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description[language]}
                  </p>
                  {project.impact && (
                    <p className="text-sm">
                      <span className="text-primary font-medium">{t("projects.impact")}:</span>{" "}
                      <span className="text-foreground">{project.impact}</span>
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags[language].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary/50"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary/50"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

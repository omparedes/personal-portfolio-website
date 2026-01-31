"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "nav.downloadCv": "Download CV",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.name": "Oscar Paredes Morales",
    "hero.role": "Junior Software Engineer & Data Scientist",
    "hero.separator": "|",
    "hero.specialization": "Full Stack & Applied AI",
    "hero.description": "Junior Software Engineer with a strong focus on Data Science, Machine Learning, and applied AI systems. I build real-world solutions combining robust software engineering with data-driven intelligence.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Get in Touch",
    "hero.stats.experience": "Years Experience",
    "hero.stats.projects": "Projects Delivered",
    "hero.stats.uptime": "System Uptime",

    // About
    "about.label": "About Me",
    "about.title": " bridging Software Engineering and Data Science",
    "about.p1": "I am a Junior Software Engineer with a strong focus on Data Science, Machine Learning, and applied AI systems.",
    "about.p2": "I work across frontend, backend, data engineering, and ML pipelines, with experience building real-world systems such as payment control platforms, computer vision solutions, workflow automation, and end-to-end data pipelines.",
    "about.p3": "My background combines software development (Angular, Python, Java, SQL), data analysis, and applied machine learning, with an emphasis on practical, production-oriented solutions.",
    "about.highlight1.title": "Full Stack Engineering",
    "about.highlight1.desc": "Building end-to-end applications with modern frontend frameworks (Angular) and robust backends (Python, Java).",
    "about.highlight2.title": "Data Science & ML",
    "about.highlight2.desc": "Developing applied AI solutions, computer vision models, and data processing pipelines.",
    "about.highlight3.title": "Automation & Integration",
    "about.highlight3.desc": "Creating efficient workflows and integrating systems using tools like n8n and AI agents.",

    // Skills
    "skills.label": "Technical Expertise",
    "skills.title": "Core competencies",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.dataAi": "Data & AI",
    "skills.engineering": "Engineering",

    // Projects
    "projects.label": "Projects",
    "projects.title": "Selected Work",
    "projects.subtitle": "Real-world solutions in Software, Data, and AI.",
    "projects.featured": "Featured",
    "projects.impact": "Impact",
    "projects.viewMore": "View All on GitHub",
    "projects.other": "Other Projects",

    // Certifications
    "certifications.label": "Certifications",
    "certifications.title": "Credentials & Certifications",
    "certifications.verify": "View Credential",
    "certifications.platform": "Platform",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Let's build something",
    "contact.subtitle": "Open to junior roles in software engineering and data science.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.info.email": "Email",
    "contact.info.location": "Location",
    "contact.info.availability": "Availability",
    "contact.info.availabilityValue": "Open to opportunities",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Next.js & Tailwind CSS",
  },
  es: {
    // Navigation
    "nav.about": "Sobre Mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.certifications": "Certificaciones",
    "nav.contact": "Contacto",
    "nav.downloadCv": "Descargar CV",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.name": "Oscar Paredes Morales",
    "hero.role": "Ingeniero de Software Junior y Científico de Datos",
    "hero.separator": "|",
    "hero.specialization": "Full Stack e IA Aplicada",
    "hero.description": "Ingeniero de Software Junior con un fuerte enfoque en Ciencia de Datos, Aprendizaje Automático y sistemas de IA aplicada. Construyo soluciones del mundo real combinando ingeniería de software robusta con inteligencia basada en datos.",
    "hero.cta.projects": "Ver Proyectos",
    "hero.cta.contact": "Contactar",
    "hero.stats.experience": "Años de Experiencia",
    "hero.stats.projects": "Proyectos Realizados",
    "hero.stats.uptime": "Tiempo de Actividad",

    // About
    "about.label": "Sobre Mí",
    "about.title": "Uniendo Ingeniería de Software y Ciencia de Datos",
    "about.p1": "Soy un Ingeniero de Software Junior con un fuerte enfoque en Ciencia de Datos, Aprendizaje Automático y sistemas de IA aplicada.",
    "about.p2": "Trabajo en frontend, backend, ingeniería de datos y pipelines de ML, con experiencia construyendo sistemas del mundo real como plataformas de control de pagos, soluciones de visión computacional, automatización de flujos de trabajo y pipelines de datos de extremo a extremo.",
    "about.p3": "Mi perfil combina el desarrollo de software (Angular, Python, Java, SQL), análisis de datos y aprendizaje automático aplicado, con énfasis en soluciones prácticas orientadas a producción.",
    "about.highlight1.title": "Ingeniería Full Stack",
    "about.highlight1.desc": "Desarrollo de aplicaciones completas con frameworks frontend modernos (Angular) y backends robustos (Python, Java).",
    "about.highlight2.title": "Ciencia de Datos y ML",
    "about.highlight2.desc": "Desarrollo de soluciones de IA aplicada, modelos de visión computacional y pipelines de procesamiento de datos.",
    "about.highlight3.title": "Automatización e Integración",
    "about.highlight3.desc": "Creación de flujos de trabajo eficientes e integración de sistemas usando herramientas como n8n y agentes de IA.",

    // Skills
    "skills.label": "Experiencia Técnica",
    "skills.title": "Competencias principales",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.dataAi": "Datos e IA",
    "skills.engineering": "Ingeniería",

    // Projects
    "projects.label": "Proyectos",
    "projects.title": "Trabajo Seleccionado",
    "projects.subtitle": "Soluciones del mundo real en Software, Datos e IA.",
    "projects.featured": "Destacado",
    "projects.impact": "Impacto",
    "projects.viewMore": "Ver Todo en GitHub",
    "projects.other": "Otros Proyectos",

    // Certifications
    "certifications.label": "Certificaciones",
    "certifications.title": "Credenciales y Certificaciones",
    "certifications.verify": "Ver Credencial",
    "certifications.platform": "Plataforma",

    // Contact
    "contact.label": "Contacto",
    "contact.title": "Construyamos algo juntos",
    "contact.subtitle": "Disponible para roles junior en ingeniería de software y ciencia de datos.",
    "contact.form.name": "Nombre",
    "contact.form.email": "Correo",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar Mensaje",
    "contact.form.sending": "Enviando...",
    "contact.info.email": "Correo",
    "contact.info.location": "Ubicación",
    "contact.info.availability": "Disponibilidad",
    "contact.info.availabilityValue": "Abierto a oportunidades",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.built": "Construido con Next.js & Tailwind CSS",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = useCallback(
    (key: string) => {
      return translations[language][key] || key
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

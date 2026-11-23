// Generated from the approved bilingual catalog. Edit the editorial source and regenerate.
import type { PublicProjection } from "./projection-types.ts"

export const projection = {
  "facts": [
    {
      "id": "profile.oscar-paredes",
      "data": {
        "kind": "profile",
        "name": "Oscar Martin Paredes Morales"
      }
    },
    {
      "id": "objective.software-development",
      "data": {
        "kind": "objective",
        "profileId": "profile.oscar-paredes"
      },
      "text": {
        "es": "Desarrollador Full-Stack y Backend",
        "en": "Full-Stack and Backend Developer"
      }
    },
    {
      "id": "experience.project-areas",
      "data": {
        "kind": "experience-overview",
        "profileId": "profile.oscar-paredes",
        "basis": "owner-statement"
      },
      "text": {
        "es": "Desarrollo aplicaciones empresariales a partir del análisis de requerimientos. Trabajo con Angular, TypeScript, PostgreSQL y Supabase en lógica de negocio y operaciones transaccionales.",
        "en": "I build business applications from requirements and use Angular, TypeScript, PostgreSQL, and Supabase to implement business logic and transactional workflows."
      }
    },
    {
      "id": "experience.professional-background",
      "data": {
        "kind": "experience-overview",
        "profileId": "profile.oscar-paredes",
        "basis": "owner-statement"
      },
      "text": {
        "es": "Mi trayectoria en gestión comercial y operaciones desde 2011 me ayuda a entender los procesos que los sistemas empresariales deben resolver. Curso los últimos ciclos de Ingeniería de Sistemas en la UPC y me interesa aplicar la inteligencia artificial y la visión computacional.",
        "en": "My background in business operations and customer management since 2011 helps me understand the workflows that business software needs to support. I am in the final semesters of Systems Engineering at UPC and am interested in applied AI and computer vision."
      }
    },
    {
      "id": "institution.upc",
      "data": {
        "kind": "institution",
        "name": "Universidad Peruana de Ciencias Aplicadas",
        "acronym": "UPC"
      }
    },
    {
      "id": "education.systems-engineering",
      "data": {
        "kind": "education",
        "profileId": "profile.oscar-paredes",
        "institutionId": "institution.upc",
        "status": "student"
      },
      "text": {
        "es": "Ingeniería de Sistemas",
        "en": "Systems Engineering"
      }
    },
    {
      "id": "education-modality.upc-epe",
      "data": {
        "kind": "education-modality",
        "educationId": "education.systems-engineering",
        "modality": "EPE",
        "basis": "owner-statement"
      }
    },
    {
      "id": "academic-stage.final-cycles",
      "data": {
        "kind": "academic-stage",
        "educationId": "education.systems-engineering"
      },
      "text": {
        "es": "Últimos ciclos de la carrera",
        "en": "Final semesters of the degree program"
      }
    },
    {
      "id": "technology.angular",
      "data": {
        "kind": "technology",
        "name": "Angular"
      }
    },
    {
      "id": "technology.typescript",
      "data": {
        "kind": "technology",
        "name": "TypeScript"
      }
    },
    {
      "id": "technology.supabase",
      "data": {
        "kind": "technology",
        "name": "Supabase"
      }
    },
    {
      "id": "technology.postgresql",
      "data": {
        "kind": "technology",
        "name": "PostgreSQL"
      }
    },
    {
      "id": "technology.cloudflare-pages",
      "data": {
        "kind": "technology",
        "name": "Cloudflare Pages"
      }
    },
    {
      "id": "technology.yolo",
      "data": {
        "kind": "technology",
        "name": "YOLO"
      }
    },
    {
      "id": "project.sigcoop",
      "data": {
        "kind": "project",
        "name": "SIGCOOP / SistemaCooperativa",
        "classification": "professional",
        "repository": "https://github.com/omparedes/SistemaCooperativa"
      }
    },
    {
      "id": "environment.sigcoop-production",
      "data": {
        "kind": "environment",
        "projectId": "project.sigcoop",
        "deployment": {
          "kind": "production",
          "basis": "documentation"
        }
      }
    },
    {
      "id": "environment.sigcoop-demo",
      "data": {
        "kind": "environment",
        "projectId": "project.sigcoop",
        "deployment": {
          "kind": "public-demo",
          "data": "synthetic",
          "url": "https://sigcoop-demo.pages.dev/"
        }
      }
    },
    {
      "id": "participation.sigcoop",
      "data": {
        "kind": "participation",
        "profileId": "profile.oscar-paredes",
        "projectId": "project.sigcoop"
      },
      "text": {
        "es": "El proyecto atribuye a Oscar el levantamiento de requisitos, el análisis funcional y el diseño del esquema relacional.",
        "en": "The project credits Oscar with requirements discovery, functional analysis, and relational schema design."
      }
    },
    {
      "id": "detail.sigcoop-purpose",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "summary",
        "basis": "documentation"
      },
      "text": {
        "es": "ERP para la gestión administrativa y financiera de un mercado cooperativo.",
        "en": "ERP for the administrative and financial management of a cooperative market."
      }
    },
    {
      "id": "detail.sigcoop-payments",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "feature",
        "basis": "documentation"
      },
      "text": {
        "es": "La documentación describe flujos de caja y registro de pagos.",
        "en": "The documentation describes cashier workflows and payment recording."
      }
    },
    {
      "id": "detail.sigcoop-reconciliation",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "feature",
        "basis": "documentation"
      },
      "text": {
        "es": "El reporte contable concilia ingresos por período, según la documentación de arquitectura.",
        "en": "The accounting report reconciles income by period, as described in the architecture documentation."
      }
    },
    {
      "id": "detail.sigcoop-financial-transactions",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "decision",
        "basis": "documentation"
      },
      "text": {
        "es": "La arquitectura sitúa las escrituras financieras de varios pasos en funciones transaccionales de PostgreSQL.",
        "en": "The architecture places multi-step financial writes in transactional PostgreSQL functions."
      }
    },
    {
      "id": "use.sigcoop-angular",
      "data": {
        "kind": "technology-use",
        "projectId": "project.sigcoop",
        "technologyId": "technology.angular",
        "version": "22",
        "basis": "code"
      }
    },
    {
      "id": "use.sigcoop-typescript",
      "data": {
        "kind": "technology-use",
        "projectId": "project.sigcoop",
        "technologyId": "technology.typescript",
        "version": "6.0",
        "basis": "code"
      }
    },
    {
      "id": "use.sigcoop-supabase",
      "data": {
        "kind": "technology-use",
        "projectId": "project.sigcoop",
        "technologyId": "technology.supabase",
        "basis": "code"
      }
    },
    {
      "id": "use.sigcoop-postgresql",
      "data": {
        "kind": "technology-use",
        "projectId": "project.sigcoop",
        "technologyId": "technology.postgresql",
        "basis": "documentation"
      }
    },
    {
      "id": "use.sigcoop-cloudflare",
      "data": {
        "kind": "technology-use",
        "projectId": "project.sigcoop",
        "technologyId": "technology.cloudflare-pages",
        "basis": "documentation"
      }
    },
    {
      "id": "detail.sigcoop-operational-context",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "context",
        "basis": "documentation"
      },
      "text": {
        "es": "La administración de un mercado cooperativo necesita relacionar locales, titulares y cargos con cobranzas diarias y revisiones contables. SIGCOOP reúne esas tareas en un ERP para administración y caja.",
        "en": "Running a cooperative market means connecting premises, account holders, and charges to daily collections and accounting reviews. SIGCOOP brings these tasks together in an ERP for administration and cashiers."
      }
    },
    {
      "id": "detail.sigcoop-implementation-scope",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "participation",
        "basis": "documentation"
      },
      "text": {
        "es": "El README atribuye además al autor la arquitectura del frontend, la implementación, las pruebas y la puesta en producción.",
        "en": "The README also credits the author with frontend architecture, implementation, testing, and production deployment."
      }
    },
    {
      "id": "detail.sigcoop-system-flow",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "architecture",
        "basis": "documentation",
        "flow": [
          {
            "es": "Cloudflare Pages · alojamiento",
            "en": "Cloudflare Pages · hosting"
          },
          {
            "es": "Angular + TypeScript · interfaz",
            "en": "Angular + TypeScript · interface"
          },
          {
            "es": "Supabase · API y RPC",
            "en": "Supabase · API and RPC"
          },
          {
            "es": "PostgreSQL · transacciones y RLS",
            "en": "PostgreSQL · transactions and RLS"
          }
        ]
      },
      "text": {
        "es": "Cloudflare Pages aloja la aplicación Angular escrita en TypeScript. El cliente usa la API de Supabase y las funciones RPC. PostgreSQL aplica políticas de acceso a filas (RLS) y las funciones financieras comprueban el rol antes de escribir.",
        "en": "Cloudflare Pages hosts the Angular application written in TypeScript. The client uses the Supabase API and RPC functions. PostgreSQL enforces row-level security (RLS), and financial functions check the caller’s role before writing."
      }
    },
    {
      "id": "detail.sigcoop-directory-ledgers",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "feature",
        "basis": "documentation"
      },
      "text": {
        "es": "El padrón distingue puestos comerciales y almacenes, y registra su ocupación. La cuenta corriente consolida cargos personales y cargos de espacios vigentes para consultar la deuda del pagador.",
        "en": "The directory distinguishes market stalls from storage units and records their occupancy. The account ledger combines personal charges with charges for currently occupied premises to show the payer’s debt."
      }
    },
    {
      "id": "detail.sigcoop-accounting-inflows",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "decision",
        "basis": "documentation"
      },
      "text": {
        "es": "El reporte contable separa el dinero nuevo de caja y banco del saldo a favor aplicado. La separación permite conciliar comprobantes por período sin contar el crédito reutilizado como ingreso nuevo (ADR-03).",
        "en": "The accounting report separates new cash and bank inflows from applied account credit. This lets receipts be reconciled by period without counting reused credit as new income (ADR-03)."
      }
    },
    {
      "id": "detail.sigcoop-audit-trail",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "decision",
        "basis": "documentation"
      },
      "text": {
        "es": "Las anulaciones financieras registran el motivo y aplican una reversa atómica. La bitácora de solo adición conserva cambios y permite reconstruir quién actuó y qué cambió (ADR-05 y ADR-06).",
        "en": "Financial voids record the reason and apply an atomic reversal. The append-only audit log preserves changes so reviewers can reconstruct who acted and what changed (ADR-05 and ADR-06)."
      }
    },
    {
      "id": "detail.sigcoop-report-row-limit",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "challenge",
        "basis": "documentation"
      },
      "text": {
        "es": "La arquitectura documenta que sumar filas en el navegador podía dejar incompletos los totales anuales por los límites de respuesta de PostgREST. La agregación pasó a funciones de PostgreSQL que devuelven resultados consolidados (ADR-03).",
        "en": "The architecture documents how summing rows in the browser could leave yearly totals incomplete because of PostgREST response limits. Aggregation moved to PostgreSQL functions that return consolidated results (ADR-03)."
      }
    },
    {
      "id": "detail.sigcoop-accounting-tests",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "quality",
        "basis": "code"
      },
      "text": {
        "es": "La suite del reporte contable comprueba la clasificación documental, la estructura del Excel, la prevención de totales duplicados en su hoja de detalle y las restricciones del exportador por rol. La evidencia corresponde a pruebas versionadas del módulo.",
        "en": "The accounting report suite checks document classification, workbook structure, prevention of duplicate totals in the detail sheet, and role-based export restrictions. The evidence comes from versioned module tests."
      }
    },
    {
      "id": "detail.sigcoop-demo-results",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "result",
        "basis": "documentation"
      },
      "text": {
        "es": "La demo pública permite recorrer el dashboard, el registro de pagos y el reporte contable con datos sintéticos. La puesta en producción está documentada por el autor del repositorio.",
        "en": "The public demo lets visitors explore the dashboard, payment recording, and accounting report with synthetic data. Production deployment is documented by the repository author."
      }
    },
    {
      "id": "detail.sigcoop-review-scope",
      "data": {
        "kind": "project-detail",
        "projectId": "project.sigcoop",
        "area": "limitation",
        "basis": "documentation"
      },
      "text": {
        "es": "La revisión se limita a fuentes públicas y a la demo. Quedan por corroborar las métricas operativas y el estado de las migraciones en la instancia de producción. Las pruebas del ERP se revisaron a nivel de código fuente.",
        "en": "The review covers public sources and the demo. Operational metrics and migration status in production remain unverified. The ERP tests were reviewed at the source-code level."
      }
    },
    {
      "id": "project.smartparking",
      "data": {
        "kind": "project",
        "name": "SmartParking / ParkFlow",
        "classification": "research",
        "repository": "https://github.com/omparedes/ParkingApp2"
      }
    },
    {
      "id": "detail.smartparking-purpose",
      "data": {
        "kind": "project-detail",
        "projectId": "project.smartparking",
        "area": "summary",
        "basis": "documentation"
      },
      "text": {
        "es": "Proyecto de tesis sobre detección de vehículos y ocupación de espacios de estacionamiento mediante visión computacional.",
        "en": "Thesis project on vehicle detection and parking-space occupancy using computer vision."
      }
    },
    {
      "id": "detail.smartparking-records",
      "data": {
        "kind": "project-detail",
        "projectId": "project.smartparking",
        "area": "feature",
        "basis": "code"
      },
      "text": {
        "es": "El repositorio implementa el registro de ingresos y salidas mediante funciones de Supabase.",
        "en": "The repository implements vehicle entry and exit recording using Supabase functions."
      }
    },
    {
      "id": "detail.smartparking-alerts",
      "data": {
        "kind": "project-detail",
        "projectId": "project.smartparking",
        "area": "feature",
        "basis": "code"
      },
      "text": {
        "es": "El frontend incluye un servicio de alertas.",
        "en": "The frontend includes an alerts service."
      }
    },
    {
      "id": "detail.smartparking-integration",
      "data": {
        "kind": "project-detail",
        "projectId": "project.smartparking",
        "area": "decision",
        "basis": "documentation"
      },
      "text": {
        "es": "El contrato de integración describe cómo un detector externo comunica cambios de ocupación mediante funciones de Supabase.",
        "en": "The integration contract describes how an external detector reports occupancy changes through Supabase functions."
      }
    },
    {
      "id": "use.smartparking-angular",
      "data": {
        "kind": "technology-use",
        "projectId": "project.smartparking",
        "technologyId": "technology.angular",
        "version": "19",
        "basis": "code"
      }
    },
    {
      "id": "use.smartparking-supabase",
      "data": {
        "kind": "technology-use",
        "projectId": "project.smartparking",
        "technologyId": "technology.supabase",
        "basis": "code"
      }
    },
    {
      "id": "use.smartparking-yolo-documented",
      "data": {
        "kind": "technology-use",
        "projectId": "project.smartparking",
        "technologyId": "technology.yolo",
        "version": "26",
        "basis": "documentation"
      }
    },
    {
      "id": "detail.smartparking-research-objective",
      "data": {
        "kind": "project-detail",
        "projectId": "project.smartparking",
        "area": "context",
        "basis": "documentation"
      },
      "text": {
        "es": "La tesis explora cómo usar cambios de ocupación detectados por visión computacional para mantener actualizados el mapa de plazas y los registros de ingreso y salida que consulta el operador.",
        "en": "The thesis explores how computer-vision occupancy changes can keep the parking map and the operator’s entry and exit records up to date."
      }
    },
    {
      "id": "detail.smartparking-system-flow",
      "data": {
        "kind": "project-detail",
        "projectId": "project.smartparking",
        "area": "architecture",
        "basis": "documentation",
        "flow": [
          {
            "es": "Detector externo · documentado",
            "en": "External detector · documented"
          },
          {
            "es": "Supabase · RPC y ocupación",
            "en": "Supabase · RPC and occupancy"
          },
          {
            "es": "Realtime · cambios de estado",
            "en": "Realtime · state changes"
          },
          {
            "es": "Angular · vista del operador",
            "en": "Angular · operator view"
          }
        ]
      },
      "text": {
        "es": "El contrato describe un detector externo que comunica ingresos y salidas a funciones de Supabase. Los cambios de estado de las plazas llegan a la aplicación Angular mediante Supabase Realtime. El flujo del detector representa el contrato documentado.",
        "en": "The contract describes an external detector reporting entries and exits to Supabase functions. Parking-space updates reach the Angular application through Supabase Realtime. The detector path represents the documented contract."
      }
    },
    {
      "id": "detail.smartparking-realtime-occupancy",
      "data": {
        "kind": "project-detail",
        "projectId": "project.smartparking",
        "area": "feature",
        "basis": "code"
      },
      "text": {
        "es": "El servicio de ocupación carga el estado inicial de las plazas y se suscribe a cambios mediante Realtime. El servicio de alertas recibe inserciones nuevas por separado.",
        "en": "The occupancy service loads the initial state of parking spaces and subscribes to changes through Realtime. A separate alerts service receives new alert inserts."
      }
    },
    {
      "id": "detail.smartparking-research-scope",
      "data": {
        "kind": "project-detail",
        "projectId": "project.smartparking",
        "area": "limitation",
        "basis": "documentation"
      },
      "text": {
        "es": "La guía de tesis identifica YOLOv26. Esta revisión pudo comprobar servicios de Angular y su contrato con Supabase. La versión ejecutada del detector, los resultados de evaluación y la contribución individual requieren evidencia adicional.",
        "en": "The thesis guide identifies YOLOv26. This review could verify Angular services and their Supabase contract. The detector version actually run, evaluation results, and individual contributions require further evidence."
      }
    },
    {
      "id": "credential.python-intro",
      "data": {
        "kind": "credential",
        "profileId": "profile.oscar-paredes",
        "title": "Programming for Everybody (Getting Started with Python)",
        "issuer": "University of Michigan",
        "platform": "Coursera",
        "url": "https://www.coursera.org/account/accomplishments/verify/62P66MXL5CKQ",
        "completedOn": "2023-08-13"
      },
      "text": {
        "es": "Fundamentos de Python",
        "en": "Python fundamentals"
      }
    },
    {
      "id": "credential.python-structures",
      "data": {
        "kind": "credential",
        "profileId": "profile.oscar-paredes",
        "title": "Python Data Structures",
        "issuer": "University of Michigan",
        "platform": "Coursera",
        "url": "https://www.coursera.org/account/accomplishments/verify/ZHD6QX6Z4JDL",
        "completedOn": "2023-09-09"
      },
      "text": {
        "es": "Estructuras de datos en Python",
        "en": "Python data structures"
      }
    },
    {
      "id": "credential.python-web-data",
      "data": {
        "kind": "credential",
        "profileId": "profile.oscar-paredes",
        "title": "Using Python to Access Web Data",
        "issuer": "University of Michigan",
        "platform": "Coursera",
        "url": "https://www.coursera.org/account/accomplishments/verify/GKYAQ7TNKS9U",
        "completedOn": "2023-09-17"
      },
      "text": {
        "es": "Acceso a datos web",
        "en": "Web data access"
      }
    },
    {
      "id": "credential.python-databases",
      "data": {
        "kind": "credential",
        "profileId": "profile.oscar-paredes",
        "title": "Using Databases with Python",
        "issuer": "University of Michigan",
        "platform": "Coursera",
        "url": "https://www.coursera.org/account/accomplishments/verify/VFKFWD7P25WE",
        "completedOn": "2023-10-12"
      },
      "text": {
        "es": "Persistencia con Python",
        "en": "Data persistence with Python"
      }
    },
    {
      "id": "credential.python-capstone",
      "data": {
        "kind": "credential",
        "profileId": "profile.oscar-paredes",
        "title": "Capstone: Retrieving, Processing, and Visualizing Data with Python",
        "issuer": "University of Michigan",
        "platform": "Coursera",
        "url": "https://www.coursera.org/account/accomplishments/verify/FYNJFZ3RA35R",
        "completedOn": "2023-10-12"
      },
      "text": {
        "es": "Procesamiento y visualización de datos",
        "en": "Data processing and visualization"
      }
    },
    {
      "id": "credential.sql-data-science",
      "data": {
        "kind": "credential",
        "profileId": "profile.oscar-paredes",
        "title": "SQL for Data Science",
        "issuer": "University of California, Davis",
        "platform": "Coursera",
        "url": "https://www.coursera.org/account/accomplishments/verify/PBFEL9BXX2SH",
        "completedOn": "2024-06-05"
      },
      "text": {
        "es": "Consultas SQL para análisis",
        "en": "SQL queries for analysis"
      }
    },
    {
      "id": "credential.sql-problem-solving",
      "data": {
        "kind": "credential",
        "profileId": "profile.oscar-paredes",
        "title": "SQL Problem Solving",
        "issuer": "University of California, Davis",
        "platform": "Coursera",
        "url": "https://www.coursera.org/account/accomplishments/verify/A4RVU5JX9R3M",
        "completedOn": "2024-06-17"
      },
      "text": {
        "es": "Resolución de problemas con SQL",
        "en": "Problem solving with SQL"
      }
    },
    {
      "id": "credential.sql-capstone",
      "data": {
        "kind": "credential",
        "profileId": "profile.oscar-paredes",
        "title": "SQL for Data Science Capstone Project",
        "issuer": "University of California, Davis",
        "platform": "Coursera",
        "url": "https://www.coursera.org/account/accomplishments/verify/VM65JRCT5QP3",
        "completedOn": "2024-06-26"
      },
      "text": {
        "es": "Análisis aplicado con SQL",
        "en": "Applied analysis with SQL"
      }
    },
    {
      "id": "credential.network-communication",
      "data": {
        "kind": "credential",
        "profileId": "profile.oscar-paredes",
        "title": "Fundamentals of Network Communication",
        "issuer": "University of Colorado System",
        "platform": "Coursera",
        "url": "https://www.coursera.org/account/accomplishments/verify/KDVDCERLERV5",
        "completedOn": "2023-09-08"
      },
      "text": {
        "es": "Fundamentos de redes",
        "en": "Networking fundamentals"
      }
    },
    {
      "id": "timeline.sigcoop",
      "data": {
        "kind": "timeline",
        "subject": {
          "kind": "project",
          "id": "project.sigcoop"
        },
        "order": 50,
        "period": {
          "kind": "undated",
          "stage": "recent"
        }
      },
      "text": {
        "es": "SIGCOOP · ERP administrativo y financiero",
        "en": "SIGCOOP · Administrative and financial ERP"
      }
    },
    {
      "id": "timeline.smartparking",
      "data": {
        "kind": "timeline",
        "subject": {
          "kind": "project",
          "id": "project.smartparking"
        },
        "order": 60,
        "period": {
          "kind": "undated",
          "stage": "recent"
        }
      },
      "text": {
        "es": "SmartParking · Investigación aplicada",
        "en": "SmartParking · Applied research"
      }
    },
    {
      "id": "timeline.upc",
      "data": {
        "kind": "timeline",
        "subject": {
          "kind": "education",
          "id": "education.systems-engineering"
        },
        "order": 70,
        "period": {
          "kind": "undated",
          "stage": "current"
        }
      },
      "text": {
        "es": "Formación universitaria en la UPC",
        "en": "University studies at UPC"
      }
    },
    {
      "id": "project.pcmym",
      "data": {
        "kind": "project",
        "name": "PCMYM",
        "classification": "professional",
        "repository": "https://github.com/omparedes/PCMYM"
      }
    },
    {
      "id": "detail.pcmym-summary",
      "data": {
        "kind": "project-detail",
        "projectId": "project.pcmym",
        "area": "summary",
        "basis": "code"
      },
      "text": {
        "es": "Aplicación de taller para seguir equipos y órdenes de servicio desde la recepción hasta la entrega, con repuestos y comprobantes asociados.",
        "en": "A repair-shop application that tracks devices and service orders from intake to handover, linking spare parts and service documents."
      }
    },
    {
      "id": "detail.pcmym-context",
      "data": {
        "kind": "project-detail",
        "projectId": "project.pcmym",
        "area": "context",
        "basis": "code"
      },
      "text": {
        "es": "El taller recibe computadoras y laptops que pasan por diagnóstico, reparación y entrega. Mantener esas etapas en una misma orden permite consultar lo recibido, el estado del equipo y las acciones pendientes sin reconstruir el historial entre registros separados. Uso este sistema para seguir órdenes en mi actividad de servicio técnico.",
        "en": "A computer repair shop receives desktops and laptops for diagnosis, repair, and handover. Keeping those stages in one order lets staff see what arrived, where the device is in the process, and what is still pending. I use this system to track orders in my computer repair business."
      }
    },
    {
      "id": "participation.pcmym",
      "data": {
        "kind": "participation",
        "profileId": "profile.oscar-paredes",
        "projectId": "project.pcmym"
      },
      "text": {
        "es": "Contribuí al registro de clientes, la máquina de estados de las órdenes, la gestión de repuestos y los registros financieros. Los commits con autoría a mi nombre documentan estos aportes.",
        "en": "I contributed to customer records, the service-order state machine, spare-parts management, and financial records. The commits authored under my name document these contributions."
      }
    },
    {
      "id": "detail.pcmym-architecture",
      "data": {
        "kind": "project-detail",
        "projectId": "project.pcmym",
        "area": "architecture",
        "basis": "code",
        "flow": [
          {
            "es": "Angular",
            "en": "Angular"
          },
          {
            "es": "Supabase Auth",
            "en": "Supabase Auth"
          },
          {
            "es": "PostgreSQL y Storage",
            "en": "PostgreSQL and Storage"
          }
        ]
      },
      "text": {
        "es": "La SPA Angular 22 carga las vistas bajo demanda y consulta Supabase Auth, PostgreSQL y Storage. El modelo enlaza la orden con un cliente, su historial, repuestos, presupuestos, cobros y entrega. Las políticas de acceso separan los registros por negocio.",
        "en": "The Angular 22 SPA loads views on demand and uses Supabase Auth, PostgreSQL, and Storage. The order links a customer to its status history, parts, estimates, payments, and handover. Access policies separate records by business."
      }
    },
    {
      "id": "detail.pcmym-lifecycle",
      "data": {
        "kind": "project-detail",
        "projectId": "project.pcmym",
        "area": "architecture",
        "basis": "code",
        "flow": [
          {
            "es": "Recepción",
            "en": "Intake"
          },
          {
            "es": "Diagnóstico",
            "en": "Diagnosis"
          },
          {
            "es": "Reparación",
            "en": "Repair"
          },
          {
            "es": "Equipo listo",
            "en": "Ready for pickup"
          },
          {
            "es": "Entrega",
            "en": "Handover"
          }
        ]
      },
      "text": {
        "es": "El flujo de la orden abarca recepción, diagnóstico, reparación, espera de repuestos cuando corresponde, aviso de equipo listo y entrega. El esquema conserva las transiciones y contempla la cancelación.",
        "en": "The order moves through intake, diagnosis, repair, parts waiting when required, ready for pickup, and handover. The schema retains transitions and supports cancellation."
      }
    },
    {
      "id": "detail.pcmym-functions",
      "data": {
        "kind": "project-detail",
        "projectId": "project.pcmym",
        "area": "feature",
        "basis": "code"
      },
      "text": {
        "es": "El tablero filtra las órdenes por criterios operativos. Desde una orden se pueden registrar datos del equipo, adjuntar fotos, asignar o devolver repuestos, relacionar presupuestos y registrar abonos. El sistema incluye comprobantes de recepción y entrega.",
        "en": "The order board supports operational filters. An order can store device details, attach photos, allocate or return parts, link an estimate, and record partial payments. The system includes intake and handover documents."
      }
    },
    {
      "id": "detail.pcmym-decisions",
      "data": {
        "kind": "project-detail",
        "projectId": "project.pcmym",
        "area": "decision",
        "basis": "code"
      },
      "text": {
        "es": "PostgreSQL valida los cambios de estado y las operaciones de inventario. La asignación de repuestos registra un movimiento de stock y rechaza cantidades que dejarían existencias negativas. Las fotos se consultan mediante enlaces firmados.",
        "en": "PostgreSQL validates order transitions and inventory operations. Parts allocation records a stock movement and rejects quantities that would make stock negative. Equipment photos are retrieved through signed links."
      }
    },
    {
      "id": "detail.pcmym-quality",
      "data": {
        "kind": "project-detail",
        "projectId": "project.pcmym",
        "area": "quality",
        "basis": "code"
      },
      "text": {
        "es": "El repositorio incluye pruebas Vitest para reglas de estado, documentos e inventario y scripts SQL para reglas de negocio. Esta revisión verificó su presencia y alcance en el código.",
        "en": "The repository includes Vitest checks for state rules, documents, and inventory, plus SQL checks for business rules. This review verified their presence and scope in the source."
      }
    },
    {
      "id": "detail.pcmym-result",
      "data": {
        "kind": "project-detail",
        "projectId": "project.pcmym",
        "area": "result",
        "basis": "code"
      },
      "text": {
        "es": "El resultado verificable es la trazabilidad entre una orden, sus transiciones, los movimientos de repuestos y los comprobantes. Las fuentes permiten comprobar cómo se relacionan estos elementos en el modelo.",
        "en": "The verifiable result is traceability between an order, its transitions, parts movements, and the service documents. The sources show how these elements are linked in the model."
      }
    },
    {
      "id": "detail.pcmym-scope",
      "data": {
        "kind": "project-detail",
        "projectId": "project.pcmym",
        "area": "limitation",
        "basis": "code"
      },
      "text": {
        "es": "El MVP cubre la operación de taller documentada. La incorporación de otros negocios y las integraciones externas requieren validación adicional. Está pendiente una demostración con datos sintéticos.",
        "en": "The MVP covers the documented workshop workflow. Onboarding other shops and external integrations require further validation. A demonstration with synthetic data is pending."
      }
    },
    {
      "id": "use.pcmym-angular",
      "data": {
        "kind": "technology-use",
        "projectId": "project.pcmym",
        "technologyId": "technology.angular",
        "basis": "code",
        "version": "22.0.2"
      }
    },
    {
      "id": "use.pcmym-typescript",
      "data": {
        "kind": "technology-use",
        "projectId": "project.pcmym",
        "technologyId": "technology.typescript",
        "basis": "code",
        "version": "6.0.3"
      }
    },
    {
      "id": "use.pcmym-postgresql",
      "data": {
        "kind": "technology-use",
        "projectId": "project.pcmym",
        "technologyId": "technology.postgresql",
        "basis": "code"
      }
    },
    {
      "id": "use.pcmym-supabase",
      "data": {
        "kind": "technology-use",
        "projectId": "project.pcmym",
        "technologyId": "technology.supabase",
        "basis": "code",
        "version": "2.108.2"
      }
    },
    {
      "id": "technology.primeng",
      "data": {
        "kind": "technology",
        "name": "PrimeNG"
      }
    },
    {
      "id": "use.pcmym-primeng",
      "data": {
        "kind": "technology-use",
        "projectId": "project.pcmym",
        "technologyId": "technology.primeng",
        "basis": "code",
        "version": "21.1.9"
      }
    },
    {
      "id": "technology.tailwind-css",
      "data": {
        "kind": "technology",
        "name": "Tailwind CSS"
      }
    },
    {
      "id": "use.pcmym-tailwind-css",
      "data": {
        "kind": "technology-use",
        "projectId": "project.pcmym",
        "technologyId": "technology.tailwind-css",
        "basis": "code",
        "version": "4.3.1"
      }
    },
    {
      "id": "technology.vitest",
      "data": {
        "kind": "technology",
        "name": "Vitest"
      }
    },
    {
      "id": "use.pcmym-vitest",
      "data": {
        "kind": "technology-use",
        "projectId": "project.pcmym",
        "technologyId": "technology.vitest",
        "basis": "code",
        "version": "4.1.9"
      }
    }
  ],
  "sources": {
    "participation.sigcoop": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/README.md",
        "path": "README.md"
      }
    ],
    "detail.sigcoop-purpose": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/README.es.md",
        "path": "README.es.md"
      }
    ],
    "detail.sigcoop-payments": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/README.es.md",
        "path": "README.es.md"
      }
    ],
    "detail.sigcoop-reconciliation": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/ARCHITECTURE.md",
        "path": "ARCHITECTURE.md"
      }
    ],
    "detail.sigcoop-financial-transactions": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/ARCHITECTURE.md",
        "path": "ARCHITECTURE.md"
      }
    ],
    "detail.sigcoop-operational-context": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/README.es.md",
        "path": "README.es.md"
      }
    ],
    "detail.sigcoop-implementation-scope": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/README.md",
        "path": "README.md"
      }
    ],
    "detail.sigcoop-system-flow": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/ARCHITECTURE.md",
        "path": "ARCHITECTURE.md"
      }
    ],
    "detail.sigcoop-directory-ledgers": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/README.es.md",
        "path": "README.es.md"
      },
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/ARCHITECTURE.md",
        "path": "ARCHITECTURE.md"
      }
    ],
    "detail.sigcoop-accounting-inflows": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/ARCHITECTURE.md",
        "path": "ARCHITECTURE.md"
      }
    ],
    "detail.sigcoop-audit-trail": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/ARCHITECTURE.md",
        "path": "ARCHITECTURE.md"
      }
    ],
    "detail.sigcoop-report-row-limit": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/ARCHITECTURE.md",
        "path": "ARCHITECTURE.md"
      }
    ],
    "detail.sigcoop-accounting-tests": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/src/app/pages/reportes/reporte-contable/reporte-contable.spec.ts",
        "path": "src/app/pages/reportes/reporte-contable/reporte-contable.spec.ts"
      }
    ],
    "detail.sigcoop-demo-results": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/README.es.md",
        "path": "README.es.md"
      }
    ],
    "detail.sigcoop-review-scope": [
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/ARCHITECTURE.md",
        "path": "ARCHITECTURE.md"
      },
      {
        "href": "https://github.com/omparedes/SistemaCooperativa/blob/919a3e64452ebefb1ce03d7eeb151cccbfbd05b7/src/app/pages/reportes/reporte-contable/reporte-contable.spec.ts",
        "path": "src/app/pages/reportes/reporte-contable/reporte-contable.spec.ts"
      }
    ],
    "detail.smartparking-purpose": [
      {
        "href": "https://github.com/omparedes/ParkingApp2/blob/bf1b0d03b720c81248629bd3206ac944ddd127ff/README_TESIS.md",
        "path": "README_TESIS.md"
      }
    ],
    "detail.smartparking-records": [
      {
        "href": "https://github.com/omparedes/ParkingApp2/blob/bf1b0d03b720c81248629bd3206ac944ddd127ff/src/app/services/registros.service.ts",
        "path": "src/app/services/registros.service.ts"
      },
      {
        "href": "https://github.com/omparedes/ParkingApp2/blob/bf1b0d03b720c81248629bd3206ac944ddd127ff/supabase_scripts/02_rpc_logic.sql",
        "path": "supabase_scripts/02_rpc_logic.sql"
      }
    ],
    "detail.smartparking-alerts": [
      {
        "href": "https://github.com/omparedes/ParkingApp2/blob/bf1b0d03b720c81248629bd3206ac944ddd127ff/src/app/services/alertas.service.ts",
        "path": "src/app/services/alertas.service.ts"
      }
    ],
    "detail.smartparking-integration": [
      {
        "href": "https://github.com/omparedes/ParkingApp2/blob/bf1b0d03b720c81248629bd3206ac944ddd127ff/BACKEND_CONTEXT.md",
        "path": "BACKEND_CONTEXT.md"
      }
    ],
    "detail.smartparking-research-objective": [
      {
        "href": "https://github.com/omparedes/ParkingApp2/blob/bf1b0d03b720c81248629bd3206ac944ddd127ff/README_TESIS.md",
        "path": "README_TESIS.md"
      }
    ],
    "detail.smartparking-system-flow": [
      {
        "href": "https://github.com/omparedes/ParkingApp2/blob/bf1b0d03b720c81248629bd3206ac944ddd127ff/BACKEND_CONTEXT.md",
        "path": "BACKEND_CONTEXT.md"
      },
      {
        "href": "https://github.com/omparedes/ParkingApp2/blob/bf1b0d03b720c81248629bd3206ac944ddd127ff/src/app/services/websocket.service.ts",
        "path": "src/app/services/websocket.service.ts"
      }
    ],
    "detail.smartparking-realtime-occupancy": [
      {
        "href": "https://github.com/omparedes/ParkingApp2/blob/bf1b0d03b720c81248629bd3206ac944ddd127ff/src/app/services/alertas.service.ts",
        "path": "src/app/services/alertas.service.ts"
      },
      {
        "href": "https://github.com/omparedes/ParkingApp2/blob/bf1b0d03b720c81248629bd3206ac944ddd127ff/src/app/services/websocket.service.ts",
        "path": "src/app/services/websocket.service.ts"
      }
    ],
    "detail.smartparking-research-scope": [
      {
        "href": "https://github.com/omparedes/ParkingApp2/blob/bf1b0d03b720c81248629bd3206ac944ddd127ff/README_TESIS.md",
        "path": "README_TESIS.md"
      }
    ],
    "detail.pcmym-context": [
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/supabase/migrations/20260619174148_create_service_orders.sql",
        "path": "supabase/migrations/20260619174148_create_service_orders.sql"
      }
    ],
    "participation.pcmym": [
      {
        "href": "https://github.com/omparedes/PCMYM/commit/f2417dfe340b98ab0fe94aa1228b4820b601cc3e",
        "path": "commit f2417df"
      },
      {
        "href": "https://github.com/omparedes/PCMYM/commit/3b51c4197a254c0655d780cbf4bfdc5ef85cdeff",
        "path": "commit 3b51c41"
      },
      {
        "href": "https://github.com/omparedes/PCMYM/commit/e1daf2fa023ec049ce168d38e23ecb79cc17e658",
        "path": "commit e1daf2f"
      },
      {
        "href": "https://github.com/omparedes/PCMYM/commit/44924a5ebe0020971ab2d04aab5e9568df191310",
        "path": "commit 44924a5"
      }
    ],
    "detail.pcmym-architecture": [
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/docs/01-ARQUITECTURA.md",
        "path": "docs/01-ARQUITECTURA.md"
      },
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/apps/crm/src/app/app.routes.ts",
        "path": "apps/crm/src/app/app.routes.ts"
      },
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/docs/02-MODELO-DATOS.md",
        "path": "docs/02-MODELO-DATOS.md"
      }
    ],
    "detail.pcmym-lifecycle": [
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/apps/crm/src/app/features/service-orders/service-orders.models.ts",
        "path": "apps/crm/src/app/features/service-orders/service-orders.models.ts"
      },
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/supabase/migrations/20260906140000_add_service_order_delivery.sql",
        "path": "supabase/migrations/20260906140000_add_service_order_delivery.sql"
      }
    ],
    "detail.pcmym-functions": [
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/apps/crm/src/app/features/service-orders/service-orders-board.ts",
        "path": "apps/crm/src/app/features/service-orders/service-orders-board.ts"
      },
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/apps/crm/src/app/features/service-orders/service-order-documents.service.ts",
        "path": "apps/crm/src/app/features/service-orders/service-order-documents.service.ts"
      }
    ],
    "detail.pcmym-decisions": [
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/supabase/migrations/20260906080000_create_inventory_and_parts.sql",
        "path": "supabase/migrations/20260906080000_create_inventory_and_parts.sql"
      },
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/supabase/migrations/20260619200406_create_service_order_photos.sql",
        "path": "supabase/migrations/20260619200406_create_service_order_photos.sql"
      }
    ],
    "detail.pcmym-quality": [
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/apps/crm/src/app/features/service-orders/service-orders.models.spec.ts",
        "path": "apps/crm/src/app/features/service-orders/service-orders.models.spec.ts"
      },
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/apps/crm/src/app/features/service-orders/service-order-documents.spec.ts",
        "path": "apps/crm/src/app/features/service-orders/service-order-documents.spec.ts"
      },
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/apps/crm/src/app/features/inventory/inventory.spec.ts",
        "path": "apps/crm/src/app/features/inventory/inventory.spec.ts"
      }
    ],
    "detail.pcmym-result": [
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/supabase/migrations/20260906080000_create_inventory_and_parts.sql",
        "path": "supabase/migrations/20260906080000_create_inventory_and_parts.sql"
      },
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/supabase/migrations/20260906140000_add_service_order_delivery.sql",
        "path": "supabase/migrations/20260906140000_add_service_order_delivery.sql"
      }
    ],
    "detail.pcmym-scope": [
      {
        "href": "https://github.com/omparedes/PCMYM/blob/9fea1e8ca39413226d083da3ca82de73b84a795c/docs/03-ROADMAP-FASES.md",
        "path": "docs/03-ROADMAP-FASES.md"
      }
    ]
  }
} as const satisfies PublicProjection

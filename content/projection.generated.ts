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
    ]
  }
} as const satisfies PublicProjection

export interface IServices {
  id: number
  title: string
  description: string
  category: string // "evaluation" | "audit" | "certification" | "formation"
  icones: string
  image1?: string
  image2?: string
  points: string[]
  position?: "normal" | "reverse"
  additionalInfo?: string
}

export const ServiceData: IServices[] = [
  {
    id: 1,
    title: "Évaluations Environnementales Stratégiques (EESS)",
    description: "Analyse prospective des impacts de vos politiques et plans sectoriels pour une prise de décision éclairée et durable.",
    category: "evaluation",
    icones: "FileSearch",
    image1: "/images/services/eess.jpg",
    image2: "/images/services/strategie.jpg",
    points: [
      "Cadrage et analyse sectorielle",
      "Évaluation des impacts stratégiques",
      "Recommandations politiques et plan d'action"
    ],
    position: "normal",
    additionalInfo: "Expertise confirmée : Forêts classées, hydrocarbures, industries extractives"
  },
  {
    id: 2,
    title: "Études d'Impact Environnemental et Social (EIES/EIES-A)",
    description: "Évaluation complète et approfondie des impacts spécifiques de vos projets pour garantir leur acceptabilité et durabilité.",
    category: "evaluation",
    icones: "FileCheck",
    image1: "/images/services/eies.jpg",
    image2: "/images/services/terrain.jpg",
    points: [
      "Diagnostic et évaluation des impacts",
      "Consultations publiques et parties prenantes",
      "Élaboration du PGES et rapport final"
    ],
    position: "reverse",
    additionalInfo: "30+ missions réalisées - Conforme BAD, Banque Mondiale, AFD, UE"
  },
  {
    id: 3,
    title: "Audits Environnementaux et Sociaux",
    description: "Vérification indépendante de la conformité et de la performance de vos opérations, avec plans d'actions correctives.",
    category: "audit",
    icones: "ShieldCheck",
    image1: "/images/services/audit.jpg",
    image2: "/images/services/conformite.jpg",
    points: [
      "Vérification de la conformité terrain",
      "Évaluation des écarts et risques",
      "Proposition de plan d'actions correctives"
    ],
    position: "normal",
    additionalInfo: "Audits récurrents pour 2PAI-Bélier depuis 2023"
  },
  {
    id: 4,
    title: "Plans de Gestion Environnementale et Sociale (PGES/CGES)",
    description: "Conception et mise en œuvre opérationnelle de cadres de gestion pour l'intégration des exigences ESG.",
    category: "evaluation",
    icones: "ClipboardList",
    image1: "/images/services/pges.jpg",
    image2: "/images/services/suivi.jpg",
    points: [
      "Élaboration du cadre de gestion",
      "Déclinaison opérationnelle",
      "Mise en place des systèmes de suivi"
    ],
    position: "reverse",
    additionalInfo: "Expérience avec UNICEF, PIF2, centrales biomasse"
  },
  {
    id: 5,
    title: "Accompagnement à la Certification & Normes Durables",
    description: "Appui complet pour la préparation, l'obtention et le maintien des certifications sectorielles reconnues.",
    category: "certification",
    icones: "BadgeCheck",
    image1: "/images/services/certification.jpg",
    image2: "/images/services/rspo.jpg",
    points: [
      "Analyse d'écart avec le référentiel",
      "Plan de mise en conformité",
      "Préparation et suivi d'audit"
    ],
    position: "normal",
    additionalInfo: "Ancien Responsable QSE certifié - Formateur approuvé RSPO"
  },
  {
    id: 6,
    title: "Suivi Environnemental et Social des Projets",
    description: "Surveillance continue et reporting de la performance environnementale et sociale pendant l'exécution.",
    category: "evaluation",
    icones: "BarChart",
    image1: "/images/services/suivi-projet.jpg",
    image2: "/images/services/rapportage.jpg",
    points: [
      "Suivi de la mise en œuvre",
      "Contrôle des mesures d'atténuation",
      "Reporting aux bailleurs"
    ],
    position: "reverse",
    additionalInfo: "Mission UNICEF (KfW) - Expérience multi-bailleurs"
  },
  {
    id: 7,
    title: "Formation et Renforcement des Capacités",
    description: "Programmes de formation sur mesure pour doter vos équipes des compétences en gestion environnementale.",
    category: "formation",
    icones: "Users",
    image1: "/images/services/formation.jpg",
    image2: "/images/services/atelier.jpg",
    points: [
      "Évaluation des besoins",
      "Animation de la formation",
      "Évaluation des acquis"
    ],
    position: "normal",
    additionalInfo: "Formateur approuvé par la RSPO"
  }
]
export interface IServices {
  id: number
  title: string
  description: string
  category: string // "evaluation" | "audit" | "certification" | "formation"
  icones: string
  images?: string
  imgTitle: string
  imgPoints: string[]
  points: string[]
  position?: "normal" | "reverse"
  additionalInfo?: string
}

export const ServiceData: IServices[] = [
  {
    id: 1,
    title: "Évaluations Stratégiques Environnementales et Sociales (EESS)",
    description: "Analyse approfondie des impacts environnementaux et sociaux de vos projets stratégiques pour une prise de décision éclairée.",
    category: "evaluation",
    icones: "FileSearch",
    images: "/images/services/eess.jpg",
    imgTitle: "Processus d'évaluation stratégique",
    imgPoints: [
      "Analyse de conformité réglementaire",
      "Identification des risques et opportunités",
      "Consultation des parties prenantes",
      "Recommandations stratégiques"
    ],
    points: [
      "Évaluation préliminaire des impacts",
      "Analyse des alternatives",
      "Plan de gestion environnementale et sociale",
      "Suivi et reporting",
      "Consultation publique intégrée"
    ],
    position: "normal",
    additionalInfo: "Durée moyenne : 4-8 semaines selon la complexité du projet"
  },
  {
    id: 2,
    title: "Études d'Impact Environnemental et Social (EIES)",
    description: "Évaluation complète des impacts spécifiques de vos projets pour garantir leur durabilité et leur acceptabilité sociale.",
    category: "evaluation",
    icones: "FileCheck",
    images: "/images/services/eies.jpg",
    imgTitle: "Méthodologie EIES détaillée",
    imgPoints: [
      "Cadrage et périmètre d'étude",
      "Collecte de données terrain",
      "Modélisation des impacts",
      "Mesures d'atténuation"
    ],
    points: [
      "Diagnostic environnemental initial",
      "Évaluation des impacts cumulés",
      "Plan de suivi-évaluation",
      "Rapport d'étude complet",
      "Appui à l'approbation administrative"
    ],
    position: "reverse",
    additionalInfo: "Conforme aux exigences des bailleurs de fonds internationaux"
  },
  {
    id: 3,
    title: "Audits Environnementaux et Sociaux",
    description: "Vérification indépendante de la conformité et de la performance de vos systèmes de management environnemental et social.",
    category: "audit",
    icones: "ShieldCheck",
    images: "/images/services/audit.jpg",
    imgTitle: "Processus d'audit complet",
    imgPoints: [
      "Pré-audit documentaire",
      "Visites terrain approfondies",
      "Entretiens avec le personnel",
      "Analyse des systèmes en place"
    ],
    points: [
      "Audit de conformité réglementaire",
      "Audit de performance",
      "Audit de certification",
      "Rapport d'audit détaillé",
      "Plan d'actions correctives"
    ],
    position: "normal",
    additionalInfo: "Auditeurs principaux certifiés RSPO, ISO 14001, SMETA"
  }
]
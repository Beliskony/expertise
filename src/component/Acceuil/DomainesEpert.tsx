import { CheckCircle, Leaf, Award, FileText, BarChart, Users as UsersIcon } from "lucide-react"

const DomainesExpert = () => {
  const domains = [
    {
      icon: CheckCircle,
      title: "EESS & EIES",
      description: "Évaluations Stratégiques Environnementales et Sociales et Études d'Impact Environnemental et Social",
      details: [
        "Évaluations stratégiques sectorielles",
        "Études d'impact détaillées",
        "Plans de gestion environnementale et sociale",
        "Consultation des parties prenantes"
      ],
      color: "#1a4d2e",
      count: "50+ projets"
    },
    {
      icon: Leaf,
      title: "Audits Environnementaux",
      description: "Évaluations complètes de conformité et de performance environnementale",
      details: [
        "Audits de conformité réglementaire",
        "Diagnostics environnementaux",
        "Bilans carbone et empreinte écologique",
        "Plans d'action correctifs"
      ],
      color: "#6b8e23",
      count: "100+ audits"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Accompagnement vers les principales certifications nationales et internationales",
      details: [
        "RSPO (P&C, ISH, SCC)",
        "ISO 9001, 14001, 45001",
        "SMETA, URSA, SA 8000",
        "HACCP et sécurité alimentaire"
      ],
      color: "#ff6347",
      count: "30+ certifications"
    },
    {
      icon: FileText,
      title: "Programmes Durabilité",
      description: "Mise en œuvre de programmes de développement durable dans l'agro-industrie",
      details: [
        "Stratégies de durabilité",
        "Indicateurs de performance ESG",
        "Reporting RSE",
        "Formation et renforcement capacités"
      ],
      color: "#1a4d2e",
      count: "25+ programmes"
    },
    {
      icon: BarChart,
      title: "Conformité Sociale",
      description: "Évaluation et amélioration des pratiques sociales et des conditions de travail",
      details: [
        "Audits sociaux",
        "Développement communautaire",
        "Santé et sécurité au travail",
        "Droits humains et travail"
      ],
      color: "#6b8e23",
      count: "40+ évaluations"
    },
    {
      icon: UsersIcon,
      title: "Formation & Coaching",
      description: "Renforcement des capacités et formation aux bonnes pratiques",
      details: [
        "Formations techniques",
        "Coaching management",
        "Ateliers pratiques",
        "Support post-formation"
      ],
      color: "#ff6347",
      count: "500+ personnes formées"
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-[#d4c5a9]/10">
      <div className="container mx-auto px-4">
        <div className="mx-auto px-4">
          
          {/* Titre */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1a4d2e] mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes <span className="text-[#1a4d2e]">Domaines</span> d&apos;Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une expertise complète pour répondre à tous vos besoins en matière de durabilité environnementale et sociale
            </p>
          </div>

          {/* Grille de domaines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <div 
                key={index}
                className="group bg-white border-2 border-[#d4c5a9] rounded-xl p-6 hover:border-[#1a4d2e] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* En-tête */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-3 rounded-xl" 
                      style={{ backgroundColor: `${domain.color}20` }}
                    >
                      <domain.icon className="w-6 h-6" style={{ color: domain.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{domain.title}</h3>
                      <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
                        {domain.count}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {domain.description}
                </p>

                {/* Détails */}
                <ul className="space-y-2 mb-6">
                  {domain.details.map((detail, i) => (
                    <li 
                      key={i} 
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: domain.color }}
                      ></div>
                      {detail}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

          {/* Bannière d'expertise */}
          <div className="mt-16 bg-linear-to-r from-[#1a4d2e] to-[#6b8e23] rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">Une expertise multisectorielle</h3>
                <p className="text-white/90 mb-6 md:mb-0">
                  Notre équipe intervient dans divers secteurs : agro-industrie, énergie, 
                  infrastructures, mines, et plus encore.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="text-center bg-white/20 px-4 py-2 rounded-lg max-lg:w-full">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-white/90">Clients satisfaits</div>
                </div>
                <div className="text-center bg-white/20 px-4 py-2 rounded-lg max-lg:w-full">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-white/90">Taux de réussite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DomainesExpert
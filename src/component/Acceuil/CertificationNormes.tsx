import { Globe, TrendingUp, Users, Shield, Target, Zap } from 'lucide-react'


const CertificationNormes = () => {
  const reasons = [
    {
      icon: Users,
      title: "Expertise Reconnue",
      description: "Équipe de spécialistes certifiés avec 15+ années d'expérience en évaluation environnementale et sociale",
      color: "bg-[#1a4d2e]",
      features: ["Auditeurs RSPO certifiés", "Experts ISO accrédités", "Consultants SMETA qualifiés"]
    },
    {
      icon: Globe,
      title: "Standards Internationaux",
      description: "Conformité aux normes mondiales de durabilité et commerce équitable reconnues internationalement",
      color: "bg-[#6b8e23]",
      features: ["Normes RSPO & ISEAL", "Directives de l'OCDE", "Conventions de l'OIT"]
    },
    {
      icon: TrendingUp,
      title: "Accompagnement Sur-Mesure",
      description: "Solutions adaptées aux spécificités de votre agro-industrie et chaîne d'approvisionnement",
      color: "bg-[#ff6347]",
      features: ["Audits préliminaires", "Plans d'action personnalisés", "Suivi post-certification"]
    },
    {
      icon: Shield,
      title: "Conformité Réglementaire",
      description: "Garantie de conformité avec les réglementations nationales et internationales applicables",
      color: "bg-[#1a4d2e]",
      features: ["Lois environnementales", "Règlements sociaux", "Exigences commerciales"]
    },
    {
      icon: Target,
      title: "Approche Résultats",
      description: "Focus sur l'amélioration continue et la création de valeur durable pour votre entreprise",
      color: "bg-[#6b8e23]",
      features: ["Indicateurs de performance", "Reporting transparent", "Amélioration continue"]
    },
    {
      icon: Zap,
      title: "Efficacité Opérationnelle",
      description: "Processus optimisés pour minimiser les délais et maximiser le retour sur investissement",
      color: "bg-[#ff6347]",
      features: ["Délais raccourcis", "Coûts maîtrisés", "Ressources optimisées"]
    }
  ]

  return (
    <>

      {/* SECTION POURQUOI NOUS CHOISIR */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pourquoi <span className="text-[#ff6347]">Me</span> Choisir ?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                 En tant qu'expert indépendant, je vous offre un accompagnement direct et personnalisé, 
                 sans les délais et les frais d'une structure intermédiaire. Mon approche garantit 
                 une expertise de premier plan et une attention personnalisée à chaque projet.
              </p>
            </div>

            {/* Grille de raisons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="group bg-white border-2 border-[#d4c5a9] rounded-xl p-6 hover:border-[#1a4d2e] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${reason.color} shrink-0`}>
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{reason.title}</h3>
                      <p className="text-gray-600 text-sm">{reason.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {reason.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-[#1a4d2e] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-5 border-t border-[#d4c5a9] group-hover:border-[#1a4d2e] transition-colors">
                    <span className="text-xs text-gray-500 font-medium">
                      {reason.color.includes('#1a4d2e') ? "Certifications" : 
                       reason.color.includes('#6b8e23') ? "Normes" : "Services"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default CertificationNormes
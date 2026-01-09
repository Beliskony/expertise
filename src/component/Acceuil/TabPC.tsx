import { Factory, Shield, TreePine, Users, Scale, Zap, Sprout, Heart } from 'lucide-react'

const TabPC = () => {
  const principles = [
    {
      icon: Shield,
      title: "Transparence et engagement",
      description: "Dialogue avec les parties prenantes et divulgation d'informations"
    },
    {
      icon: Scale,
      title: "Conformité légale",
      description: "Respect des lois nationales et internationales applicables"
    },
    {
      icon: Zap,
      title: "Efficacité économique",
      description: "Optimisation des rendements et viabilité financière"
    },
    {
      icon: TreePine,
      title: "Responsabilité environnementale",
      description: "Conservation des ressources naturelles et de la biodiversité"
    },
    {
      icon: Sprout,
      title: "Pratiques agricoles responsables",
      description: "Utilisation raisonnée des intrants et gestion des sols"
    },
    {
      icon: TreePine,
      title: "Développement responsable",
      description: "Critères stricts pour les nouvelles plantations"
    },
    {
      icon: Users,
      title: "Droits humains et travail",
      description: "Conditions de travail dignes et sécurité des travailleurs"
    },
    {
      icon: Heart,
      title: "Communautés locales",
      description: "Consentement libre, informé et préalable (CLIP)"
    }
  ]

  return (
    <div className="border-2 border-[#1a4d2e] rounded-xl p-8 space-y-8 bg-white">
      <div className="flex items-start gap-3">
        <div className="p-3 bg-[#1a4d2e] rounded-xl">
          <Factory className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            RSPO Principes et Critères (P&C)
          </h3>
          <p className="text-gray-600 mt-2">
            Standard complet pour les plantations et les agro-industries de grande échelle
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {principles.map((item, i) => (
          <div 
            key={i} 
            className="group p-5 bg-white rounded-xl border border-[#d4c5a9] hover:border-[#1a4d2e] hover:shadow transition-all duration-300"
          >
            <div className="p-3 bg-[#1a4d2e] rounded-lg w-fit mb-4">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TabPC
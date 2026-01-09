import { Users, BookOpen, Target, Users2, ShieldCheck } from 'lucide-react'

const TabISH = () => {
  const benefits = [
    {
      title: "Standard simplifié pour petits producteurs",
      description: "Version adaptée des critères RSPO pour les exploitations de moins de 50 ha",
      icon: BookOpen
    },
    {
      title: "Formation et renforcement des capacités",
      description: "Programmes de formation sur les bonnes pratiques agricoles et gestion durable",
      icon: Users2
    },
    {
      title: "Amélioration des pratiques agricoles",
      description: "Transition vers des méthodes durables et réduction des impacts environnementaux",
      icon: Target
    },
    {
      title: "Accès aux marchés certifiés",
      description: "Meilleur positionnement commercial et primes de durabilité",
      icon: ShieldCheck
    },
    {
      title: "Organisation en groupes de producteurs",
      description: "Structuration collective pour faciliter la certification et la commercialisation",
      icon: Users
    }
  ]

  return (
    <div className="border-2 border-[#1a4d2e] rounded-xl p-8 space-y-8 bg-white">
      <div className="flex items-start gap-3">
        <div className="p-3 bg-[#1a4d2e] rounded-xl">
          <Users className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            RSPO Independent Smallholder (ISH)
          </h3>
          <p className="text-gray-600 mt-2">
            Certification spécifique pour les petits producteurs indépendants (moins de 50 hectares)
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {benefits.map((item, i) => (
          <div 
            key={i} 
            className="p-5 bg-white rounded-xl border border-[#d4c5a9] hover:border-[#1a4d2e] hover:shadow transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#1a4d2e] rounded-lg">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TabISH
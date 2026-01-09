import { ShoppingBag, Link, Filter, Scale, TrendingUp} from "lucide-react"

const TabSCC = () => {
  const models = [
    {
      name: "Identity Preserved (IP)",
      description: "Traçabilité totale depuis la plantation jusqu'au produit final",
      icon: Link,
      level: "Haute traçabilité"
    },
    {
      name: "Segregation (SG)",
      description: "Mélange de produits certifiés de différentes sources",
      icon: Filter,
      level: "Moyenne traçabilité"
    },
    {
      name: "Mass Balance (MB)",
      description: "Mélange physique autorisé avec suivi documentaire",
      icon: Scale,
      level: "Traçabilité documentaire"
    },
    {
      name: "Book & Claim",
      description: "Système de certificats sans lien physique",
      icon: TrendingUp,
      level: "Soutien au marché"
    }
  ]

  return (
    <div className="border-2 border-[#1a4d2e] rounded-xl p-8 space-y-8 bg-white">
      <div className="flex items-start gap-3">
        <div className="p-3 bg-[#1a4d2e] rounded-xl">
          <ShoppingBag className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            RSPO Supply Chain Certification (SCC)
          </h3>
          <p className="text-gray-600 mt-2">
            Certification de la chaîne d'approvisionnement pour les transformateurs, négociants et distributeurs
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {models.map((item, i) => (
          <div 
            key={i} 
            className="group p-6 bg-white rounded-xl border border-[#d4c5a9] hover:border-[#1a4d2e] hover:shadow transition-all duration-300"
          >
            <div className="p-3 rounded-lg bg-[#1a4d2e] w-fit mb-4">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-gray-900 text-lg">{item.name}</h4>
              <span className="px-3 py-1 bg-[#d4c5a9] text-gray-700 rounded-full text-xs font-medium">
                {item.level}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="pt-4 border-t border-[#d4c5a9]">
              <span className="text-sm text-gray-500">
                Applicable pour: {i === 0 ? "Huileries, raffineurs" : i === 1 ? "Négociants, distributeurs" : i === 2 ? "Industriels alimentaires" : "Entreprises engagées"}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TabSCC
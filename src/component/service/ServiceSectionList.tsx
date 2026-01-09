import { useState } from "react"
import { ServiceData } from "../../data/ServiceData"
import ServiceBox from "./ServiceBox"
import { Filter, Search, Grid, List } from "lucide-react"

const ServiceSectionList = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [viewMode, setViewMode] = useState("grid")

  const categories = [
    { id: "all", label: "Tous les services" },
    { id: "evaluation", label: "Évaluations" },
    { id: "audit", label: "Audits" },
    { id: "certification", label: "Certifications" },
    { id: "formation", label: "Formations" },
  ]

  const filteredServices = ServiceData.filter(service => 
    activeFilter === "all" || service.category === activeFilter
  )

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#d4c5a9]/10" id="services-list">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header with Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Mes <span className="text-[#1a4d2e]">Services</span> Détaillés
                </h2>
                <p className="text-gray-600">
                  Découvrez l'ensemble de mes prestations d'expertise en durabilité
                </p>
              </div>
              
              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-white border border-[#d4c5a9] rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-[#1a4d2e] text-white" : "text-gray-500 hover:text-gray-900"}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-[#1a4d2e] text-white" : "text-gray-500 hover:text-gray-900"}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-gray-600 mr-4">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filtrer :</span>
              </div>
              
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === category.id
                      ? "bg-[#1a4d2e] text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-[#1a4d2e]/10 hover:text-[#1a4d2e] border border-[#d4c5a9]"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid/List */}
          <div className={`space-y-8 ${viewMode === "grid" ? "md:space-y-12" : ""}`}>
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <ServiceBox
                  key={service.id}
                  service={service}
                />
              ))
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex w-20 h-20 rounded-full bg-[#d4c5a9]/30 items-center justify-center mb-6">
                  <Search className="w-10 h-10 text-[#1a4d2e]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Aucun service trouvé</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Aucun service ne correspond à votre filtre. Essayez une autre catégorie.
                </p>
              </div>
            )}
          </div>

          {/* Stats Banner */}
          <div className="mt-16 bg-gradient-to-r from-[#1a4d2e] to-[#6b8e23] rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Un accompagnement complet</h3>
                <p className="text-white/90">
                  Chaque service inclut : diagnostic personnalisé, plan d'action détaillé, 
                  mise en œuvre accompagnée et suivi post-intervention.
                </p>
              </div>
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-white/90">Projets sur mesure</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24h</div>
                  <div className="text-sm text-white/90">Délai de réponse</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-white/90">Types de services</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServiceSectionList
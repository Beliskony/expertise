import { useState } from "react"
import { ServiceData } from "../../data/ServiceData"
import ServiceBox from "./ServiceBox"
import { Filter, Search } from "lucide-react"
import { motion } from 'framer-motion'

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
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-linear-to-b from-white to-[#d4c5a9]/10"
      id="services-list"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header with Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                >
                  Mes <span className="text-[#1a4d2e]">Services</span> Détaillés
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600"
                >
                  Découvrez l'ensemble de mes prestations d'expertise en durabilité
                </motion.p>
              </div>
            </div>

            {/* Filters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 text-gray-600 mr-4">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filtrer :</span>
              </div>
              
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === category.id
                      ? "bg-[#1a4d2e] text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-[#1a4d2e]/10 hover:text-[#1a4d2e] border border-[#d4c5a9]"
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Services Grid/List */}
          <div className={`space-y-8 ${viewMode === "grid" ? "md:space-y-12" : ""}`}>
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ServiceBox
                    key={service.id}
                    service={service}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <motion.div 
                  initial={{ rotate: -180 }}
                  animate={{ rotate: 0 }}
                  className="inline-flex w-20 h-20 rounded-full bg-[#d4c5a9]/30 items-center justify-center mb-6"
                >
                  <Search className="w-10 h-10 text-[#1a4d2e]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Aucun service trouvé</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Aucun service ne correspond à votre filtre. Essayez une autre catégorie.
                </p>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default ServiceSectionList
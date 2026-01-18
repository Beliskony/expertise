import { CheckCircle, Leaf, Award, FileText, BarChart, Users as UsersIcon } from "lucide-react"
import { motion } from "framer-motion"

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
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-16 md:py-20 bg-[#d4c5a9]/10"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto px-4">
          
          {/* Titre */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1a4d2e] mb-6"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes <span className="text-[#1a4d2e]">Domaines</span> d&apos;Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une expertise complète pour répondre à tous vos besoins en matière de durabilité environnementale et sociale
            </p>
          </motion.div>

          {/* Grille de domaines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100, damping: 12 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0px 20px 40px rgba(26, 77, 46, 0.15)",
                  borderColor: "#1a4d2e"
                }}
            
                className="group bg-white border-2 border-[#d4c5a9] rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* En-tête */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="p-3 rounded-xl" 
                      style={{ backgroundColor: `${domain.color}20` }}
                    >
                      <domain.icon className="w-6 h-6" style={{ color: domain.color }} />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{domain.title}</h3>
                      <motion.span 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                        className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {domain.count}
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 text-sm mb-4"
                >
                  {domain.description}
                </motion.p>

                {/* Détails */}
                <ul className="space-y-2 mb-6">
                  {domain.details.map((detail, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.5 }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: domain.color }}
                      ></motion.div>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bannière d'expertise */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.8 }}
            className="mt-16 bg-linear-to-r from-[#1a4d2e] to-[#6b8e23] rounded-2xl p-8 text-white"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl font-bold mb-3"
                >
                  Une expertise multisectorielle
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-white/90 mb-6 md:mb-0"
                >
                  Notre équipe intervient dans divers secteurs : agro-industrie, énergie, 
                  infrastructures, mines, et plus encore.
                </motion.p>
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-center bg-white/20 px-4 py-2 rounded-lg max-lg:w-full"
                >
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-white/90">Clients satisfaits</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-center bg-white/20 px-4 py-2 rounded-lg max-lg:w-full"
                >
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-white/90">Taux de réussite</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default DomainesExpert
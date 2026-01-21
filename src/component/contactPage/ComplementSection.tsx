import { Target, Eye, Award, CheckCircle, Lightbulb, Users, Globe, Shield, Heart } from "lucide-react"
import { motion } from "framer-motion"

const ComplementSection = () => {
  return (
    <>
      {/* Mission & Vision - Version Expert Indépendant */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Personnelle */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                borderColor: "#1a4d2e",
                boxShadow: "0px 20px 40px rgba(26, 77, 46, 0.15)"
              }}
              className="border-2 border-[#d4c5a9] rounded-xl shadow-lg p-8 space-y-6 bg-white group"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-[#1a4d2e] flex items-center justify-center"
                >
                  <Target className="w-7 h-7 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-[#1a4d2e]">Ma Mission</h2>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  <strong>Accompagner personnellement</strong> chaque organisation dans sa transition vers des pratiques durables, 
                  en fournissant des évaluations environnementales et sociales <strong>sur mesure</strong>, conformes aux standards internationaux.
                </p>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-4 bg-[#d4c5a9]/10 rounded-lg border-l-4 border-[#1a4d2e]"
                >
                  <p className="text-gray-700 italic">
                    "Je m'engage à être votre partenaire de confiance, garantissant une expertise directe 
                    sans intermédiaire pour des résultats concrets et durables."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Vision Personnelle */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                y: -10,
                borderColor: "#1a4d2e",
                boxShadow: "0px 20px 40px rgba(26, 77, 46, 0.15)"
              }}
              className="border-2 border-[#d4c5a9] rounded-xl shadow-lg p-8 space-y-6 bg-white group"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-[#6b8e23] flex items-center justify-center"
                >
                  <Eye className="w-7 h-7 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-[#1a4d2e]">Ma Vision</h2>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Devenir <strong>l'expert de référence</strong> en Afrique pour les certifications de durabilité, 
                  reconnu pour mon approche personnalisée et mon engagement envers l'excellence.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Contribuer à un écosystème entrepreneurial où chaque entreprise intègre la durabilité 
                  au cœur de ses opérations, créant une valeur durable pour l'environnement et les communautés.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mes Valeurs Personnelles */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-[#d4c5a9]/10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1a4d2e] mb-4"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mes <span className="text-[#1a4d2e]">Valeurs</span> Professionnelles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Les principes qui guident mon travail et ma relation avec chaque client
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: "Excellence Technique",
                  text: "Une expertise pointue et une veille constante des normes internationales.",
                  color: "bg-[#1a4d2e]",
                  count: "01"
                },
                {
                  icon: Shield,
                  title: "Intégrité & Transparence",
                  text: "Évaluations objectives, rapports honnêtes et recommandations impartiales.",
                  color: "bg-[#6b8e23]",
                  count: "02"
                },
                {
                  icon: CheckCircle,
                  title: "Engagement Personnel",
                  text: "Chaque projet bénéficie de mon attention complète et de mon suivi direct.",
                  color: "bg-[#ff6347]",
                  count: "03"
                },
                {
                  icon: Lightbulb,
                  title: "Solutions Innovantes",
                  text: "Approches créatives adaptées aux défis spécifiques de chaque organisation.",
                  color: "bg-[#1a4d2e]",
                  count: "04"
                },
                {
                  icon: Users,
                  title: "Collaboration Étroite",
                  text: "Un partenariat basé sur l'écoute, le dialogue et la confiance mutuelle.",
                  color: "bg-[#6b8e23]",
                  count: "05"
                },
                {
                  icon: Globe,
                  title: "Impact Durable",
                  text: "Des recommandations qui créent une valeur pérenne pour votre entreprise.",
                  color: "bg-[#ff6347]",
                  count: "06"
                },
              ].map(({ icon: Icon, title, text, color, count }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    borderColor: "#1a4d2e",
                    boxShadow: "0px 20px 40px rgba(26, 77, 46, 0.15)"
                  }}
                  className="group bg-white border-2 border-[#d4c5a9] rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className={`p-3 rounded-xl ${color}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.span 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-gray-300"
                    >
                      {count}
                    </motion.span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1a4d2e] transition-colors">
                    {title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{text}</p>

                </motion.div>
              ))}
            </div>


          </div>
        </div>
      </motion.section>
    </>
  )
}

export default ComplementSection
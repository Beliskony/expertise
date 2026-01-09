import {
  Target,
  Eye,
  Award,
  CheckCircle,
  Lightbulb,
  Users,
  Globe,
  Shield,
  Heart,
} from "lucide-react"

const ComplementSection = () => {
  return (
    <>
      {/* Mission & Vision - Version Expert Indépendant */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Personnelle */}
            <div className="border-2 border-[#d4c5a9] rounded-xl shadow-lg p-8 space-y-6 bg-white hover:border-[#1a4d2e] hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1a4d2e] flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1a4d2e]">Ma Mission</h2>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  <strong>Accompagner personnellement</strong> chaque organisation dans sa transition vers des pratiques durables, 
                  en fournissant des évaluations environnementales et sociales <strong>sur mesure</strong>, conformes aux standards internationaux.
                </p>

                <div className="p-4 bg-[#d4c5a9]/10 rounded-lg border-l-4 border-[#1a4d2e]">
                  <p className="text-gray-700 italic">
                    "Je m'engage à être votre partenaire de confiance, garantissant une expertise directe 
                    sans intermédiaire pour des résultats concrets et durables."
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Personnelle */}
            <div className="border-2 border-[#d4c5a9] rounded-xl shadow-lg p-8 space-y-6 bg-white hover:border-[#1a4d2e] hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#6b8e23] flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Mes Valeurs Personnelles */}
      <section className="py-20 bg-[#d4c5a9]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1a4d2e] mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mes <span className="text-[#1a4d2e]">Valeurs</span> Professionnelles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Les principes qui guident mon travail et ma relation avec chaque client
              </p>
            </div>

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
                <div
                  key={index}
                  className="group bg-white border-2 border-[#d4c5a9] rounded-xl p-6 hover:border-[#1a4d2e] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gray-300">{count}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1a4d2e] transition-colors">
                    {title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{text}</p>

                  <div className="mt-6 pt-4 border-t border-[#d4c5a9] group-hover:border-[#1a4d2e] transition-colors">
                    <span className="text-xs text-gray-500 font-medium">
                      Engagement personnel
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Témoignage */}
            <div className="mt-16 bg-gradient-to-r from-[#1a4d2e] to-[#6b8e23] rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xl italic mb-4">
                    "Le Dr. Dupont a transformé notre approche de la durabilité. Son expertise directe et son engagement personnel ont été déterminants pour notre certification RSPO."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Directeur Général</p>
                      <p className="text-white/80 text-sm">Agro-industrie en Côte d'Ivoire</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 text-center">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-white/90">Clients satisfaits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ComplementSection
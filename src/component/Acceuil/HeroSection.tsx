import { Link } from 'react-router-dom'
import { Calendar, Award, MapPin, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-8"
    >
      {/* Background avec overlay plus professionnel */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/images/heroSection.webp"
          alt="Expert en durabilité"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-emerald-900/85 via-emerald-800/60 to-teal-900/70" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 items-center">
          
          {/* Côté gauche : Photo et infos personnelles */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Photo de l'expert */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative mb-8"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src="/images/personne/1.jpg" 
                  alt="Hermann"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Informations personnelles */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl w-full max-w-md"
            >
              <h3 className="font-bold text-xl text-[#1a4d2e] mb-4">Mon Profil Professionnel</h3>
              
              <div className="space-y-3">
                {[
                  { icon: Award, label: "Années d'expérience", value: "18 années" },
                  { icon: Calendar, label: "Spécialisations", value: "RSPO, ISO, SMETA" },
                  { icon: MapPin, label: "Zone d'intervention", value: "Afrique, Europe, Asie" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div 
                      whileHover={{ rotate: 15 }}
                      className="p-2 bg-[#1a4d2e]/10 rounded-lg"
                    >
                      <item.icon className="w-5 h-5 text-[#1a4d2e]" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-600">{item.label}</p>
                      <p className="font-semibold text-gray-900">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Côté droit : Présentation et CTA */}
          <div className="space-y-8 text-center lg:text-left py-8">
            {/* Titre principal avec nom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.h1 
                className="text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight"
              >
                BROU Assoua
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-emerald-300"
                >
                  {" Hermann"}
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="block text-xl md:text-2xl text-emerald-200 mt-4"
                >
                  Expertise environnemental et programme de durabilité
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Description personnelle */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="space-y-4"
            >
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-lg text-emerald-50 leading-relaxed"
              >
                Avec 18 années d'expertise dans l'évaluation environnementale et sociale, 
                j'accompagne les organisations vers l'excellence en matière de durabilité. 
                Mon approche personnalisée combine rigueur technique et accompagnement sur mesure.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="text-emerald-100 font-semibold"
              >
                <span className="text-emerald-300">Expertises principales :</span><br/>
                  Évaluations Environnementales & Sociales, Suivi Environnementales & Sociales, Appui à la mise en oeuvre du programme de durabilité.
                  Conformité RSPO, ISO, SMETA, BIO(UE, USA, NOP)
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Link 
                to="/services" 
                className="bg-white text-[#1a4d2e] hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Découvrir mes services
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.span>
              </Link>
              
              <Link 
                to="/contact" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl transition-all text-center"
              >
                Me contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection
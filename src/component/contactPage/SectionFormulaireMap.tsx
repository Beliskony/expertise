import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, User, Building, MessageSquare, Calendar, FileText, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const SectionFormulaireMap = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    urgency: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Ici vous ajouteriez la logique d'envoi du formulaire
  }

  return (
    <>
      {/* Hero Section Contact */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-32 pb-20 min-h-[50vh] flex items-center justify-center bg-linear-to-br from-[#1a4d2e]/90 via-[#1a4d2e]/80 to-[#6b8e23]/85 text-white"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Discutons de <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-emerald-300"
              >
                Votre Projet
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-emerald-50/90 max-w-2xl mx-auto leading-relaxed"
            >
              En tant qu'expert indépendant, je vous propose un accompagnement personnalisé 
              pour vos besoins en certification et durabilité. Contactez-moi directement pour une consultation.
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-8 pt-8"
            >
              {[
                { value: "24h", label: "Réponse garantie" },
                { value: "Gratuit", label: "Premier diagnostic" },
                { value: "100%", label: "Accompagnement direct" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-emerald-300">{stat.value}</div>
                  <div className="text-sm text-emerald-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Form + Infos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Mes Coordonnées Personnelles */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="border-2 border-[#d4c5a9] rounded-xl p-6 bg-white shadow-sm space-y-6 hover:border-[#1a4d2e]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="p-2 bg-[#1a4d2e] rounded-lg"
                  >
                    <User className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#1a4d2e]">Contactez-moi Directement</h3>
                </div>

                {[
                  { 
                    icon: Mail, 
                    title: "Email Professionnel", 
                    value: "hermannassoua@yahoo.fr, hermannassoua@gmail.com ",
                    link: "mailto:hermannassoua@gmail.com",
                    color: "bg-[#1a4d2e]/10"
                  },
                  { 
                    icon: Phone, 
                    title: "Téléphone Mobile", 
                    value: "(00225) 01 01 10 79 83 / 07 09 21 37 51",
                    link: "tel:+2250101107983",
                    color: "bg-[#6b8e23]/10"
                  },
                  { 
                    icon: MapPin, 
                    title: "Bureau Principal", 
                    value: "Abidjan, Côte d'Ivoire",
                    link: "https://maps.google.com",
                    color: "bg-[#ff6347]/10"
                  },
                  { 
                    icon: Clock, 
                    title: "Disponibilités", 
                    value: "Lun-Ven : 9h-18h\nConsultations sur RDV",
                    link: null,
                    color: "bg-[#d4c5a9]/20"
                  },
                ].map(({ icon: Icon, title, value, link, color }, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-4 group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-[#1a4d2e]" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">{title}</p>
                      {link ? (
                        <a 
                          href={link} 
                          className="text-[#1a4d2e] hover:text-[#ff6347] transition-colors font-medium text-sm leading-tight wrap-break-words"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Avantages du Contact Direct */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="border-2 border-[#d4c5a9] rounded-xl p-6 bg-linear-to-br from-[#1a4d2e]/5 to-transparent hover:border-[#1a4d2e]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="p-2 bg-[#ff6347] rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                  </motion.div>
                  <h4 className="font-bold text-[#1a4d2e]">Pourquoi me contacter ?</h4>
                </div>
                
                <ul className="space-y-3">
                  {[
                    { text: "Consultation initiale gratuite de 30 min", icon: "✓" },
                    { text: "Expertise directe sans intermédiaire", icon: "✓" },
                    { text: "Réponse personnalisée sous 24h", icon: "✓" },
                    { text: "Devis transparent et détaillé", icon: "✓" },
                    { text: "Suivi personnalisé tout au long du projet", icon: "✓" },
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.2 }}
                        className="w-5 h-5 rounded-full bg-[#1a4d2e] text-white flex items-center justify-center text-xs mt-0.5"
                      >
                        {item.icon}
                      </motion.span>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Disponibilités */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
                className="border-2 border-[#d4c5a9] rounded-xl p-6 bg-white hover:border-[#1a4d2e]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-[#1a4d2e]" />
                  <h4 className="font-bold text-[#1a4d2e]">Disponibilités</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Prochaines créneaux disponibles :</p>
                  <div className="flex flex-wrap gap-2">
                    {["Lun 10h", "Mar 14h", "Mer 11h", "Jeu 16h", "Ven 9h"].map((slot, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1.5 bg-[#d4c5a9]/20 hover:bg-[#1a4d2e] hover:text-white text-sm rounded-lg transition-colors"
                      >
                        {slot}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Formulaire de Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="lg:col-span-2 border-2 border-[#d4c5a9] rounded-xl shadow-xl p-8 bg-white hover:border-[#1a4d2e]"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className="p-3 bg-[#1a4d2e] rounded-xl"
                >
                  <Send className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Demander une <span className="text-[#1a4d2e]">Consultation</span>
                  </h2>
                  <p className="text-gray-600">Je vous réponds personnellement sous 24h</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Nom complet *", icon: User, field: "name", placeholder: "Votre nom et prénom" },
                    { label: "Email *", icon: Mail, field: "email", placeholder: "email@entreprise.com", type: "email" },
                  ].map((field, index) => (
                    <motion.div
                      key={field.field}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="space-y-2"
                    >
                      <label className="font-medium text-gray-700 flex items-center gap-2">
                        <field.icon className="w-4 h-4" />
                        {field.label}
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type={field.type || "text"}
                        className="w-full px-4 py-3 border-2 border-[#d4c5a9] rounded-lg focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 transition-all placeholder-gray-400"
                        value={formData[field.field as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.field]: e.target.value })}
                        required={field.label.includes('*')}
                        placeholder={field.placeholder}
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Téléphone", icon: Phone, field: "phone", placeholder: "0707070707" },
                    { label: "Organisation", icon: Building, field: "company", placeholder: "Votre entreprise ou organisation" },
                  ].map((field, index) => (
                    <motion.div
                      key={field.field}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + 0.1 * index }}
                      className="space-y-2"
                    >
                      <label className="font-medium text-gray-700 flex items-center gap-2">
                        <field.icon className="w-4 h-4" />
                        {field.label}
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        className="w-full px-4 py-3 border-2 border-[#d4c5a9] rounded-lg focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 transition-all placeholder-gray-400"
                        value={formData[field.field as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.field]: e.target.value })}
                        placeholder={field.placeholder}
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Type de besoin *", icon: FileText, field: "service", isSelect: true },
                    { label: "Urgence du projet", icon: Calendar, field: "urgency", isSelect: true },
                  ].map((field, index) => (
                    <motion.div
                      key={field.field}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + 0.1 * index }}
                      className="space-y-2"
                    >
                      <label className="font-medium text-gray-700 flex items-center gap-2">
                        <field.icon className="w-4 h-4" />
                        {field.label}
                      </label>
                      <motion.select
                        whileFocus={{ scale: 1.02 }}
                        className="w-full px-4 py-3 border-2 border-[#d4c5a9] rounded-lg focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 transition-all bg-white"
                        value={formData[field.field as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.field]: e.target.value })}
                        required={field.label.includes('*')}
                      >
                        {field.field === "service" ? (
                          <>
                            <option value="">Sélectionnez votre besoin</option>
                            <option value="consultation">Consultation initiale</option>
                            <option value="plan">Plans de Gestion Environnementale et Sociale</option>
                            <option value="audit">Audit environnemental/social</option>
                            <option value="EESS">Évaluations Environnementales Stratégiques</option>
                            <option value="formation">Formation/Coaching</option>
                            <option value="eies">Étude d'impact (EIES)</option>
                            <option value="strategie">Stratégie de durabilité</option>
                            <option value="autre">Autre demande</option>
                          </>
                        ) : (
                          <>
                            <option value="">Délai souhaité</option>
                            <option value="urgent">Urgent (sous 1 mois)</option>
                            <option value="court">Court terme (1-3 mois)</option>
                            <option value="moyen">Moyen terme (3-6 mois)</option>
                            <option value="long">Long terme (6+ mois)</option>
                          </>
                        )}
                      </motion.select>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-2"
                >
                  <label className="font-medium text-gray-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Décrivez votre projet *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-4 py-3 border-2 border-[#d4c5a9] rounded-lg min-h-40 focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 transition-all placeholder-gray-400"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Décrivez votre projet, vos objectifs, vos contraintes et vos questions spécifiques..."
                  />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#d4c5a9]"
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#1a4d2e] text-white font-semibold hover:bg-[#163e24] shadow-lg hover:shadow-xl min-w-50 justify-center"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.span>
                    Envoyer ma demande
                  </motion.button>
                  <p className="text-sm text-gray-500 text-center">
                    <span className="font-medium text-[#1a4d2e]">Garantie :</span> Réponse personnelle dans les 24h ouvrables
                  </p>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionFormulaireMap
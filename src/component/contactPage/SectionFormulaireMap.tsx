import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, User, Building, MessageSquare, Calendar, FileText, CheckCircle } from "lucide-react"

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
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#1a4d2e]/90 via-[#1a4d2e]/80 to-[#6b8e23]/85 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
       

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discutons de <span className="text-emerald-300">Votre Projet</span>
            </h1>

            <p className="text-xl text-emerald-50/90 max-w-2xl mx-auto leading-relaxed">
              En tant qu'expert indépendant, je vous propose un accompagnement personnalisé 
              pour vos besoins en certification et durabilité. Contactez-moi directement pour une consultation.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300">24h</div>
                <div className="text-sm text-emerald-200">Réponse garantie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300">Gratuit</div>
                <div className="text-sm text-emerald-200">Premier diagnostic</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300">100%</div>
                <div className="text-sm text-emerald-200">Accompagnement direct</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Infos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Mes Coordonnées Personnelles */}
            <div className="space-y-6">
              <div className="border-2 border-[#d4c5a9] rounded-xl p-6 bg-white shadow-sm space-y-6 hover:border-[#1a4d2e] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#1a4d2e] rounded-lg">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a4d2e]">Contactez-moi Directement</h3>
                </div>

                {[
                  { 
                    icon: Mail, 
                    title: "Email Professionnel", 
                    value: "jean.dupont@expert-durabilite.com",
                    link: "mailto:jean.dupont@expert-durabilite.com",
                    color: "bg-[#1a4d2e]/10"
                  },
                  { 
                    icon: Phone, 
                    title: "Téléphone Mobile", 
                    value: "+33 6 12 34 56 78",
                    link: "tel:+33612345678",
                    color: "bg-[#6b8e23]/10"
                  },
                  { 
                    icon: MapPin, 
                    title: "Bureau Principal", 
                    value: "123 Avenue de la Durabilité, 75000 Paris",
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
                  <div key={i} className="flex gap-4 group">
                    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-[#1a4d2e]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">{title}</p>
                      {link ? (
                        <a 
                          href={link} 
                          className="text-[#1a4d2e] hover:text-[#ff6347] transition-colors font-medium text-sm leading-tight break-words"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Avantages du Contact Direct */}
              <div className="border-2 border-[#d4c5a9] rounded-xl p-6 bg-gradient-to-br from-[#1a4d2e]/5 to-transparent hover:border-[#1a4d2e] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#ff6347] rounded-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
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
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-[#1a4d2e] text-white flex items-center justify-center text-xs mt-0.5">
                        {item.icon}
                      </span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disponibilités */}
              <div className="border-2 border-[#d4c5a9] rounded-xl p-6 bg-white hover:border-[#1a4d2e] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-[#1a4d2e]" />
                  <h4 className="font-bold text-[#1a4d2e]">Disponibilités</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Prochaines créneaux disponibles :</p>
                  <div className="flex flex-wrap gap-2">
                    {["Lun 10h", "Mar 14h", "Mer 11h", "Jeu 16h", "Ven 9h"].map((slot, i) => (
                      <button
                        key={i}
                        className="px-3 py-1.5 bg-[#d4c5a9]/20 hover:bg-[#1a4d2e] hover:text-white text-sm rounded-lg transition-colors"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de Contact */}
            <div className="lg:col-span-2 border-2 border-[#d4c5a9] rounded-xl shadow-xl p-8 bg-white hover:border-[#1a4d2e] transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#1a4d2e] rounded-xl">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Demander une <span className="text-[#1a4d2e]">Consultation</span>
                  </h2>
                  <p className="text-gray-600">Je vous réponds personnellement sous 24h</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-medium text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nom complet *
                    </label>
                    <input
                      className="w-full px-4 py-3 border-2 border-[#d4c5a9] rounded-lg focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 transition-all placeholder-gray-400"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Votre nom et prénom"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-medium text-gray-700 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-[#d4c5a9] rounded-lg focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 transition-all placeholder-gray-400"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="email@entreprise.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-medium text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Téléphone
                    </label>
                    <input
                      className="w-full px-4 py-3 border-2 border-[#d4c5a9] rounded-lg focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 transition-all placeholder-gray-400"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-medium text-gray-700 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Organisation
                    </label>
                    <input
                      className="w-full px-4 py-3 border-2 border-[#d4c5a9] rounded-lg focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 transition-all placeholder-gray-400"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Votre entreprise ou organisation"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-medium text-gray-700 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Type de besoin *
                    </label>
                    <select
                      className="w-full px-4 py-3 border-2 border-[#d4c5a9] rounded-lg focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 transition-all bg-white"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">Sélectionnez votre besoin</option>
                      <option value="consultation">Consultation initiale</option>
                      <option value="audit">Audit environnemental/social</option>
                      <option value="rspo">Certification RSPO</option>
                      <option value="iso">Certification ISO</option>
                      <option value="formation">Formation/Coaching</option>
                      <option value="eies">Étude d'impact (EIES)</option>
                      <option value="strategie">Stratégie de durabilité</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-medium text-gray-700 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Urgence du projet
                    </label>
                    <select
                      className="w-full px-4 py-3 border-2 border-[#d4c5a9] rounded-lg focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 transition-all bg-white"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    >
                      <option value="">Délai souhaité</option>
                      <option value="urgent">Urgent (sous 1 mois)</option>
                      <option value="court">Court terme (1-3 mois)</option>
                      <option value="moyen">Moyen terme (3-6 mois)</option>
                      <option value="long">Long terme (6+ mois)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-medium text-gray-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Décrivez votre projet *
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border-2 border-[#d4c5a9] rounded-lg min-h-40 focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 transition-all placeholder-gray-400"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Décrivez votre projet, vos objectifs, vos contraintes et vos questions spécifiques..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#d4c5a9]">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#1a4d2e] text-white font-semibold hover:bg-[#163e24] transition-colors shadow-lg hover:shadow-xl min-w-[200px] justify-center"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Envoyer ma demande
                  </button>
                  <p className="text-sm text-gray-500 text-center">
                    <span className="font-medium text-[#1a4d2e]">Garantie :</span> Réponse personnelle dans les 24h ouvrables
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionFormulaireMap
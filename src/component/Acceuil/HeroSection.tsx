import { Link } from 'react-router-dom'
import { Calendar, Award, MapPin, ChevronRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8">
      {/* Background avec overlay plus professionnel */}
      <div className="absolute inset-0 z-0">
        <img
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
            <div className="relative mb-8">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="/images/personne/1.jpg" 
                  alt="Hermann"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Informations personnelles */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl w-full max-w-md">
              <h3 className="font-bold text-xl text-[#1a4d2e] mb-4">Mon Profil Professionnel</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#1a4d2e]/10 rounded-lg">
                    <Award className="w-5 h-5 text-[#1a4d2e]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Années d'expérience</p>
                    <p className="font-semibold text-gray-900">18 années</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#1a4d2e]/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-[#1a4d2e]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Spécialisations</p>
                    <p className="font-semibold text-gray-900">RSPO, ISO, SMETA</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#1a4d2e]/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#1a4d2e]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Zone d'intervention</p>
                    <p className="font-semibold text-gray-900">Afrique, Europe, Asie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Côté droit : Présentation et CTA */}
          <div className="space-y-8 text-center lg:text-left py-8">
            {/* Titre principal avec nom */}
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
              BROU Assoua<span className="text-emerald-300"> Hermann</span>
              <span className="block text-xl md:text-2xl text-emerald-200 mt-4">
                Expertise environnemental et programme de durabilité
              </span>
            </h1>

            {/* Description personnelle */}
            <div className="space-y-4">
              <p className="text-lg text-emerald-50 leading-relaxed">
                Avec 18 années d'expertise dans l'évaluation environnementale et sociale, 
                j'accompagne les organisations vers l'excellence en matière de durabilité. 
                Mon approche personnalisée combine rigueur technique et accompagnement sur mesure.
              </p>
              
              <p className="text-emerald-100 font-semibold">
                <span className="text-emerald-300">Expertises principales :</span><br/>
                  Évaluations Environnementales & Sociales, Suivi Environnementales & Sociales, Appui à la mise en oeuvre du programme de durabilité.
                  Conformité RSPO, ISO, SMETA, BIO(UE, USA, NOP)
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link 
                to="/services" 
                className="bg-white text-[#1a4d2e] hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Découvrir mes services
                <ChevronRight className="w-5 h-5" />
              </Link>
              
              <Link 
                to="/contact" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl transition-all text-center"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
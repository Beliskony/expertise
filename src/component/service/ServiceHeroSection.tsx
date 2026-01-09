import { CheckCircle, Target, Users } from 'lucide-react'

const ServiceHeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/services/hero-bg.jpg" // Remplacez par votre image
          alt="Expert en durabilité - Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d2e]/90 via-[#1a4d2e]/80 to-[#6b8e23]/85" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-10">
  

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Mes <span className="text-emerald-300">Services</span> d'Expertise
          </h1>

          {/* Description */}
          <p className="text-xl text-emerald-50/90 max-w-2xl mx-auto leading-relaxed">
            Un accompagnement personnalisé et direct pour vos projets de durabilité, 
            de l'audit initial à la certification finale.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="p-4 bg-white rounded-full mb-4">
                <Target className="w-8 h-8 text-[#1a4d2e]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Solutions Sur Mesure</h3>
              <p className="text-emerald-100/80 text-center text-sm">
                Chaque projet bénéficie d'une approche adaptée
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="p-4 bg-white rounded-full mb-4">
                <Users className="w-8 h-8 text-[#1a4d2e]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expertise Directe</h3>
              <p className="text-emerald-100/80 text-center text-sm">
                Contact direct avec l'expert, sans intermédiaire
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="p-4 bg-white rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-[#1a4d2e]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Suivi Personnalisé</h3>
              <p className="text-emerald-100/80 text-center text-sm">
                Engagement jusqu'à la certification et au-delà
              </p>
            </div>
          </div>



        </div>
      </div>


    </section>
  )
}

export default ServiceHeroSection
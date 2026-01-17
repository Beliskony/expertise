import { CheckCircle, Target, Users } from 'lucide-react'

const ServiceHeroSection = () => {
  return (
    <section className="relative min-h-[70vh] bg-linear-to-br from-[#1a4d2e] via-[#2d6a4f] to-[#6b8e23] text-white py-20 lg:py-28 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl z-20"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-emerald-400/10 rounded-full blur-3xl z-20"></div>
</div>
     
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-14">
        <div className="max-w-4xl mx-auto text-center space-y-7">
  

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-110 transition-transform cursor-pointer">
              <div className="p-4 bg-white rounded-full mb-4">
                <Target className="w-8 h-8 text-[#1a4d2e]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Solutions Sur Mesure</h3>
              <p className="text-emerald-100/80 text-center text-sm">
                Chaque projet bénéficie d'une approche adaptée
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-110 transition-transform cursor-pointer">
              <div className="p-4 bg-white rounded-full mb-4">
                <Users className="w-8 h-8 text-[#1a4d2e]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expertise Directe</h3>
              <p className="text-emerald-100/80 text-center text-sm">
                Contact direct avec l'expert, sans intermédiaire
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-110 transition-transform cursor-pointer">
              <div className="p-4 bg-white rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-[#1a4d2e]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Suivi Personnalisé</h3>
              <p className="text-emerald-100/80 text-center text-sm">
                Engagement jusqu'à la validation du projet et au-delà
              </p>
            </div>
          </div>



        </div>
      </div>


    </section>
  )
}

export default ServiceHeroSection
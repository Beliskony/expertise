// components/ActualitesHeroSection.tsx

const ActualitesHeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] bg-linear-to-br from-[#1a4d2e] via-[#2d6a4f] to-[#6b8e23] text-white py-20 lg:py-28 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-emerald-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[50vh]">
          
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
    
            {/* Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Actualités, 
              <span className="block text-emerald-300 mt-2">
                Conférences & Formations
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-emerald-50/90 mb-8 leading-relaxed">
              Retrouvez mes dernières interventions, événements à venir et opportunités 
              de formation dans le domaine de la durabilité environnementale et sociale.
            </p>

          </div>

          {/* Right Column - Image */}
          <div className="space-y-6">

                <img src="/images/personne/2.jpg" alt="" className="object-cover h-full w-full rounded-2xl shadow" />

          </div>

        </div>
      </div>

    </section>
  )
}

export default ActualitesHeroSection
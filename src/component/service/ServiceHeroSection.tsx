import { CheckCircle, Target, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const ServiceHeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-[70vh] bg-linear-to-br from-[#1a4d2e] via-[#2d6a4f] to-[#6b8e23] text-white py-20 lg:py-28 flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      
        {/* Decorative elements */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl z-20"
        ></motion.div>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: "spring", delay: 0.3 }}
          className="absolute bottom-10 left-10 w-60 h-60 bg-emerald-400/10 rounded-full blur-3xl z-20"
        ></motion.div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-14">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Mes <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-emerald-300"
              >
                Services
              </motion.span> d'Expertise
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl text-emerald-50/90 max-w-2xl mx-auto leading-relaxed"
          >
            Un accompagnement personnalisé et direct pour vos projets de durabilité, 
            de l'audit initial à la certification finale.
          </motion.p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {[
              {
                icon: Target,
                title: "Solutions Sur Mesure",
                description: "Chaque projet bénéficie d'une approche adaptée",
                delay: 0.9
              },
              {
                icon: Users,
                title: "Expertise Directe",
                description: "Contact direct avec l'expert, sans intermédiaire",
                delay: 1.0
              },
              {
                icon: CheckCircle,
                title: "Suivi Personnalisé",
                description: "Engagement jusqu'à la validation du projet et au-delà",
                delay: 1.1
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)"
                }}
                className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 bg-white rounded-full mb-4"
                >
                  <feature.icon className="w-8 h-8 text-[#1a4d2e]" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-emerald-100/80 text-center text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ServiceHeroSection
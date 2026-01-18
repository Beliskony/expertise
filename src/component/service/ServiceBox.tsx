import {
  CheckCircle,
  FileCheck,
  FileSearch,
  Layers,
  ShieldCheck,
} from "lucide-react"
import type { IServices } from "../../data/ServiceData"
import { useState } from "react"

interface Props {
  service: IServices
}

const ServiceBox = ({ service }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  // Icônes dynamiques
  const getIconComponent = (iconName: string) => {
    const iconClass = "w-6 h-6"
    switch (iconName) {
      case "Layers":
        return <Layers className={iconClass} />
      case "FileSearch":
        return <FileSearch className={iconClass} />
      case "FileCheck":
        return <FileCheck className={iconClass} />
      case "ShieldCheck":
        return <ShieldCheck className={iconClass} />
      default:
        return <FileSearch className={iconClass} />
    }
  }

  return (
    <div 
      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white hover:border-[#1a4d2e] hover:shadow-xl transition-all duration-300 p-6 hover:scale-[1.02] transform-gpu"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* En-tête avec icône */}
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-lg bg-[#1a4d2e]/10 text-[#1a4d2e] group-hover:bg-[#1a4d2e]/20 group-hover:scale-110 transition-all duration-300">
          {getIconComponent(service.icones)}
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Service {service.id}
          </span>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#1a4d2e] transition-colors mt-1">
            {service.title}
          </h2>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
        {service.description}
      </p>

      {/* Points clés */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[#1a4d2e] transition-colors duration-300">
          Points clés :
        </h3>
        <ul className="space-y-2">
          {service.points.slice(0, 4).map((point, index) => (
            <li 
              key={index} 
              className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <CheckCircle className="w-4 h-4 text-[#1a4d2e] mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Ligne décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#1a4d2e] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>

      {/* Effet de fond subtil au hover */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent to-[#1a4d2e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
  )
}

export default ServiceBox
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

  // Icônes dynamiques avec les bonnes couleurs
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

  // Couleur du service
  const getServiceColor = (id: number) => {
    switch (id) {
      case 1:
        return { bg: "bg-[#1a4d2e]", text: "text-[#1a4d2e]", light: "bg-[#1a4d2e]/10" }
      case 2:
        return { bg: "bg-[#6b8e23]", text: "text-[#6b8e23]", light: "bg-[#6b8e23]/10" }
      case 3:
        return { bg: "bg-[#ff6347]", text: "text-[#ff6347]", light: "bg-[#ff6347]/10" }
      default:
        return { bg: "bg-[#d4c5a9]", text: "text-[#d4c5a9]", light: "bg-[#d4c5a9]/10" }
    }
  }

  const colors = getServiceColor(service.id)

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl border-2 border-[#d4c5a9] bg-white hover:border-[#1a4d2e] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern on Hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${colors.bg}`}></div>
      
      <div className="relative grid md:grid-cols-2 gap-8 p-8">
        {/* Left Column - Image & Visual */}
        <div className="space-y-6">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative h-56 overflow-hidden rounded-xl">
              {service.images ? (
                <img
                  src={service.images}
                  alt={service.imgTitle}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isHovered ? "scale-110" : "scale-100"
                  }`}
                />
              ) : (
                <div className={`w-full h-full ${colors.light} flex items-center justify-center`}>
                  <div className="text-center p-8">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${colors.bg} flex items-center justify-center`}>
                      {getIconComponent(service.icones)}
                    </div>
                    <p className="text-gray-600 font-medium">{service.title}</p>
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Service Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg ${colors.bg}`}>
                  {service.category || "Service"}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#faf8f5] p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Années expérience</div>
            </div>
            <div className="bg-[#faf8f5] p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Projets réalisés</div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className={`p-3 rounded-xl ${colors.light}`}>
                  {getIconComponent(service.icones)}
                </div>
                <span className={`text-sm font-semibold ${colors.text}`}>
                  Service {service.id}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-[#1a4d2e] transition-colors">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {service.description}
          </p>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Ce que vous obtenez :</h3>
            <ul className="space-y-3">
              {service.points.slice(0, 4).map((point, index) => (
                <li key={index} className="flex items-start gap-3 group/item">
                  <div className={`p-1 rounded-full mt-1 ${colors.light}`}>
                    <CheckCircle className={`w-4 h-4 ${colors.text}`} />
                  </div>
                  <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          {service.additionalInfo && (
            <div className="p-4 bg-[#faf8f5] rounded-lg border border-[#d4c5a9]">
              <h4 className="font-semibold text-gray-900 mb-2">Information complémentaire :</h4>
              <p className="text-sm text-gray-600">{service.additionalInfo}</p>
            </div>
          )}


        </div>
      </div>

      {/* Bottom Decoration */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </div>
  )
}

export default ServiceBox
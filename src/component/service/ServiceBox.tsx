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



  return (
    <div 
      className="group relative overflow-hidden rounded-2xl border-2 border-[#d4c5a9] bg-white hover:border-[#1a4d2e] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern on Hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500"> </div>
      
      <div className="relative grid md:grid-cols-2 gap-8 p-8">
        {/* Left Column - Image & Visual */}
        <div className="space-y-6 gap-y-2.5">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative h-56 overflow-hidden rounded-xl">
              {service.image1 ? (
                <img
                  src={service.image1}
                  alt='image1'
                  className="w-full h-full object-cover transition-transform duration-700" 
                />
              ) : (
                <div className= "w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-gray-600 font-medium">{service.title}</p>
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <div className="relative h-56 overflow-hidden rounded-xl">
              {service.image2 ? (
                <img
                  src={service.image2}
                  alt='image2'
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              ) : (
                <div className= "w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-gray-600 font-medium">{service.title}</p>
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
            </div>
          </div>

        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className={`p-3 rounded-xl `}>
                  {getIconComponent(service.icones)}
                </div>
                <span className="text-sm font-semibold">
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
                  <div className={`p-1 rounded-full mt-1 `}>
                    <CheckCircle className={`w-4 h-4 `} />
                  </div>
                  <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>




        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}

export default ServiceBox
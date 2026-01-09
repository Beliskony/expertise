import { CheckCircle } from "lucide-react"
import type { FC } from "react"

export interface ICardSocial {
  title: string
  subtitle: string
  description: string
  items: string[]
}

const CardSocial: FC<ICardSocial> = ({ title, subtitle, description, items }) => {
  return (
    <div className="border-2 border-[#d4c5a9] rounded-xl p-6 space-y-4 bg-white hover:border-[#1a4d2e] hover:shadow-lg transition-all duration-300">
      <div>
        <h3 className="font-bold text-xl text-[#1a4d2e]">{title}</h3>
        <p className="text-sm text-[#6b8e23] font-medium">{subtitle}</p>
      </div>

      <p className="text-gray-600">{description}</p>

      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2 group">
            <CheckCircle className="w-5 h-5 text-[#1a4d2e] mt-1 group-hover:text-[#ff6347] transition-colors" />
            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardSocial
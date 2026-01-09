import { CheckCircle } from "lucide-react"
import type { FC } from "react"

export interface ICardISO {
  title: string
  subtitle: string
  items: string[]
}

const CardIso: FC<ICardISO> = ({ title, subtitle, items }) => {
  return (
    <div className="border-2 border-[#d4c5a9] rounded-xl p-6 bg-white hover:border-[#1a4d2e] hover:shadow-lg transition-all duration-300">
      <h3 className="font-bold text-xl mb-1 text-[#1a4d2e]">{title}</h3>
      <p className="text-sm text-[#6b8e23] mb-4 font-medium">{subtitle}</p>

      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 group">
            <CheckCircle className="w-4 h-4 text-[#1a4d2e] mt-1 group-hover:text-[#ff6347] transition-colors" />
            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CardIso
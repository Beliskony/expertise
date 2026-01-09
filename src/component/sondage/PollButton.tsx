// PollButton.tsx (version simplifiée)
import { MessageSquare } from 'lucide-react'

interface PollButtonProps {
  onClick: () => void
}

const PollButton: React.FC<PollButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-[#1a4d2e] text-white rounded-xl font-medium hover:bg-[#0e3d1f] transition-colors shadow-lg"
      aria-label="Participer au sondage"
    >
      <MessageSquare className="w-5 h-5" />
      <span>Sondage</span>
    </button>
  )
}

export default PollButton
import { useState, useEffect } from 'react'
import { X, User, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react'

interface PollModalProps {
  isVisible: boolean
  onClose: () => void
  onSubmit: (data: {
    name: string
    phone: string
    rating: number
    feedback: string
  }) => void
  eventName?: string
}

const PollModal: React.FC<PollModalProps> = ({ 
  isVisible, 
  onClose, 
  onSubmit,
}) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Réinitialiser le formulaire quand le modal s'ouvre
  useEffect(() => {
    if (isVisible) {
      setName('')
      setPhone('')
      setRating(0)
      setFeedback('')
      setIsSubmitting(false)
      setIsSubmitted(false)
    }
  }, [isVisible])

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  // Validation basique
  if (!name.trim() || !phone.trim() || rating === 0) {
    return
  }

  setIsSubmitting(true)

  try {
    const response = await fetch("https://hermanbackend.onrender.com/createPoll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        rating,
        feedback,
      }),
    })

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi du formulaire")
    }

    // Optionnel : récupérer la réponse backend
    // const data = await response.json()

    setIsSubmitted(true)

    // Fermer automatiquement après 3 secondes
    setTimeout(() => {
      onClose()
    }, 3000)

  } catch (error) {
    console.error(error)
    // ici tu peux afficher un message d'erreur à l'utilisateur
  } finally {
    setIsSubmitting(false)
  }
}


  const handleStarClick = (value: number) => {
    setRating(value)
  }

  const handleStarHover = (value: number) => {
    setHoverRating(value)
  }

  const handleStarLeave = () => {
    setHoverRating(0)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-0">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden animate-slideUp">
        {/* En-tête */}
        <div className="bg-linear-to-r from-[#1a4d2e] to-[#6b8e23] p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {isSubmitted ? 'Merci !' : 'Évaluation de l\'événement'}
                </h3>
                <p className="text-white/90 text-sm">
                  {isSubmitted ? 'Votre avis a été enregistré' : `Donnez votre avis sur l'evement`}
                </p>
              </div>
            </div>
            {!isSubmitted && (
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            )}
          </div>
        </div>

        {/* Contenu du formulaire */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
              {/* Informations personnelles */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                    Nom & Prénom *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre nom complet"
                      className="w-full pl-10 pr-4 py-3 border border-[#d4c5a9] rounded-xl focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-900 font-medium mb-2">
                    Contact (téléphone) *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+225 XX XX XX XX"
                      className="w-full pl-10 pr-4 py-3 border border-[#d4c5a9] rounded-xl focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Pour vous recontacter si nécessaire
                  </p>
                </div>
              </div>

              {/* Évaluation sur 10 */}
              <div className="pt-4 border-t border-gray-100">
                <label className="block text-gray-900 font-medium mb-4">
                  Notez l'evement sur 10 *
                </label>
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => handleStarHover(star)}
                      onMouseLeave={handleStarLeave}
                      className="focus:outline-none"
                      aria-label={`Noter ${star}/10`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        star <= (hoverRating || rating)
                          ? 'bg-[#ff6347] text-white transform scale-105'
                          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                      }`}>
                        <span className="text-lg font-bold">{star}</span>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {rating === 0 ? 'Sélectionnez une note' : `${rating}/10`}
                  </div>
                  <div className="text-sm text-gray-600">
                    {rating === 0 ? '' : 
                     rating <= 3 ? 'Insatisfait' :
                     rating <= 5 ? 'Passable' :
                     rating <= 7 ? 'Bien' :
                     rating <= 9 ? 'Très bien' : 'Excellent'}
                  </div>
                </div>
              </div>

              {/* Commentaires */}
              <div className="pt-4 border-t border-gray-100">
                <label htmlFor="feedback" className="block text-gray-900 font-medium mb-3">
                  Qu'avez-vous pensé de l'événement ?
                </label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Partagez votre expérience, vos suggestions d'amélioration..."
                  className="w-full p-4 border border-[#d4c5a9] rounded-xl focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 min-h-32 resize-none"
                  maxLength={500}
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-500">
                    Votre feedback nous aide à améliorer
                  </p>
                  <span className="text-sm text-gray-500">
                    {feedback.length}/500
                  </span>
                </div>
              </div>

              {/* Bouton d'envoi */}
              <div className="pt-6 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !phone.trim() || rating === 0}
                  className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all ${
                    (!name.trim() || !phone.trim() || rating === 0)
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-[#1a4d2e] text-white hover:bg-[#0e3d1f] active:scale-[0.98]'
                  } ${isSubmitting ? 'opacity-75' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer mon évaluation</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        ) : (
          /* Message de succès */
          <div className="p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-r from-[#1a4d2e]/20 to-[#6b8e23]/20 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-[#1a4d2e]" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">
              Merci {name} !
            </h4>
            <p className="text-gray-600 mb-2">
              Votre évaluation a été enregistrée avec succès.
            </p>
            <p className="text-gray-500 text-sm">
              Nous vous remercions pour votre participation.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400">
                Le formulaire se fermera automatiquement...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PollModal
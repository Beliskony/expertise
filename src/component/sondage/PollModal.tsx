import { useState, useEffect } from 'react'
import { X, Star, ThumbsUp, MessageSquare, Send, CheckCircle, User, Phone } from 'lucide-react'

interface PollModalProps {
  isVisible: boolean
  onClose: () => void
  onSubmit: (data: {
    name: string
    phone: string
    rating: number
    feedback: string
    recommend: boolean
  }) => void
  eventName?: string
}

const PollModal: React.FC<PollModalProps> = ({ 
  isVisible, 
  onClose, 
  onSubmit,
  eventName = "cette conférence"
}) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [recommend, setRecommend] = useState<boolean | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [currentStep, setCurrentStep] = useState(1) // 1: Infos, 2: Évaluation, 3: Succès

  // Réinitialiser le formulaire quand le modal s'ouvre
  useEffect(() => {
    if (isVisible) {
      setName('')
      setPhone('')
      setRating(0)
      setFeedback('')
      setRecommend(null)
      setIsSubmitted(false)
      setShowSuccess(false)
      setCurrentStep(1)
    }
  }, [isVisible])

  const validateStep1 = () => {
    return name.trim() !== '' && phone.trim() !== ''
  }

  const validateStep2 = () => {
    return rating > 0 && recommend !== null
  }

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2)
    }
  }

  const handlePrevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep1() && validateStep2()) {
      onSubmit({
        name,
        phone,
        rating,
        feedback,
        recommend: recommend!
      })
      setIsSubmitted(true)
      setShowSuccess(true)
      setCurrentStep(3)
      
      // Fermer automatiquement après 5 secondes
      setTimeout(() => {
        onClose()
      }, 5000)
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
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-[#d4c5a9] overflow-hidden animate-slideUp">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-[#1a4d2e] to-[#6b8e23] p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {currentStep === 1 ? 'Vos informations' : 
                     currentStep === 2 ? 'Évaluation' : 
                     'Merci !'}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {currentStep === 1 ? 'Pour mieux vous connaître' :
                     currentStep === 2 ? `Aidez-nous à améliorer ${eventName}` :
                     'Votre avis est précieux'}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Indicateur de progression */}
          <div className="px-6 pt-4">
            <div className="flex items-center justify-between">
              <div className={`text-sm font-medium ${currentStep >= 1 ? 'text-[#1a4d2e]' : 'text-gray-400'}`}>
                Étape 1: Informations
              </div>
              <div className="w-8 h-1 bg-gray-300"></div>
              <div className={`text-sm font-medium ${currentStep >= 2 ? 'text-[#1a4d2e]' : 'text-gray-400'}`}>
                Étape 2: Évaluation
              </div>
              <div className="w-8 h-1 bg-gray-300"></div>
              <div className={`text-sm font-medium ${currentStep === 3 ? 'text-[#1a4d2e]' : 'text-gray-400'}`}>
                Terminé
              </div>
            </div>
          </div>

          {/* Contenu du formulaire */}
          <form onSubmit={handleSubmit} className="p-6">
            {/* Étape 1: Informations personnelles */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                    Votre nom *
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
                  <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2">
                    Votre numéro de téléphone *
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
                      placeholder="+XX XXX XXX XXX"
                      className="w-full pl-10 pr-4 py-3 border border-[#d4c5a9] rounded-xl focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Nous ne partagerons jamais vos informations personnelles
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!validateStep1()}
                  className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                    validateStep1()
                      ? 'bg-[#1a4d2e] text-white hover:bg-[#0e3d1f]'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continuer
                  <Send className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Étape 2: Évaluation */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="mb-8">
                  <label className="block text-gray-900 font-semibold mb-4">
                    Comment évaluez-vous {eventName} ?
                  </label>
                  <div className="flex justify-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleStarHover(star)}
                        onMouseLeave={handleStarLeave}
                        className="focus:outline-none"
                        aria-label={`Noter ${star} étoile${star > 1 ? 's' : ''}`}
                      >
                        <Star
                          className={`w-10 h-10 transition-colors ${
                            star <= (hoverRating || rating)
                              ? 'fill-[#ff6347] text-[#ff6347]'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    {rating === 0 ? 'Sélectionnez une note' : 
                     rating <= 2 ? 'Insatisfait' :
                     rating === 3 ? 'Satisfait' :
                     rating === 4 ? 'Très satisfait' : 'Excellent'}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-gray-900 font-semibold mb-4">
                    Recommanderiez-vous cette conférence à vos collègues ?
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setRecommend(true)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${
                        recommend === true
                          ? 'border-[#1a4d2e] bg-[#1a4d2e]/10 text-[#1a4d2e]'
                          : 'border-[#d4c5a9] hover:border-[#1a4d2e] hover:bg-[#1a4d2e]/5'
                      }`}
                    >
                      <ThumbsUp className="w-5 h-5" />
                      <span>Oui, certainement</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setRecommend(false)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${
                        recommend === false
                          ? 'border-[#ff6347] bg-[#ff6347]/10 text-[#ff6347]'
                          : 'border-[#d4c5a9] hover:border-[#ff6347] hover:bg-[#ff6347]/5'
                      }`}
                    >
                      <X className="w-5 h-5" />
                      <span>Probablement pas</span>
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="feedback" className="block text-gray-900 font-semibold mb-3">
                    Vos commentaires (optionnel)
                  </label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Qu'avez-vous particulièrement apprécié ? Que pourrions-nous améliorer ?"
                    className="w-full p-4 border border-[#d4c5a9] rounded-xl focus:outline-none focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 min-h-32 resize-none"
                    maxLength={500}
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {feedback.length}/500 caractères
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="flex-1 py-3 rounded-xl font-semibold border-2 border-[#d4c5a9] text-gray-700 hover:bg-[#d4c5a9]/10 transition-all"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    disabled={!validateStep2()}
                    className={`flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                      validateStep2()
                        ? 'bg-[#1a4d2e] text-white hover:bg-[#0e3d1f]'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Envoyer
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Étape 3: Succès */}
            {currentStep === 3 && (
              <div className="p-4 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#1a4d2e]/20 to-[#6b8e23]/20 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-[#1a4d2e]" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Merci {name} !
                </h4>
                <p className="text-gray-600 mb-4">
                  Votre évaluation a été enregistrée et nous aidera à améliorer nos prochains événements.
                </p>
                <p className="text-sm text-gray-500">
                  Nous vous recontacterons si nécessaire au {phone}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default PollModal
import { useState, useEffect, useRef } from 'react'

export const usePollModal = () => {
  const [isPollVisible, setIsPollVisible] = useState(false)
  const [hasSubmittedPoll, setHasSubmittedPoll] = useState(false)
  const [pollCooldown, setPollCooldown] = useState(false)
  
  // Utilisez une ref pour suivre l'état initialisé
  const isInitialized = useRef(false)

  // Vérifier si l'utilisateur a déjà soumis un sondage
  useEffect(() => {
    if (isInitialized.current) return
    
    const submitted = localStorage.getItem('poll_submitted')
    const lastPollTime = localStorage.getItem('last_poll_time')
    
    if (submitted === 'true') {
      setHasSubmittedPoll(true)
    }
    
    // Empêcher l'affichage pendant 7 jours après soumission
    if (lastPollTime) {
      const timeDiff = Date.now() - parseInt(lastPollTime)
      const sevenDays = 7 * 24 * 60 * 60 * 1000
      if (timeDiff < sevenDays) {
        setPollCooldown(true)
      } else {
        // Si plus de 7 jours, supprimer le localStorage pour permettre un nouveau sondage
        localStorage.removeItem('poll_submitted')
        localStorage.removeItem('last_poll_time')
      }
    }
    
    isInitialized.current = true
  }, [])

  // Fonction pour ouvrir le modal - MODIFIÉE
  const showPoll = () => {
    console.log('showPoll appelée - État:', { hasSubmittedPoll, pollCooldown })
    
    // Vérifiez d'abord le localStorage directement
    const submitted = localStorage.getItem('poll_submitted')
    const lastPollTime = localStorage.getItem('last_poll_time')
    let shouldBlock = false
    
    if (submitted === 'true' && lastPollTime) {
      const timeDiff = Date.now() - parseInt(lastPollTime)
      const sevenDays = 7 * 24 * 60 * 60 * 1000
      
      if (timeDiff < sevenDays) {
        shouldBlock = true
        console.log('Sondage bloqué: déjà soumis il y a', Math.floor(timeDiff / (1000 * 60 * 60 * 24)), 'jours')
      } else {
        // Supprimer si plus de 7 jours
        localStorage.removeItem('poll_submitted')
        localStorage.removeItem('last_poll_time')
        setHasSubmittedPoll(false)
        setPollCooldown(false)
      }
    }
    
    if (!shouldBlock) {
      setIsPollVisible(true)
    }
  }

  // Fonction pour fermer le modal
  const hidePoll = () => {
    setIsPollVisible(false)
  }

  // Fonction pour soumettre le sondage
  const handlePollSubmit = (data: {
    name: string
    phone: string
    rating: number
    feedback: string
    recommend: boolean
  }) => {
    // Enregistrer la soumission
    localStorage.setItem('poll_submitted', 'true')
    localStorage.setItem('last_poll_time', Date.now().toString())
    
    // Enregistrer les données
    console.log('Poll submitted:', data)
    
    setHasSubmittedPoll(true)
    setPollCooldown(true)
    setIsPollVisible(false)
  }

  return {
    isPollVisible,
    showPoll,
    hidePoll,
    handlePollSubmit,
    hasSubmittedPoll,
    pollCooldown
  }
}
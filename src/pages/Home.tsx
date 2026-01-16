import CertificationNormes from "../component/Acceuil/CertificationNormes"
import DomainesExpert from "../component/Acceuil/DomainesEpert"
import HeroSection from "../component/Acceuil/HeroSection"
import ISONormes from "../component/Acceuil/ISONormes"
import TabsCertif from "../component/Acceuil/TabsCertif"
import PollButton from "../component/sondage/PollButton"
import PollModal from "../component/sondage/PollModal"
import { usePollModal } from "../hooks/usePollModal"


function Home() {
    const { 
    isPollVisible,  // L'état de visibilité
    showPoll,       // La fonction pour ouvrir
    hidePoll,       // La fonction pour fermer
    handlePollSubmit // La fonction pour soumettre
  } = usePollModal()

  return (
    <main className="min-h-screen">
      <HeroSection />
      <DomainesExpert />
      <TabsCertif />
      <ISONormes />
      <CertificationNormes />


        {/* Bouton sondage - visible uniquement sur la page d'accueil */}
      <PollButton onClick={showPoll} />

      <PollModal
        isVisible={isPollVisible} // Passer l'état de visibilité
        onClose={hidePoll}        // Passer la fonction pour fermer
        onSubmit={handlePollSubmit} // Passer la fonction pour soumettre
        eventName="notre site web"
      />

    </main>
  )
}

export default Home
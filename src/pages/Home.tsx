import CertificationNormes from "../component/Acceuil/CertificationNormes"
import DomainesExpert from "../component/Acceuil/DomainesEpert"
import HeroSection from "../component/Acceuil/HeroSection"
import ISONormes from "../component/Acceuil/ISONormes"
import TabsCertif from "../component/Acceuil/TabsCertif"
import PollButton from "../component/sondage/PollButton"
import { usePollModal } from "../hooks/usePollModal"


function Home() {
  const { showPoll } = usePollModal()
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DomainesExpert />
      <TabsCertif />
      <ISONormes />
      <CertificationNormes />


        {/* Bouton sondage - visible uniquement sur la page d'accueil */}
      <PollButton onClick={showPoll} />
    </main>
  )
}

export default Home
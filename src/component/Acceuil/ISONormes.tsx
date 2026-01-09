import { Award, Heart } from "lucide-react"
import CardSocial from "./CardSocial"
import CardIso from "./CardISO"

const ISONormes = () => {
  return (
    <>
      {/* ISO NORMS */}
      <section className="py-20 bg-[#d4c5a9]/20">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1a4d2e] mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Normes <span className="text-[#1a4d2e]">ISO</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Standards internationaux de gestion pour améliorer la qualité, l'environnement et la sécurité au travail
              </p>
            </div>

            {/* ISO cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <CardIso
                title="ISO 9001"
                subtitle="Système de Management de la Qualité"
                items={[
                  "Amélioration de la satisfaction client",
                  "Optimisation des processus internes",
                  "Amélioration continue des performances",
                  "Certification reconnue internationalement",
                ]}
              />

              <CardIso
                title="ISO 14001"
                subtitle="Système de Management Environnemental"
                items={[
                  "Réduction de l'impact environnemental",
                  "Conformité réglementaire environnementale",
                  "Économies de ressources et d'énergie",
                  "Maîtrise des risques environnementaux",
                ]}
              />

              <CardIso
                title="ISO 45001"
                subtitle="Management Santé & Sécurité"
                items={[
                  "Réduction des accidents et maladies professionnelles",
                  "Protection de la santé des travailleurs",
                  "Culture de prévention et sécurité proactive",
                  "Conformité aux exigences légales",
                ]}
              />
            </div>

            {/* Additional ISO standards */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="border border-[#d4c5a9] rounded-xl p-5 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#1a4d2e] rounded-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1a4d2e]">HACCP</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Système d'analyse des dangers et points critiques pour la maîtrise de la sécurité alimentaire
                </p>
              </div>

              <div className="border border-[#d4c5a9] rounded-xl p-5 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#1a4d2e] rounded-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1a4d2e]">Autres certifications</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Accompagnement pour ISO 22000 (sécurité alimentaire), ISO 50001 (énergie), et certifications sectorielles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL STANDARDS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#ff6347]/10 mb-4">
                <Heart className="w-8 h-8 text-[#ff6347]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Normes <span className="text-[#ff6347]">Sociales</span> et <span className="text-[#6b8e23]">Commerce Équitable</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Standards pour garantir des pratiques de travail éthiques et responsables dans les chaînes d'approvisionnement
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <CardSocial
                title="SMETA & URSA"
                subtitle="Audits éthiques et responsabilité sociale"
                description="SMETA (Sedex Members Ethical Trade Audit) est une méthodologie d'audit reconnue mondialement pour évaluer les pratiques de travail, la santé et sécurité, l'environnement et l'éthique des affaires."
                items={[
                  "Évaluation des conditions de travail décentes",
                  "Audits santé et sécurité au travail",
                  "Protection environnementale",
                  "Transparence et éthique commerciale",
                ]}
              />

              <CardSocial
                title="SA 8000"
                subtitle="Responsabilité sociale internationale"
                description="Certification basée sur les conventions de l'OIT et des Nations Unies, visant à garantir le bien-être des travailleurs dans tous les secteurs industriels."
                items={[
                  "Interdiction du travail des enfants et forcé",
                  "Liberté d'association et négociation collective",
                  "Conditions de travail sûres et hygiéniques",
                  "Rémunération équitable et horaires décents",
                ]}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default ISONormes
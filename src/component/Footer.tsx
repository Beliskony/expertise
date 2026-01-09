import { Link } from "react-router-dom"
import { Leaf, Mail, Phone, MapPin, Linkedin, Facebook, Globe, ShieldCheck } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#1a4d2e] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="w-7 h-7 text-[#1a4d2e]" />
              </div>
              <div>
                <h2 className="font-bold text-xl text-white">Hermane</h2>
                <p className="text-[#d4c5a9] text-sm">Consulting & Audit</p>
              </div>
            </div>

            <p className="text-[#d4c5a9] text-sm leading-relaxed">
              Experts en évaluations environnementales et sociales (EESS, EIES) 
              et accompagnement aux certifications RSPO, ISO, SMETA pour un 
              développement durable et responsable.
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6347] transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6347] transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6347] transition-colors group"
                aria-label="Website"
              >
                <Globe className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6 pb-2 border-b border-[#d4c5a9]/30">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  to="/" 
                  className="text-[#d4c5a9] hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-transparent rounded-full group-hover:bg-[#ff6347]"></div>
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-[#d4c5a9] hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-transparent rounded-full group-hover:bg-[#ff6347]"></div>
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-[#d4c5a9] hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-transparent rounded-full group-hover:bg-[#ff6347]"></div>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6 pb-2 border-b border-[#d4c5a9]/30">
              Nos Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-[#d4c5a9]">
                <ShieldCheck className="w-4 h-4 text-[#ff6347]" />
                <span className="hover:text-white transition-colors cursor-pointer">EESS - Évaluation Stratégique</span>
              </li>
              <li className="flex items-center gap-2 text-[#d4c5a9]">
                <ShieldCheck className="w-4 h-4 text-[#ff6347]" />
                <span className="hover:text-white transition-colors cursor-pointer">EIES - Étude d'Impact</span>
              </li>
              <li className="flex items-center gap-2 text-[#d4c5a9]">
                <ShieldCheck className="w-4 h-4 text-[#ff6347]" />
                <span className="hover:text-white transition-colors cursor-pointer">Audit Environnemental</span>
              </li>
          
              <li className="flex items-center gap-2 text-[#d4c5a9]">
                <ShieldCheck className="w-4 h-4 text-[#ff6347]" />
                <span className="hover:text-white transition-colors cursor-pointer">Normes ISO & SMETA</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6 pb-2 border-b border-[#d4c5a9]/30">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#ff6347]" />
                </div>
                <div>
                  <p className="text-[#d4c5a9] text-xs mb-1">Email</p>
                  <a
                    href="mailto:contact@hermane.com"
                    className="text-white hover:text-[#ff6347] transition-colors font-medium"
                  >
                    contact@hermane.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#ff6347]" />
                </div>
                <div>
                  <p className="text-[#d4c5a9] text-xs mb-1">Téléphone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-white hover:text-[#ff6347] transition-colors font-medium"
                  >
                    +XXX XX XX XX XX
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#ff6347]" />
                </div>
                <div>
                  <p className="text-[#d4c5a9] text-xs mb-1">Adresse</p>
                  <span className="text-white font-medium">Votre adresse</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d4c5a9]/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-[#d4c5a9] text-sm">
                © {currentYear} Hermane Consulting & Audit. Tous droits réservés.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-[#d4c5a9] text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Plan du site
              </a>
              <a href="#" className="hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>

        {/* Badge certifications */}
        <div className="mt-8 pt-6 border-t border-[#d4c5a9]/30">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-3 py-1 bg-white/10 rounded-full text-xs text-[#d4c5a9]">
              RSPO Certifié
            </div>
            <div className="px-3 py-1 bg-white/10 rounded-full text-xs text-[#d4c5a9]">
              ISO 9001:2015
            </div>
            <div className="px-3 py-1 bg-white/10 rounded-full text-xs text-[#d4c5a9]">
              Consultant agréé
            </div>
            <div className="px-3 py-1 bg-white/10 rounded-full text-xs text-[#d4c5a9]">
              Développement durable
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
// pages/NotFound.tsx
import { Link } from 'react-router-dom';
import { Leaf, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-b py-7 from-emerald-50 to-white flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Feuilles décoratives statiques */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Feuilles positionnées autour */}
        <Leaf className="absolute top-16 left-10 w-20 h-20 text-emerald-200 rotate-45" />
        <Leaf className="absolute top-32 right-16 w-16 h-16 text-emerald-300 -rotate-12" />
        <Leaf className="absolute bottom-32 left-20 w-24 h-24 text-emerald-200 rotate-90" />
        <Leaf className="absolute bottom-20 right-24 w-14 h-14 text-emerald-300 rotate-135" />
        <Leaf className="absolute top-40 left-1/3 w-12 h-12 text-emerald-200 -rotate-45" />
        
        {/* Formes organiques de fond */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center space-y-12 max-w-4xl">
        
        {/* 404 Énorme et stylé */}
        <div className="relative">
          <div className="text-[280px] md:text-[320px] font-black text-emerald-100 tracking-tighter leading-none">
            404
          </div>
          
          {/* Feuilles intégrées dans le 404 */}
          <div className="absolute top-8 left-1/4">
            <Leaf className="w-20 h-20 text-emerald-300/40 rotate-45" />
          </div>
          <div className="absolute bottom-8 right-1/4">
            <Leaf className="w-16 h-16 text-lime-400/40 -rotate-45" />
          </div>
          
          {/* Overlay pour effet de profondeur */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[240px] md:text-[280px] font-black text-white tracking-tighter drop-shadow-2xl">
              404
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-6">
            <div className="w-20 h-0.5 bg-linear-to-r from-transparent to-emerald-300"></div>
            <Leaf className="w-10 h-10 text-emerald-600 animate-pulse" />
            <div className="w-20 h-0.5 bg-linear-to-l from-transparent to-lime-400"></div>
          </div>
          
          <p className="text-4xl md:text-5xl font-light text-gray-800 leading-relaxed px-4">
            Désolé mais cette page est introuvable
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-1 bg-linear-to-r from-emerald-400/50 to-transparent rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <div className="w-10 h-1 bg-linear-to-l from-lime-400/50 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Bouton avec thème nature */}
        <div className="pt-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-6 px-12 py-5 
                       bg-linear-to-r from-emerald-600 to-emerald-700 
                       text-white font-medium text-lg rounded-2xl 
                       hover:shadow-2xl transition-all duration-500 
                       hover:scale-105 hover:from-emerald-700 hover:to-emerald-800
                       border-2 border-emerald-800/20
                       relative overflow-hidden"
          >
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent 
                          -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Feuilles sur le bouton */}
            <Leaf className="w-6 h-6 text-emerald-300 group-hover:rotate-180 transition-transform duration-700 z-10" />
            <Home className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 z-10" />
            <span className="text-xl tracking-wide z-10">Retour à l'accueil</span>
            <Leaf className="w-6 h-6 text-lime-300 group-hover:-rotate-180 transition-transform duration-700 z-10" />
          </Link>
        </div>

        {/* Décoration basse */}
        <div className="pt-16">
          <div className="flex items-center justify-center gap-8">
            <div className="w-32 h-0.5 bg-linear-to-r from-transparent via-emerald-300/50 to-transparent"></div>
            <div className="flex gap-3">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-4 h-4 rounded-full ${i % 2 === 0 ? 'bg-emerald-400' : 'bg-lime-400'} animate-bounce`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
            <div className="w-32 h-0.5 bg-linear-to-r from-transparent via-lime-300/50 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Plus de feuilles flottantes avec Tailwind animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-emerald-300/30
              animate-[float_15s_linear_infinite]
              ${i % 3 === 0 ? 'text-emerald-400/20' : i % 3 === 1 ? 'text-lime-400/20' : 'text-emerald-300/30'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Leaf className="w-12 h-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
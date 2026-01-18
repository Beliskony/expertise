import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Vérifie si un lien est actif
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Accueil"},
    { href: "/services", label: "Services" },
    { href: "/actualites", label: "Actualités"},
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm h-16 border-b border-[#d4c5a9]">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="Logo Hermane" 
                className="h-16 w-auto"
              />
            </Link>


          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${isActive(item.href) 
                    ? "bg-[#1a4d2e] text-white shadow-md" 
                    : "text-gray-700 hover:bg-[#1a4d2e]/10 hover:text-[#1a4d2e]"
                  }
                `}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-[#ff6347] rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#1a4d2e] hover:text-[#6b8e23] hover:bg-[#1a4d2e]/10 focus:outline-none p-2 rounded-lg transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#d4c5a9] bg-[#1a4d2e]">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-[#6b8e23] transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Drawer Navigation */}
        <div className="p-6">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={closeMenu}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                  ${isActive(item.href) 
                    ? "bg-[#1a4d2e] text-white shadow-sm" 
                    : "text-gray-700 hover:bg-[#1a4d2e]/10 hover:text-[#1a4d2e]"
                  }
                `}
              >
                <span>{item.label}</span>
                {isActive(item.href) && (
                  <div className="ml-auto w-2 h-2 bg-[#ff6347] rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
          
          {/* Contact info in mobile menu */}
          <div className="mt-8 pt-6 border-t border-[#d4c5a9]">
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Spécialiste en évaluation environnementale et sociale
              </p>
              <div className="flex space-x-4">
                <a 
                  href="tel:+1234567890" 
                  className="text-sm text-[#1a4d2e] hover:text-[#6b8e23] font-medium"
                >
                  📞 Appeler
                </a>
                <a 
                  href="mailto:contact@hermane.com" 
                  className="text-sm text-[#1a4d2e] hover:text-[#6b8e23] font-medium"
                >
                  ✉️ Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
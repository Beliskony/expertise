// ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll vers le haut quand la route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Animation douce
    });
  }, [pathname]);

  return null; // Ce composant ne rend rien
};

export default ScrollToTop;
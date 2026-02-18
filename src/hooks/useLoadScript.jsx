import { useState, useEffect } from 'react';

const useLoadGoogleMaps = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  useEffect(() => {
    if (window.google) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setIsLoaded(true);
    };

    script.onerror = () => {
      console.error('Erro ao carregar a API do Google Maps.');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [apiKey]);

  return isLoaded;
};

export default useLoadGoogleMaps;

import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { contactInfoQuery } from '@/sanity/lib/queries';

type ContactInfo = {
  title: string;
  role: string;
  roleDescription: string;
  email: string;
  phone: string;
  address: string;
  scheduleLabel: string;
};

// Valeurs par défaut au cas où Sanity n'est pas disponible
const defaultContactInfo: ContactInfo = {
  title: 'Coordonnées principales',
  role: 'Naturopathe',
  roleDescription: 'Certifiée en naturopathie et massage bien-être',
  email: 'agnesgillot44@gmail.com',
  phone: '07 83 26 18 11',
  address: '14 rue de l\'Eglise, 44810 Héric',
  scheduleLabel: 'Lun-Ven: 9h-19h',
};

export function useContactInfo() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(defaultContactInfo);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchContactInfo() {
      try {
        const data = await client.fetch(contactInfoQuery);
        
        if (data) {
          setContactInfo(data);
        }
      } catch (err) {
        console.error('Erreur lors de la récupération des infos de contact:', err);
        setError(err instanceof Error ? err : new Error('Erreur inconnue'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchContactInfo();
  }, []);

  return {
    contactInfo,
    isLoading,
    error,
  };
}

export default useContactInfo; 
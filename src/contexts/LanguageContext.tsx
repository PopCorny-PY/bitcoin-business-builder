import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    'nav.signup': 'Se Inscreva!',
    'nav.login': 'Entrar',
    'nav.language': 'Idioma',
    'nav.theme': 'Tema',
    'theme.light': 'Escuro',
    'theme.dark': 'Claro',
    'hero.title1': 'Transforme seu',
    'hero.title2': 'Negócio',
    'hero.title3': 'com Bitcoin',
    'hero.subtitle': 'Uma jornada guiada para implementar Bitcoin em seu negócio local.',
    'hero.subtitle2': 'Sem custódia, sem intermediários, apenas liberdade financeira.',
    'hero.startJourney': 'Iniciar Jornada',
    'hero.viewDemo': 'Ver Demonstração',
  },
  en: {
    'nav.signup': 'Sign Up',
    'nav.login': 'Login',
    'nav.language': 'Language',
    'nav.theme': 'Theme',
    'theme.light': 'Dark',
    'theme.dark': 'Light',
    'hero.title1': 'Transform your',
    'hero.title2': 'Business',
    'hero.title3': 'with Bitcoin',
    'hero.subtitle': 'A guided journey to implement Bitcoin in your local business.',
    'hero.subtitle2': 'No custody, no intermediaries, just financial freedom.',
    'hero.startJourney': 'Start Journey',
    'hero.viewDemo': 'View Demo',
  },
  es: {
    'nav.signup': 'Inscribirse',
    'nav.login': 'Iniciar sesión',
    'nav.language': 'Idioma',
    'nav.theme': 'Tema',
    'theme.light': 'Oscuro',
    'theme.dark': 'Claro',
    'hero.title1': 'Transforma tu',
    'hero.title2': 'Negocio',
    'hero.title3': 'con Bitcoin',
    'hero.subtitle': 'Un viaje guiado para implementar Bitcoin en tu negocio local.',
    'hero.subtitle2': 'Sin custodia, sin intermediarios, solo libertad financiera.',
    'hero.startJourney': 'Comenzar Viaje',
    'hero.viewDemo': 'Ver Demo',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
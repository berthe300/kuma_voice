// =================i18n.js "C'est ici que je configure les options de langues "=====================================//

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        contribute: "Contribute",
        speak: "Speak",
        listen: "Listen",
        write: "Write",
        datasets: "Datasets",
        languages: "Languages",
        becomePartner: "Become Partner",
        whoWeAre: "Who We Are",
        login: "Log in",
        signup: "Sign up",
      },
    },
    fr: {
      translation: {
        contribute: "Contribuer",
        speak: "Parler",
        listen: "Écouter",
        write: "Écrire",
        datasets: "Jeux de Données",
        languages: "Langues",
        becomePartner: "Devenir Partenaire",
        whoWeAre: "Qui Sommes-Nous",
        login: "Se Connecter",
        signup: "S'Inscrire",
      },
    },
    dioula: {
      translation: {
        contribute: "Kontribuɛ",
        speak: "Kɔlɔni",
        listen: "Kuru",
        write: "Kuruna",
        datasets: "Ŋɔgɔna",
        languages: "Dɛmɛɲɔrɔn",
        becomePartner: "Dɛmɛni kelen",
        whoWeAre: "Mɛnɛn kɛnɛ",
        login: "Sɔn bɛ kɔ",
        signup: "Sɔn fɔ mɛ",
      },
    },
  },
  lng: "en", // Langue par défaut
  fallbackLng: "dioula",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

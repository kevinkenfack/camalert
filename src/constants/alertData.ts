import { AlertTriangle, Shield, CheckCircle } from 'lucide-react';

export const MANIPULATION_EXAMPLES = [
  {
    text: "Des groupes organisés créent des milliers de faux comptes pour amplifier les messages de haine",
    icon: AlertTriangle
  },
  {
    text: "Utilisation d'intelligence artificielle pour créer de fausses images et vidéos",
    icon: AlertTriangle
  },
  // ... autres exemples
];

export const VERIFICATION_TIPS = [
  {
    title: "Vérifiez les sources",
    content: "Un vrai militant défend ses idées avec des arguments.",
    icon: Shield
  },
  // ... autres tips
];

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    network: 'facebook',
    bgColor: '#1877F2',
    shareUrl: (url: string, message: string) => 
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`
  },
  // ... autres réseaux
]; 
export const SHARE_MESSAGE = "🚨 ALERTE MANIPULATION 🇨🇲\nProtégeons l'unité du Cameroun !";

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    network: 'facebook',
    bgColor: '#1877F2',
    shareUrl: (url: string) => 
      `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${SHARE_MESSAGE}`
  },
  {
    name: 'WhatsApp',
    network: 'whatsapp',
    bgColor: '#25D366',
    shareUrl: (url: string) => 
      `https://wa.me/?text=${SHARE_MESSAGE}\n${url}`
  },
  // ... autres réseaux
]; 
'use client';

import React, { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle, Search, Users, Flag, Share2, Shield, Heart, AlertCircle, ArrowUpRight, MessageSquare } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import WelcomePopup from './WelcomePopup';

const CamAlert = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const manipulationExamples = [
    { text: "Des groupes organisés créent des milliers de faux comptes pour amplifier les messages de haine", icon: <AlertTriangle /> },
    { text: "Utilisation d'intelligence artificielle pour créer de fausses images et vidéos compromettantes", icon: <AlertTriangle /> },
    { text: "Diffusion de fausses informations sur des tensions ethniques inexistantes", icon: <AlertTriangle /> },
    { text: "Création de faux sondages pour influencer l'opinion publique", icon: <AlertTriangle /> },
    { text: "Utilisation de bots pour harceler les voix modérées et pacifiques", icon: <AlertTriangle /> },
    { text: "Manipulation des contenus pour créer des conflits entre régions", icon: <AlertTriangle /> },
    { text: "Certains se prétendent pro-gouvernement et diffusent des messages anti-opposition.",
      icon: <AlertTriangle /> },
    { text: "D'autres se font passer pour des militants de l'opposition en tenant des propos extrémistes.",
      icon: <AlertTriangle /> },
    { text: "Création de faux profils d'opposants pour semer la haine.",
      icon: <AlertTriangle /> },
    { text: "Fabrication de faux comptes pro-gouvernement pour alimenter les tensions.",
      icon: <AlertTriangle /> },
    { text: "Création de faux comptes de journalistes pour diffuser de fausses informations",
      icon: <AlertTriangle /> },
    { text: "Utilisation de bots pour amplifier artificiellement les messages diviseurs",
      icon: <AlertTriangle /> },
    { text: "Diffusion de montages photos et vidéos manipulés",
      icon: <AlertTriangle /> }
  ];

  const verificationTips = [
    "Un vrai militant défend ses idées avec des arguments.",
    "Un faux compte joue sur vos émotions, insulte et pousse à la haine.",
    "Beaucoup de messages sont conçus exprès pour provoquer et manipuler.",
    "Posez-vous toujours la question : À qui profite cette division ?"
  ];

  const preventionTips = [
    {
      title: "Vérifiez l'authenticité des profils",
      content: "Regardez la date de création, le nombre de followers, et la cohérence des publications."
    },
    {
      title: "Croisez les sources",
      content: "Ne vous fiez pas à une seule source, recherchez des confirmations auprès de médias reconnus."
    },
    {
      title: "Gardez votre sang-froid",
      content: "Les messages provocateurs visent à déclencher des réactions émotionnelles."
    },
    {
      title: "Privilégiez le dialogue",
      content: "Favorisez les échanges constructifs plutôt que les confrontations."
    }
  ];

  // Ajout des fonctions de partage
  const shareMessage = "🚨 ALERTE MANIPULATION 🇨🇲\nProtégeons l'unité du Cameroun ! Découvrez comment détecter et éviter les manipulations sur les réseaux sociaux.";
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const consequences = [
    "Risque de violences intercommunautaires",
    "Déstabilisation du processus électoral",
    "Affaiblissement de la cohésion nationale",
    "Perte de confiance dans les institutions",
    "Impact négatif sur l'économie et le développement"
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      network: 'facebook',
      bgColor: '#1877F2',
      onClick: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareMessage)}`, '_blank')
    },
    {
      name: 'WhatsApp',
      network: 'whatsapp',
      bgColor: '#25D366',
      onClick: () => window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage + '\n' + shareUrl)}`, '_blank')
    },
    {
      name: 'Twitter',
      network: 'x',
      bgColor: '#000000',
      onClick: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(shareUrl)}`, '_blank')
    },
    {
      name: 'Telegram',
      network: 'telegram',
      bgColor: '#0088cc',
      onClick: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareMessage)}`, '_blank')
    }
  ];

  return (
    <>
      <WelcomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      
      <div className="min-h-screen bg-gray-950 text-white">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 via-yellow-600/5 to-green-600/5 pointer-events-none" />
          
          {/* En-tête fixe */}
          <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-lg border-b border-white/5' : ''}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <div className="relative group">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-green-500 to-yellow-500 p-[1px]">
                      <div className="w-full h-full rounded-2xl bg-gray-950/90 flex items-center justify-center">
                        <Flag className="w-6 h-6 text-green-500" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xxl font-bold bg-gradient-to-r from-green-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                      CamAlert
                    </h1>
                    <p className="text-sm text-gray-400">Restons Unis, Restons Forts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="relative pt-24 px-4 sm:px-6 pb-12 max-w-4xl mx-auto">
            {/* Carte d'alerte principale */}
            <div className="mb-8 group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900/50 via-yellow-900/50 to-green-900/50 p-[1px]">
                <div className="relative bg-gray-950/95 rounded-3xl p-6 backdrop-blur-xl overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 -left-4 w-24 h-24 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                    <div className="absolute top-0 -right-4 w-24 h-24 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                    <div className="absolute -bottom-8 left-20 w-24 h-24 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
                  </div>

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-r from-red-500/20 to-red-500/10 text-red-500 px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-red-500/10">
                        Alerte Importante
                      </div>
                      <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-200 to-green-200 bg-clip-text text-transparent leading-tight">
                      🚨 CAMEROUNAIS,{' '}
                      <span className="block sm:inline">NE TOMBEZ PAS</span>{' '}
                      <span className="block sm:inline">DANS LE PIÈGE</span>{' '}
                      <span className="block sm:inline">DE LA MANIPULATION</span> 🚨
                    </h2>

                    <p className="text-gray-300 mb-4">
                      Le <b>Cameroun</b> approche d'une échéance <b>électorale</b> cruciale, et comme toujours, 
                      certaines forces ont commencer à <b>diviser</b> pour mieux <b>régner</b>.
                    </p>

                    <p className="text-gray-300">
                      Un phénomène inquiétant est en cours sur les réseaux sociaux : <b>discours haineux, 
                      tribalisme et attaques ciblées contre certaines communautés et figures politiques</b>. 
                      Mais attention, tout cela est orchestré !
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Faux Profils */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-500">
                <AlertTriangle />
                🕵️ FAUX PROFILS, INTOX ET STRATÉGIE DE DIVISION
              </h3>
              <div className="space-y-4">
                {manipulationExamples.map((example, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-0.5">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-3">
                      {example.icon}
                      <span className="text-gray-300">{example.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section Vérification */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-500">
                <Shield />
                ⚠️ COMMENT NE PAS SE FAIRE MANIPULER ?
              </h3>
              <div className="space-y-4">
                {/* Première alerte */}
                <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4">
                  <div className="space-y-3">
                    <h4 className="font-bold text-yellow-500 flex items-center gap-2">
                      <Search className="w-5 h-5" />
                      🔍 VÉRIFIEZ TOUJOURS LA SOURCE D'UN MESSAGE AVANT DE LE PARTAGER
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        Un vrai militant défend ses idées avec des arguments.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        Un faux compte joue sur vos émotions, insulte et pousse à la haine.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Deuxième alerte */}
                <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4">
                  <div className="space-y-3">
                    <h4 className="font-bold text-red-500 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      🛑 NE VOUS LAISSEZ PAS PRENDRE PAR LA COLÈRE
                    </h4>
                    <p className="text-gray-300">Beaucoup de messages sont conçus exprès pour provoquer et manipuler.</p>
                    <p className="text-gray-300">Posez-vous toujours la question : À qui profite cette division ?</p>
                  </div>
                </div>

                {/* Conseils détaillés */}
                {preventionTips.map((tip, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative space-y-2">
                      <h4 className="font-bold text-green-500">{tip.title}</h4>
                      <p className="text-gray-300">{tip.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section L'ennemi */}
            <div className="mb-8">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-red-900/50 p-[1px]">
                <div className="relative bg-gray-950/95 rounded-3xl p-6 backdrop-blur-xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Users className="text-blue-500" />
                    ✊ L'ENNEMI, CE N'EST PAS VOTRE FRÈRE CAMEROUNAIS !
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <p>Le vrai combat, c'est l'avenir du Cameroun, pas des querelles ethniques montées de toutes pièces.</p>
                    <p>La haine ne profite qu'à ceux qui veulent nous affaiblir et détourner notre attention.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section de conclusion */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-900/50 via-yellow-900/50 to-red-900/50 p-[1px]">
              <div className="relative bg-gray-950/95 rounded-3xl p-6 backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Flag className="text-green-500" />
                  🇨🇲 CAMEROUNAIS, RESTONS UNIS ! 🇨🇲
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>Ne soyons pas les marionnettes de ceux qui utilisent les réseaux sociaux pour semer la division.</p>
                  <p>💡 Un peuple divisé est un peuple plus facile à contrôler. Ne tombons pas dans ce piège.</p>
                </div>
                <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl hover:bg-green-600 group mt-4">
                  <span className="relative w-full text-left flex items-center justify-between">
                    🔄 PARTAGEZ CE MESSAGE et sensibilisons nos proches !
                    <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>

            {/* Ajout d'une section de partage social */}
            <div className="grid gap-3 sm:grid-cols-2 mb-8">
              {socialLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-0.5"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <SocialIcon url={`https://${link.network}.com`} style={{ height: 24, width: 24 }} />
                      <span className="font-medium">Partager sur {link.name}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(style);

export default CamAlert;
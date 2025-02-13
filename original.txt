'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Shield, Users, Search } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import WelcomePopup from './WelcomePopup';

const CamAlert = () => {
  const [showPopup, setShowPopup] = useState(true);

  const manipulationExamples = [
    "Des groupes organisés créent des milliers de faux comptes pour amplifier les messages de haine",
    "Utilisation d\'intelligence artificielle pour créer de fausses images et vidéos compromettantes",
    "Diffusion de fausses informations sur des tensions ethniques inexistantes",
    "Création de faux sondages pour influencer l\'opinion publique",
    "Utilisation de bots pour harceler les voix modérées et pacifiques",
    "Manipulation des contenus pour créer des conflits entre régions",
    "Certains se prétendent pro-gouvernement et diffusent des messages anti-opposition.",
    "D\'autres se font passer pour des militants de l\'opposition en tenant des propos extrémistes.",
    "Création de faux profils d\'opposants pour semer la haine.",
    "Fabrication de faux comptes pro-gouvernement pour alimenter les tensions.",
    "Création de faux comptes de journalistes pour diffuser de fausses informations",
    "Utilisation de bots pour amplifier artificiellement les messages diviseurs",
    "Diffusion de montages photos et vidéos manipulés"
  ];

  const preventionTips = [
    {
      title: "Vérifiez l\'authenticité des profils",
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
  const shareMessage = "🚨 ALERTE MANIPULATION 🇨🇲\nProtégeons l&apos;unité du Cameroun ! Découvrez comment détecter et éviter les manipulations sur les réseaux sociaux.";
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

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
    <div className="container mx-auto px-4 py-6 lg:py-8">
      <WelcomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* En-tête Principal */}
      <header className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 p-6 lg:p-8 text-white shadow-lg">
        <motion.div className="relative z-10">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            🚨 ALERTE MANIPULATION 🇨🇲
          </h1>
          <div className="prose prose-lg text-white/90">
            <p className="text-xl mb-4">
              Le Cameroun approche d&apos;une échéance électorale cruciale, et comme toujours, 
              certaines forces cherchent à diviser pour mieux régner.
            </p>
            <p>
              Un phénomène inquiétant est en cours sur les réseaux sociaux : 
              discours haineux, tribalisme et attaques ciblées contre certaines 
              communautés et figures politiques. Mais attention, tout cela est orchestré !
            </p>
          </div>
        </motion.div>
      </header>

      <main className="mt-8 space-y-8">
        {/* Section Stratégies de Manipulation */}
        <section className="bg-white rounded-xl shadow-md p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            🕵️ FAUX PROFILS, INTOX ET STRATÉGIE DE DIVISION
          </h2>
          <p className="text-gray-700 mb-6">
            Une grande partie des messages incitant à la haine ne viennent pas de vrais citoyens, 
            mais de faux comptes créés pour manipuler l&apos;opinion :
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {manipulationExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{example}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-red-600 font-semibold flex items-center gap-2">
            <AlertTriangle />
            Ces gens ne cherchent pas à défendre une cause, mais à semer la confusion et la division.
          </p>
        </section>

        {/* Section Comment ne pas se faire manipuler */}
        <section className="bg-white rounded-xl shadow-md p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Shield className="h-6 w-6 text-yellow-500" />
            ⚠️ COMMENT NE PAS SE FAIRE MANIPULER ?
          </h2>

          {/* Sous-section Vérification */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Search className="h-5 w-5 text-blue-500" />
              🔍 VÉRIFIEZ TOUJOURS LA SOURCE D&apos;UN MESSAGE
            </h3>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc">
              <li>Un vrai militant défend ses idées avec des arguments.</li>
              <li>Un faux compte joue sur vos émotions, insulte et pousse à la haine.</li>
            </ul>
          </div>

          {/* Nouvelle sous-section Contrôle de la colère */}
          <div className="mb-8 bg-red-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              🛑 NE VOUS LAISSEZ PAS PRENDRE PAR LA COLÈRE
            </h3>
            <div className="space-y-4 text-red-700">
              <p>
                Beaucoup de messages sont conçus exprès pour provoquer et manipuler.
              </p>
              <p className="font-medium">
                Posez-vous toujours la question : À qui profite cette division ?
              </p>
            </div>
          </div>

          {/* Sous-section Conseils */}
          <div className="grid md:grid-cols-2 gap-6">
            {preventionTips.map((tip, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
                <p className="text-gray-700">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Message d'unité */}
        <section className="bg-white rounded-xl shadow-md p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Users className="h-6 w-6 text-green-500" />
            ✊ L&apos;ENNEMI, CE N&apos;EST PAS VOTRE FRÈRE CAMEROUNAIS !
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>Le vrai combat, c&apos;est l&apos;avenir du Cameroun, pas des querelles ethniques montées de toutes pièces.</p>
            <p>La haine ne profite qu&apos;à ceux qui veulent nous affaiblir et détourner notre attention.</p>
          </div>

          {/* Message d'unité supplémentaire */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🇨🇲 CAMEROUNAIS, RESTONS UNIS ! 🇨🇲
            </h3>
            <p className="text-gray-700 mb-4">
              Ne soyons pas les marionnettes de ceux qui utilisent les réseaux sociaux pour semer la division.
            </p>
            <p className="text-lg font-semibold text-gray-800">
              💡 Un peuple divisé est un peuple plus facile à contrôler. Ne tombons pas dans ce piège.
            </p>
          </div>

          {/* Boutons de partage */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Partagez ce message pour sensibiliser
            </h3>
            <div className="flex justify-center gap-4 mb-6">
              {socialLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <SocialIcon network={link.network} style={{ height: 24, width: 24 }} />
                </button>
              ))}
            </div>

            {/* Message de sensibilisation */}
            <p className="mt-6 text-green-600 font-semibold text-lg bg-green-50 py-3 px-4 rounded-lg inline-block">
              Sensibilisons nos proches pour un Cameroun uni ! 🇨🇲
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2025 Sensibilisation Nationale
          </div>
        </section>
      </main>
    </div>
  );
};

export default CamAlert;
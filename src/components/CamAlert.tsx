'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { Alert, AlertTitle } from './ui/alert';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { AlertTriangle, CheckCircle, Search, Users, Flag, Share2, Shield, Heart, AlertCircle } from 'lucide-react';
import WelcomePopup from './WelcomePopup';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const SensibilisationCameroun = () => {
  const [showPopup, setShowPopup] = React.useState(true);

  const manipulationExamples = [
    "Certains se prétendent pro-gouvernement et diffusent des messages anti-opposition.",
    "D'autres se font passer pour des militants de l'opposition en tenant des propos extrémistes pour les discréditer.",
    "Certains individus du régime créent même des faux profils d'opposants, pour semer la haine et décrédibiliser toute contestation.",
    "D'autres fabriquent de faux comptes pro-gouvernement pour alimenter encore plus les tensions et attiser la haine.",
    "Le but est clair : détourner l'attention des vrais problèmes du pays et empêcher tout débat constructif.",
    "Création de faux comptes de journalistes pour diffuser de fausses informations",
    "Utilisation de bots pour amplifier artificiellement certains messages diviseurs",
    "Diffusion de montages photos et vidéos manipulés pour créer des scandales"
  ];

  const preventionTips = [
    {
      title: "Vérifiez l'authenticité des profils",
      content: "Regardez la date de création du compte, le nombre de followers, et la cohérence des publications."
    },
    {
      title: "Croisez les sources",
      content: "Ne vous fiez pas à une seule source d'information, recherchez des confirmations auprès de médias reconnus."
    },
    {
      title: "Gardez votre sang-froid",
      content: "Les messages provocateurs visent à déclencher des réactions émotionnelles. Prenez du recul."
    },
    {
      title: "Privilégiez le dialogue",
      content: "Favorisez les échanges constructifs plutôt que les confrontations stériles."
    }
  ];

  const shareMessage = "🚨 ALERTE MANIPULATION 🇨🇲\nProtégeons l'unité du Cameroun ! Découvrez comment détecter et éviter les manipulations sur les réseaux sociaux.";
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareMessage)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage + '\n' + shareUrl)}`, '_blank');
  };

  const shareOnTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareMessage)}`, '_blank');
  };

  return (
    <>
      <WelcomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      
      <motion.div 
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="max-w-4xl mx-auto p-4 space-y-6"
      >
        {/* Animation de la carte du Cameroun */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.5,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="relative w-64 h-64 mx-auto"
        >
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full fill-green-600 opacity-20"
          >
            {/* Forme simplifiée de la carte du Cameroun */}
            <path d="M250,100 C350,120 400,200 420,300 C440,400 350,450 250,470 C150,450 60,400 80,300 C100,200 150,120 250,100" />
          </svg>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-6xl">🇨🇲</span>
          </motion.div>
        </motion.div>

        {/* En-tête Alerte avec animation */}
        <motion.div variants={fadeInUp}>
          <div className="relative bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 p-1 rounded-lg animate-pulse">
            <div className="bg-white p-6 rounded-md">
              <h1 className="text-3xl font-bold text-red-600 text-center mb-4">
                🚨 CAMEROUNAIS, NE TOMBEZ PAS DANS LE PIÈGE DE LA MANIPULATION 🚨
              </h1>
              <p className="text-lg text-gray-700 text-center">
                Un message crucial pour l&apos;unité et l&apos;avenir de notre nation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Context Card avec animation */}
        <motion.div variants={fadeInUp}>
          <Card className="border-l-4 border-l-green-600">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                Le <span className="font-bold">Cameroun</span> approche d'une échéance 
                <span className="font-bold"> électorale</span> cruciale, et comme toujours, 
                certaines forces cherchent à diviser pour <span className="font-bold">mieux régner.</span>
              </p>
              <p className="mt-4 text-lg">
                Un phénomène inquiétant est en cours sur les réseaux sociaux : discours haineux, 
                <span className="font-bold"> tribalisme</span> et attaques ciblées contre certaines 
                communautés et figures <span className="font-bold">politiques</span>. Mais attention, 
                tout cela est orchestré !
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Section Manipulation avec animation */}
        <motion.div variants={fadeInUp}>
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <AlertTriangle className="text-yellow-500" />
                🕵️ FAUX PROFILS, INTOX ET STRATÉGIE DE DIVISION
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-lg">
                Une grande partie des messages incitant à la haine ne viennent pas de vrais citoyens, 
                mais de faux comptes créés pour manipuler l'opinion :
              </p>
              <div className="space-y-4">
                {manipulationExamples.map((text, index) => (
                  <div key={index} className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-lg font-semibold text-red-600 flex items-center gap-2">
                <AlertCircle />
                Ces gens ne cherchent pas à défendre une cause, mais à semer la confusion et la division.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Section Prévention */}
        <motion.div variants={fadeInUp}>
          <Card className="border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Shield className="text-red-600" />
                ⚠️ COMMENT NE PAS SE FAIRE MANIPULER ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert variant="default" className="border-l-4 border-l-yellow-500">
                <AlertTitle className="font-bold flex items-center gap-2">
                  <Search className="text-yellow-500" />
                  🔍 VÉRIFIEZ TOUJOURS LA SOURCE D&apos;UN MESSAGE AVANT DE LE PARTAGER
                </AlertTitle>
                <div className="mt-2 space-y-2">
                  <p>• Un vrai <span className="font-bold">militant</span> défend ses idées avec des arguments.</p>
                  <p>• Un <span className="font-bold">faux compte</span> joue sur vos émotions, insulte et pousse à la <span className="font-bold">haine</span>.</p>
                </div>
              </Alert>

              <Alert variant="default" className="border-l-4 border-l-green-600">
                <AlertTitle className="font-bold flex items-center gap-2">
                  <Heart className="text-green-600" />
                  🛑 NE VOUS LAISSEZ PAS PRENDRE PAR LA COLÈRE
                </AlertTitle>
                <div className="mt-2 space-y-2">
                  <p>Beaucoup de messages sont conçus exprès pour provoquer et manipuler.</p>
                  <p>Posez-vous toujours la question : À qui profite cette division ?</p>
                </div>
              </Alert>

              {preventionTips.map((tip, index) => (
                <Alert key={index} variant="default" className="border-l-4 border-l-yellow-500">
                  <AlertTitle className="font-bold">{tip.title}</AlertTitle>
                  <p>{tip.content}</p>
                </Alert>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Message d'unité */}
        <motion.div variants={fadeInUp}>
          <Card className="border-l-4 border-l-green-600">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                <Users className="text-green-600" />
                ✊ L&apos;ENNEMI, CE N&apos;EST PAS VOTRE FRÈRE CAMEROUNAIS !
              </h2>
              <div className="space-y-4">
                <p>Le vrai combat, c&apos;est l&apos;avenir du Cameroun, pas des querelles ethniques montées de toutes pièces.</p>
                <p>La haine ne profite qu&apos;à ceux qui veulent nous affaiblir et détourner notre attention.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Conclusion */}
        <motion.div variants={fadeInUp}>
          <div className="bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 p-1 rounded-lg">
            <Card className="border-0">
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                    <Flag />
                    🇨🇲 CAMEROUNAIS, RESTONS UNIS ! 🇨🇲
                  </h2>
                  <p className="text-lg">Ne soyons pas les marionnettes de ceux qui utilisent les réseaux sociaux pour semer la division.</p>
                  <p className="text-lg font-bold">💡 Un peuple divisé est un peuple plus facile à contrôler. Ne tombons pas dans ce piège.</p>
                  
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-bold text-lg">Partagez ce message sur :</p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <SocialIcon
                          network="facebook"
                          onClick={shareOnFacebook}
                          className="hover:opacity-80 transition-opacity"
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <SocialIcon
                          network="whatsapp"
                          onClick={shareOnWhatsApp}
                          className="hover:opacity-80 transition-opacity"
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <SocialIcon
                          network="x"
                          onClick={shareOnTwitter}
                          className="hover:opacity-80 transition-opacity"
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <SocialIcon
                          network="telegram"
                          onClick={shareOnTelegram}
                          className="hover:opacity-80 transition-opacity"
                        />
                      </motion.div>
                    </div>
                  </div>

                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 bg-green-50 p-4 rounded-lg mt-4"
                  >
                    <Share2 className="text-green-600 animate-bounce" />
                    <span className="font-bold text-green-600">
                      Sensibilisons nos proches pour un Cameroun uni ! 🇨🇲
                    </span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SensibilisationCameroun;
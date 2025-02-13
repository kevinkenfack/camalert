'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Shield, Users, Search, Heart, Flag, Bell } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import WelcomePopup from './WelcomePopup';
import SignalerPopup from './SignalerPopup';

const CamAlert = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showSignalerPopup, setShowSignalerPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    "Diffusion de montages photos et vidéos manipulés",

  ];

  const preventionTips = [
    {
      icon: <Search className="w-6 h-6 text-green-500" />,
      title: "Vérifiez l\'authenticité",
      content: "Examinez attentivement la date de création, le nombre de followers, et la cohérence des publications."
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-500" />,
      title: "Croisez vos sources",
      content: "Validez toujours l\'information auprès de plusieurs médias reconnus et fiables."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Restez calme",
      content: "Ne cédez pas aux provocations. La réflexion est votre meilleure alliée."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Dialoguez",
      content: "Privilégiez toujours l\'échange constructif et respectueux entre Camerounais."
    }
  ];

  const shareMessage = "🚨 ALERTE MANIPULATION 🇨🇲\nProtégeons l'unité du Cameroun !";
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
    <div className="min-h-screen bg-gray-50">
      {/* Barre de navigation améliorée */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <Flag className="w-6 h-6 text-green-600" />
            <span className="font-extrabold text-xl md:text-2xl bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
              CamAlert
            </span>
          </motion.div>
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 bg-white/80 text-green-600 px-4 py-2 rounded-full hover:bg-white transition-colors"
            >
              <Bell className="w-4 h-4" />
              Alertes
            </motion.button>
            <motion.button 
              onClick={() => setShowPopup(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span className="hidden md:inline">Information</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <WelcomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      <SignalerPopup isOpen={showSignalerPopup} onClose={() => setShowSignalerPopup(false)} />

      <div className="container mx-auto px-4 pt-24">
        {/* Hero Section améliorée */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-green-600 via-red-600 to-yellow-500"
        >
          <div className="min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center p-4 sm:p-8 lg:p-12">
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Motif camerounais amélioré */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0l40 40-40 40L0 40z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px'
              }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                {/* Titre responsive amélioré */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block"
                  >
                    🚨 ALERTE
                  </motion.span>
                  <br className="md:hidden" />
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="inline-block bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm"
                  >
                    MANIPULATION
                  </motion.span>
                </h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                  Le <span className="font-bold">Cameroun</span> fait face à des series de 
                  manipulation et de divisions sur les réseaux sociaux. Ensemble, protégeons notre unité.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.getElementById('protection');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Shield className="w-5 h-5" />
                    Comment se protéger ?
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowSignalerPopup(true)}
                    className="bg-black/30 text-white px-6 py-3 rounded-full font-bold hover:bg-black/40 transition-colors flex items-center justify-center gap-2"
                  >
                    <AlertTriangle className="w-5 h-5" />
                    Signaler un cas
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* Section Contexte */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 mt-12"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-6 border-l-4 border-red-500"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                Contexte Actuel
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Le Cameroun approche d&apos;une échéance électorale cruciale, et comme toujours, 
                  certaines forces cherchent à diviser pour mieux régner.
                </p>
                <div className="bg-white/80 rounded-xl p-4">
                  <p className="leading-relaxed">
                    Un phénomène inquiétant est en cours sur les réseaux sociaux : 
                    <span className="font-semibold text-red-600"> discours haineux, tribalisme </span> 
                    et 
                    <span className="font-semibold text-red-600"> attaques ciblées </span> 
                    contre certaines communautés et figures politiques.
                  </p>
                  <p className="font-bold text-red-600 mt-2">
                    Mais attention, tout cela est orchestré !
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <main className="mt-12 space-y-12 pb-12">
          {/* Section Manipulations */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                FAUX PROFILS, INTOX ET STRATÉGIE DE DIVISION
              </span>
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Une grande partie des messages incitant à la haine ne viennent pas de vrais citoyens, 
              mais de faux comptes créés pour manipuler l&apos;opinion :
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {manipulationExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-red-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-800">{example}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-red-600 font-semibold flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Ces gens ne cherchent pas à défendre une cause, mais à semer la confusion et la division.
            </p>
          </motion.section>

          {/* Section Prévention */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3" id='protection'>
              <Shield className="h-8 w-8 text-yellow-500" />
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
               COMMENT NE PAS SE FAIRE MANIPULER ?
              </span>
            </h2>

            {/* Vérification des sources */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Search className="h-5 w-5 text-blue-500" />
                VÉRIFIEZ TOUJOURS LA SOURCE D&apos;UN MESSAGE
              </h3>
              <ul className="space-y-2 text-gray-700 ml-6 list-disc">
                <li>Un vrai militant défend ses idées avec des arguments.</li>
                <li>Un faux compte joue sur vos émotions, insulte et pousse à la haine.</li>
              </ul>
            </div>

            {/* Contrôle de la colère */}
            <div className="mb-8 bg-red-50 rounded-xl p-6">
              <h3 className="text-1xl font-semibold text-red-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                NE VOUS LAISSEZ PAS PRENDRE PAR LA COLÈRE
              </h3>
              <div className="space-y-4 text-red-700">
                <p>Beaucoup de messages sont conçus exprès pour provoquer et manipuler.</p>
                <p className="font-medium">Posez-vous toujours la question : À qui profite cette division ?</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {preventionTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{tip.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section Message d'unité */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12"
          >
            <h2 className="text-1xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Users className="h-8 w-8 text-green-500" />
              ✊ L&apos;ENNEMI, CE N&apos;EST PAS VOTRE FRÈRE CAMEROUNAIS !
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>Le vrai combat, c&apos;est l&apos;avenir du Cameroun, pas des querelles ethniques montées de toutes pièces.</p>
              <p>La haine ne profite qu&apos;à ceux qui veulent nous affaiblir et détourner notre attention.</p>
            </div>

            {/* Message d'unité */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🇨🇲 CAMEROUNAIS, RESTONS UNIS ! ⭐️
              </h3>
              <p className="text-gray-700 mb-4">
                Ne soyons pas les marionnettes de ceux qui utilisent les réseaux sociaux pour semer la division et la confusion.
              </p>
              <p className="text-lg font-semibold text-gray-800">
                💡 Un peuple divisé est un peuple plus facile à contrôler, et cest exactement cequ&apos;il veulent. Ne tombons pas dans ce piège.
              </p>
            </div>
          </motion.section>

          {/* Section Unité */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 text-white"
          >
            <div className="absolute inset-0 bg-black/10" />
            
            {/* Motif amélioré */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0l40 40-40 40L0 40z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px'
              }} />
            </div>

            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center"
              >
                <span className="inline-block"></span>
                <span className="mx-2">LA FORCE CEST L&apos;UNITÉ 💪</span>
                
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-center mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                La force du Cameroun réside dans son unité. Ne laissons pas les 
                manipulations en ligne fragiliser la cohésion nationale.
              </motion.p>

              {/* Carte message important */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto"
              >
                <p className="text-xl font-medium text-center">
                  Un peuple uni est un peuple invincible. Ensemble, nous pouvons construire 
                  un Cameroun fort et solidaire.
                </p>
              </motion.div>

              {/* Boutons de partage */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center text-lg font-medium"
                >
                  Partagez ce message pour sensibiliser le maximun de persones
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  {socialLinks.map((link) => (
                    <motion.button
                      key={link.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
                      onClick={link.onClick}
                    >
                      <SocialIcon 
                        network={link.network}
                        style={{ height: 30, width: 30 }}
                        className="group-hover:rotate-6 transition-transform"
                      />
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Nouvelle section Call-to-Action 
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Agissons ensemble pour le Cameroun 🤝
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors group"
              >
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-3 group-hover:rotate-6 transition-transform" />
                <p className="font-medium text-green-800">Signaler une manipulation</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl bg-yellow-50 hover:bg-yellow-100 transition-colors group"
              >
                <Users className="w-8 h-8 text-yellow-600 mx-auto mb-3 group-hover:rotate-6 transition-transform" />
                <p className="font-medium text-yellow-800">Rejoindre la communauté</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors group"
              >
                <Search className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:rotate-6 transition-transform" />
                <p className="font-medium text-blue-800">Vérifier une information</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl bg-red-50 hover:bg-red-100 transition-colors group"
              >
                <Heart className="w-8 h-8 text-red-600 mx-auto mb-3 group-hover:rotate-6 transition-transform" />
                <p className="font-medium text-red-800">Soutenir l'initiative</p>
              </motion.button>
            </div>
          </motion.section>
          */}
        </main>

        {/* Footer amélioré */}
        <footer className="text-center py-8 space-y-4">
          <div className="flex justify-center items-center gap-2">
            <Flag className="w-5 h-5 text-green-600" />
            <p className="font-medium text-gray-600">
            Pour un Cameroun uni et vigilant
            </p>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 - Tous droits réservés
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CamAlert;
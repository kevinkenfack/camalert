'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { X, AlertTriangle, Shield, Heart } from 'lucide-react';

const WelcomePopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  // Empêcher le défilement quand le popup est ouvert
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Fond flouté */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
          >
            <Card className="w-full max-w-lg relative bg-white border-2 border-green-500/20 mx-auto my-4 sm:my-6">
              <button
                onClick={onClose}
                className="absolute right-2 top-2 sm:right-4 sm:top-4 text-gray-400 hover:text-gray-600 transition-colors p-2"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
              
              <CardContent className="pt-6 pb-4 px-4 sm:pt-8 sm:pb-6 sm:px-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* En-tête */}
                  <div className="text-center space-y-2">
                    <div className="flex justify-center">
                      <span className="text-3xl sm:text-4xl">🇨🇲</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                      Bienvenue ✌️
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 px-2">
                      Si vous êtes ici, c&apos;est parce que vous vous souciez de l&apos;avenir du Cameroun
                    </p>
                  </div>

                  {/* Points clés */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-red-800 text-sm sm:text-base">Danger Imminent</h3>
                        <p className="text-red-600 text-xs sm:text-sm">Les réseaux sociaux sont violament utilisés pour diviser le cameroun</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-yellow-50 rounded-lg">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-yellow-800 text-sm sm:text-base">Votre Mission</h3>
                        <p className="text-yellow-700 text-xs sm:text-sm"> Aider à identifier, sensibiliser et contrer la manipulation et la division sur les resaux sociaux</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-green-50 rounded-lg">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-green-800 text-sm sm:text-base">Notre Force</h3>
                        <p className="text-green-700 text-xs sm:text-sm">L&apos;unité et la cohésion de tous les Camerounais peu imorte on origine</p>
                      </div>
                    </div>
                  </div>

                  {/* Bouton d'action */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-green-600 via-red-500 to-yellow-500 text-white py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Commencer la Sensibilisation
                  </motion.button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup; 
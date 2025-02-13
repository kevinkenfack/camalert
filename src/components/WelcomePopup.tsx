'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { X } from 'lucide-react';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomePopup = ({ isOpen, onClose }: WelcomePopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <Card className="max-w-lg w-full relative bg-white">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <CardContent className="pt-8 pb-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-center mb-4">
                    🇨🇲 Bienvenue sur notre Plateforme de Sensibilisation 🇨🇲
                  </h2>
                  <p className="text-lg mb-4 text-center">
                    Si vous êtes ici, c&apos;est parce que vous vous souciez de l&apos;avenir du Cameroun.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Notre mission est de vous aider à :
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Identifier les manipulations sur les réseaux sociaux
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Protéger l'unité de notre nation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Promouvoir un dialogue constructif
                    </li>
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 text-white py-3 rounded-lg font-bold"
                  >
                    Commencer la Sensibilisation
                  </motion.button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup; 
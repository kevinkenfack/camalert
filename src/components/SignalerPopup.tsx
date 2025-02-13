'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { X, AlertTriangle } from 'lucide-react';

const SignalerPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <Card className="w-full max-w-md relative bg-white border-2 border-red-500/20">
              <button
                onClick={onClose}
                className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 transition-colors p-2"
              >
                <X size={20} />
              </button>
              
              <CardContent className="pt-6 pb-4 px-4">
                <div className="text-center space-y-4">
                  <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto" />
                  <h2 className="text-xl font-bold text-gray-800">
                    Fonctionnalité à venir
                  </h2>
                  <p className="text-gray-600">
                    Cette fonctionnalité sera bientôt disponible. Nous travaillons pour vous offrir un système de signalement efficace.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Compris
                  </motion.button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SignalerPopup; 
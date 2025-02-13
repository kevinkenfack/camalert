'use client';

import { Flag } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

export const Header = ({ scrolled }: HeaderProps) => {
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-950/80 backdrop-blur-lg border-b border-white/5' : ''
    }`}>
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
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                CamAlert
              </h1>
              <p className="text-sm text-gray-400">Restons Unis, Restons Forts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 
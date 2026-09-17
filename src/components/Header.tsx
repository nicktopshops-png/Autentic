import React from 'react';
import { Radio, RefreshCw, Droplets } from 'lucide-react';

interface HeaderProps {
  onRescan: () => void;
  isScanning: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onRescan, isScanning }) => {
  return (
    <header id="main-header" className="w-full border-b border-cyan-900/40 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 p-0.5 shadow-lg shadow-cyan-500/25">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                <Droplets className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            {/* Pulsing online indicator */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                GOTTA
              </h1>
              <span className="text-[10px] uppercase font-tech tracking-wider px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-700/60">
                AQUASHIELD KIDS
              </span>
            </div>
            <p className="text-[11px] font-tech text-cyan-400/80 tracking-wider uppercase hidden sm:block">
              CAMISETA HIDRORREPELENTE // AUTENTICAÇÃO NFC
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            id="rescan-nfc-btn"
            onClick={onRescan}
            disabled={isScanning}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-cyan-800/40 hover:border-cyan-400/60 text-xs font-tech text-neutral-200 transition-all cursor-pointer disabled:opacity-50 shadow-sm"
            title="Simular nova leitura por aproximação"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isScanning ? 'animate-spin text-cyan-300' : ''}`} />
            <span className="hidden sm:inline">{isScanning ? 'LENDO CHIP...' : 'VERIFICAR NOVAMENTE'}</span>
            <span className="sm:hidden">{isScanning ? '...' : 'RE-SCAN'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

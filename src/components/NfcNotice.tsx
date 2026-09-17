import React from 'react';
import { Cpu, Wifi } from 'lucide-react';
import { motion } from 'motion/react';

interface NfcNoticeProps {
  nfcChipUid?: string;
}

export const NfcNotice: React.FC<NfcNoticeProps> = ({ nfcChipUid = '04:A2:8F:7C:9B:41:80' }) => {
  return (
    <div id="nfc-notice" className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-950/40 via-neutral-900/80 to-blue-950/40 border border-cyan-500/30 p-5 sm:p-6 backdrop-blur-md">
      {/* Top glowing line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* NFC Hardware Chip Graphic */}
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-950/50">
              <Cpu className="w-6 h-6 text-cyan-400" />
            </div>

            <motion.div
              animate={{ scale: [1, 1.35], opacity: [0.7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              className="absolute -inset-1 rounded-xl border border-cyan-400/50 pointer-events-none"
            />
          </div>

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[11px] font-tech uppercase text-cyan-400 font-semibold tracking-wider mb-0.5">
              <Wifi className="w-3.5 h-3.5 text-cyan-400" />
              <span>CHIP DE PROXIMIDADE VERIFICADO</span>
            </div>

            <h3 className="font-heading text-base sm:text-lg font-bold text-white">
              Esta peça foi autenticada via chip NFC oficial GOTTA.
            </h3>

            <p className="text-xs text-neutral-400 font-sans mt-0.5">
              Microchip embutido e 100% à prova d'água na etiqueta da camiseta.
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-950/90 border border-cyan-500/20 text-xs font-tech text-cyan-300">
          <span className="text-[10px] text-neutral-400 uppercase">CHIP ID:</span>
          <span className="font-mono text-cyan-300 font-bold">{nfcChipUid}</span>
        </div>
      </div>
    </div>
  );
};

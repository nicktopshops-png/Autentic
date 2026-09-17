import React from 'react';
import { ShieldCheck, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface AuthenticityBadgeProps {
  verifiedAt?: string;
  isScanning?: boolean;
}

export const AuthenticityBadge: React.FC<AuthenticityBadgeProps> = () => {
  return (
    <div id="authenticity-badge" className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-950/30 via-neutral-900/80 to-neutral-950 border border-emerald-500/40 p-6 sm:p-8 shadow-2xl shadow-emerald-950/40 backdrop-blur-md">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animated Green Badge Icon */}
        <div className="relative mb-4 flex items-center justify-center">
          {/* Outer Pulsing Rings */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-3 rounded-full border border-emerald-400/50 pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.45, 1], opacity: [0.25, 0, 0.25] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            className="absolute -inset-6 rounded-full border border-emerald-500/30 pointer-events-none"
          />

          {/* Central Shield/Checkmark Container */}
          <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-emerald-500 via-emerald-400 to-teal-300 p-1 shadow-lg shadow-emerald-500/40">
            <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center relative overflow-hidden">
              {/* Subtle spinning light accent */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 opacity-40 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(16,185,129,0.9)_180deg,transparent_360deg)]"
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 14, stiffness: 200 }}
                  className="relative"
                >
                  <ShieldCheck className="w-10 h-10 sm:w-11 sm:h-11 text-emerald-400 drop-shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-400 rounded-full p-0.5 text-neutral-950 shadow-md">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Status Headline requested */}
        <div className="space-y-2 max-w-lg">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-tech tracking-wider uppercase mb-1">
            <Sparkles className="w-3 h-3 text-emerald-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span>CERTIFICAÇÃO OFICIAL GOTTA</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase drop-shadow-[0_2px_12px_rgba(16,185,129,0.3)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              PRODUTO ORIGINAL
            </span>{' '}
            <span className="text-white">E AUTÊNTICO</span>
          </h2>

          <p className="text-sm text-neutral-300 font-sans leading-relaxed">
            Peça 100% genuína verificada com tecnologia hidrorrepelente exclusiva GOTTA Kids.
          </p>
        </div>
      </div>
    </div>
  );
};

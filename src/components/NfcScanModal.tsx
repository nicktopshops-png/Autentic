import React, { useEffect, useState } from 'react';
import { Smartphone, Wifi, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NfcScanModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productCode: string;
}

export const NfcScanModal: React.FC<NfcScanModalProps> = ({
  isOpen,
  onClose,
  productName,
  productCode
}) => {
  const [step, setStep] = useState<'reading' | 'decoding' | 'success'>('reading');

  useEffect(() => {
    if (!isOpen) {
      setStep('reading');
      return;
    }

    const timer1 = setTimeout(() => {
      setStep('decoding');
    }, 1200);

    const timer2 = setTimeout(() => {
      setStep('success');
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-md bg-neutral-900 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Graphic */}
          <div className="my-6 relative flex items-center justify-center">
            {step === 'reading' && (
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
                  <Smartphone className="w-10 h-10 animate-pulse" />
                </div>
                {/* Wave ripples */}
                <motion.div
                  animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 rounded-full border border-cyan-400 pointer-events-none"
                />
              </div>
            )}

            {step === 'decoding' && (
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-blue-950/80 border border-blue-500/50 flex items-center justify-center text-blue-400">
                  <Wifi className="w-10 h-10 animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full border border-blue-400 pointer-events-none"
                />
              </div>
            )}

            {step === 'success' && (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-24 h-24 rounded-full bg-emerald-950/90 border border-emerald-500 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/30"
              >
                <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
              </motion.div>
            )}
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-tech text-cyan-400 uppercase tracking-widest font-semibold">
              SIMULAÇÃO DE LEITURA NFC
            </span>
            <h3 className="font-heading text-xl font-bold text-white">
              {step === 'reading' && 'Aproxime o dispositivo do chip...'}
              {step === 'decoding' && 'Descriptografando assinatura digital...'}
              {step === 'success' && 'Chip Validado com Sucesso!'}
            </h3>
            <p className="text-xs text-neutral-400 font-sans">
              {step === 'success'
                ? `Peça original GOTTA identificada: ${productCode}`
                : 'Conectando ao microchip embutido na etiqueta tática.'}
            </p>
          </div>

          {step === 'success' && (
            <button
              onClick={onClose}
              className="mt-6 w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-heading font-bold text-sm tracking-wide transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              VISUALIZAR CERTIFICADO
            </button>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

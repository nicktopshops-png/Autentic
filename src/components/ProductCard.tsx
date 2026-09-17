import React, { useState } from 'react';
import { ProductVerification } from '../types';
import { 
  Tag, 
  Layers, 
  Hash, 
  Copy, 
  Check, 
  Droplets, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: ProductVerification;
  onSelectSize?: (size: string) => void;
}

const AVAILABLE_SIZES = [
  '02 ANOS',
  '04 ANOS',
  '06 ANOS',
  '08 ANOS',
  '10 ANOS',
  '12 ANOS',
  '14 ANOS',
  '16 ANOS'
];

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product,
  onSelectSize
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.size.split(' ')[0] + ' ANOS');
  const [waterEffectActive, setWaterEffectActive] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(product.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
    if (onSelectSize) {
      onSelectSize(`${size} (INFANTIL)`);
    }
  };

  const triggerWaterEffect = () => {
    setWaterEffectActive(true);
    setTimeout(() => {
      setWaterEffectActive(false);
    }, 2400);
  };

  return (
    <div id="product-card" className="w-full rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-2xl overflow-hidden backdrop-blur-md">
      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Product Image Column with interactive hydrophobic effect */}
          <div className="md:col-span-5 relative flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-sm rounded-2xl overflow-hidden bg-neutral-950 border border-cyan-500/20 shadow-lg group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Water-repellent badge overlay */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/85 backdrop-blur-md border border-cyan-400/40 text-xs font-tech text-cyan-300 shadow-md">
                <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-semibold">TECIDO HIDRORREPELENTE</span>
              </div>

              {/* Simulated Water Droplets Beading Animation on demand */}
              {waterEffectActive && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: -20, opacity: 0, scale: 0.8 }}
                      animate={{ 
                        y: [0, 180 + i * 20], 
                        opacity: [0, 1, 1, 0],
                        scale: [0.8, 1.2, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 1.6 + (i * 0.1), 
                        delay: i * 0.15,
                        ease: 'easeInOut' 
                      }}
                      className="absolute rounded-full bg-cyan-300/80 shadow-[0_0_10px_rgba(56,189,248,0.8)] backdrop-blur-sm"
                      style={{
                        left: `${20 + (i * 9)}%`,
                        width: `${10 + (i % 3) * 4}px`,
                        height: `${12 + (i % 3) * 4}px`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-x-0 bottom-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-900/90 text-[11px] font-tech text-cyan-200 border border-cyan-400/50 shadow-lg animate-pulse">
                      Gotas escorrendo sem absorver!
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Cool interactive droplet test button */}
            <button
              onClick={triggerWaterEffect}
              className="mt-3.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/30 hover:border-cyan-400 text-xs font-tech text-cyan-300 transition-all cursor-pointer shadow-sm active:scale-95"
              title="Clique para ver o efeito repelente a água"
            >
              <Droplets className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ver Efeito Hidrorrepelente</span>
            </button>
          </div>

          {/* Product Info Column */}
          <div className="md:col-span-7 space-y-6">
            <div>
              {/* Coleção */}
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-tech tracking-wider uppercase mb-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold">{product.collection}</span>
              </div>

              {/* Nome da Peça */}
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {product.name}
              </h2>

              <p className="text-sm text-neutral-300 font-sans mt-2">
                Conforto macio com tecnologia que faz líquidos e sujeiras escorrerem sem manchar.
              </p>
            </div>

            {/* Tamanho Selector */}
            <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-tech text-neutral-400 uppercase flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-cyan-400" />
                  <span>TAMANHO:</span>
                  <strong className="text-cyan-300 ml-1 font-bold">{product.size}</strong>
                </span>
                <span className="text-[11px] font-tech text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Grade Infantil (2 ao 16)
                </span>
              </div>

              <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-2">
                {AVAILABLE_SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-tech font-bold transition-all text-center cursor-pointer ${
                      selectedSize === size
                        ? 'bg-cyan-500 text-neutral-950 border border-cyan-300 shadow-md shadow-cyan-500/30'
                        : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Código de Identificação Único */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-cyan-500/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-tech text-cyan-400 uppercase tracking-wider mb-1">
                    <Hash className="w-3.5 h-3.5 text-cyan-400" />
                    <span>CÓDIGO DE IDENTIFICAÇÃO ÚNICO</span>
                  </div>
                  <div className="font-tech text-xl sm:text-2xl font-bold tracking-wider text-white select-all">
                    {product.code}
                  </div>
                </div>

                <button
                  id="copy-product-code-btn"
                  onClick={handleCopyCode}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-tech font-semibold transition-all cursor-pointer ${
                    copiedCode
                      ? 'bg-emerald-500 text-neutral-950 border border-emerald-400'
                      : 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40'
                  }`}
                  title="Copiar código para a área de transferência"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4 text-neutral-950 stroke-[3]" />
                      <span>COPIADO!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>COPIAR CÓDIGO</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Clean Feature Highlights (Minimal and cool) */}
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
              <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 shrink-0">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-tech font-bold text-white block">Repelente a Líquidos</span>
                  <span className="text-neutral-400 text-[11px]">Sucos, água e respingos</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-tech font-bold text-white block">100% Algodão Kids</span>
                  <span className="text-neutral-400 text-[11px]">Toque macio e respirável</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

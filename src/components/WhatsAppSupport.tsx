import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { ProductVerification } from '../types';

interface WhatsAppSupportProps {
  product: ProductVerification;
}

export const WhatsAppSupport: React.FC<WhatsAppSupportProps> = ({ product }) => {
  const getWhatsAppMessage = () => {
    const text = `Olá, equipe de Atendimento GOTTA!\n\n` +
      `Gostaria de tirar uma dúvida sobre a minha camiseta:\n` +
      `• Peça: ${product.name}\n` +
      `• Tamanho: ${product.size}\n` +
      `• Coleção: ${product.collection}\n` +
      `• Código Único: ${product.code}\n\n` +
      `Poderiam me ajudar?`;

    return encodeURIComponent(text);
  };

  const whatsappNumber = '5544991061994';
  const formattedPhone = '(44) 99106-1994';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${getWhatsAppMessage()}`;

  return (
    <div className="w-full rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900/90 to-neutral-950 border border-emerald-500/30 p-6 sm:p-7 relative overflow-hidden shadow-xl backdrop-blur-md">
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        <div className="space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-tech text-emerald-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SUPORTE OFICIAL GOTTA</span>
          </div>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
            Dúvidas sobre a peça ou precisa de suporte?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans">
            Fale conosco diretamente no WhatsApp <span className="text-emerald-400 font-tech font-bold">{formattedPhone}</span> para dúvidas sobre tamanho, tecnologia ou pedidos.
          </p>
        </div>

        {/* Action Button as specifically required */}
        <div className="shrink-0 w-full sm:w-auto flex flex-col items-center sm:items-end gap-1.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-heading font-extrabold text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer"
            id="whatsapp-support-btn"
          >
            <MessageCircle className="w-5 h-5 text-neutral-950 stroke-[2.5]" />
            <span>FALAR NO WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <span className="text-[11px] font-tech text-neutral-400">
            {formattedPhone}
          </span>
        </div>
      </div>
    </div>
  );
};

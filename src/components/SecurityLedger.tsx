import React from 'react';
import { ShieldCheck, Cpu, Terminal, Key, CheckCircle, Database } from 'lucide-react';
import { ProductVerification } from '../types';

interface SecurityLedgerProps {
  product: ProductVerification;
}

export const SecurityLedger: React.FC<SecurityLedgerProps> = ({ product }) => {
  return (
    <div id="security-ledger" className="w-full rounded-xl bg-neutral-950/80 border border-neutral-800/80 p-5 sm:p-6 font-tech">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-xs uppercase font-bold text-neutral-200 tracking-wider">
            REGISTRO CRIPTOGRÁFICO DE AUTENTICAÇÃO // GOTTA LABS
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>VALIDADO</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
          <span className="text-neutral-500 uppercase block text-[10px] tracking-wider mb-1">
            Hardware Chip UID
          </span>
          <span className="text-cyan-300 font-mono font-semibold">
            {product.nfcChipUid}
          </span>
        </div>

        <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
          <span className="text-neutral-500 uppercase block text-[10px] tracking-wider mb-1">
            Frequência Operacional
          </span>
          <span className="text-neutral-200">
            13.56 MHz (ISO/IEC 14443 Type A)
          </span>
        </div>

        <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
          <span className="text-neutral-500 uppercase block text-[10px] tracking-wider mb-1">
            Protocolo de Integridade
          </span>
          <span className="text-emerald-400">
            Assinatura Digital SHA-256
          </span>
        </div>

        <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
          <span className="text-neutral-500 uppercase block text-[10px] tracking-wider mb-1">
            Lote de Produção
          </span>
          <span className="text-neutral-200">
            {product.batchNumber}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-2 text-[11px] text-neutral-400">
        <span>Garantia de Autenticidade Perpétua vinculada ao Chip Físico.</span>
        <span className="text-cyan-400 font-semibold">GOTTA CLOTHING CO. // SÃO PAULO, BR</span>
      </div>
    </div>
  );
};

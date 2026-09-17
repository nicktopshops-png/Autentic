import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AuthenticityBadge } from './components/AuthenticityBadge';
import { NfcNotice } from './components/NfcNotice';
import { ProductCard } from './components/ProductCard';
import { WhatsAppSupport } from './components/WhatsAppSupport';
import { NfcScanModal } from './components/NfcScanModal';
import { DEFAULT_PRODUCT } from './data/products';
import { ProductVerification } from './types';
import { Droplets, ShieldCheck } from 'lucide-react';

export default function App() {
  const [product, setProduct] = useState<ProductVerification>(DEFAULT_PRODUCT);
  const [isScanning, setIsScanning] = useState(false);
  const [showScanModal, setShowScanModal] = useState(false);

  // Check URL query parameters on load (e.g. ?code=GOTTA-2026-8894X)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const codeParam = params.get('code');
      if (codeParam) {
        setProduct((prev) => ({ ...prev, code: codeParam }));
      }
    } catch (e) {
      console.error('Error reading URL params', e);
    }
  }, []);

  const handleSelectSize = (size: string) => {
    setProduct((prev) => ({ ...prev, size }));
  };

  const handleTriggerRescan = () => {
    setIsScanning(true);
    setShowScanModal(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 2400);
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-neutral-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-300 relative bg-tech-grid">
      {/* Background ambient radial blue glow */}
      <div className="fixed inset-0 bg-radial-glow pointer-events-none" />

      {/* Header */}
      <Header onRescan={handleTriggerRescan} isScanning={isScanning} />

      {/* Main Content Area - Clean, focused, high impact */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-9 space-y-6 relative z-10">
        {/* Animated Green Badge: PRODUTO ORIGINAL E AUTÊNTICO */}
        <section aria-label="Selo de Autenticidade">
          <AuthenticityBadge />
        </section>

        {/* Official NFC Notice: Esta peça foi autenticada via chip NFC oficial GOTTA */}
        <section aria-label="Aviso Oficial NFC">
          <NfcNotice nfcChipUid={product.nfcChipUid} />
        </section>

        {/* Product Information Showcase (Nome, Tamanho, Coleção, Código Único) */}
        <section aria-label="Informações do Produto">
          <ProductCard
            product={product}
            onSelectSize={handleSelectSize}
          />
        </section>

        {/* WhatsApp Support Button */}
        <section aria-label="Atendimento via WhatsApp">
          <WhatsAppSupport product={product} />
        </section>
      </main>

      {/* Clean Modern Footer */}
      <footer className="w-full border-t border-neutral-800/60 bg-neutral-950/80 py-6 px-4 sm:px-6 mt-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-tech text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-white text-sm">GOTTA</span>
            <span className="text-neutral-600">|</span>
            <span className="flex items-center gap-1 text-cyan-400">
              <Droplets className="w-3.5 h-3.5" />
              Tecnologia Hidrorrepelente Infantil
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>CHIP NFC OFICIAL EMBUTIDO</span>
          </div>

          <div className="text-neutral-500">
            © {new Date().getFullYear()} GOTTA Kids. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* NFC Re-scan Simulation Modal */}
      <NfcScanModal
        isOpen={showScanModal}
        onClose={() => setShowScanModal(false)}
        productName={product.name}
        productCode={product.code}
      />
    </div>
  );
}

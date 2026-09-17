import { ProductVerification } from '../types';
import hydroTshirtImg from '../assets/images/gotta_hydro_tshirt_1789671658443.jpg';

export const DEFAULT_PRODUCT: ProductVerification = {
  code: 'GOTTA-2026-8894X',
  name: 'Camiseta Infantil Hidrorrepelente',
  category: 'Tecnologia Hidrofóbica Kids',
  size: '08 ANOS (INFANTIL)',
  collection: 'Coleção Splash & Shield 2026',
  dropYear: '2026',
  edition: 'Lote Oficial Certificado',
  colorway: 'Black Obsidian // Aqua Tech',
  image: hydroTshirtImg,
  nfcChipUid: '04:A2:8F:7C:9B:41:80',
  verifiedAt: 'Autenticado com Sucesso',
  verificationCount: 1,
  batchNumber: 'LOTE-GT-2026-8894X',
  techSpecs: [
    {
      title: 'Tecnologia Hidrorrepelente',
      description: 'Líquidos e respingos deslizam sem molhar nem manchar o tecido.',
      iconName: 'Droplets'
    },
    {
      title: 'Toque Macio 100% Algodão',
      description: 'Respirável, confortável e perfeita para a pele sensível das crianças.',
      iconName: 'Sparkles'
    }
  ],
  careInstructions: [
    'Lavar normalmente na máquina em ciclo delicado',
    'O chip NFC oficial é selado e resistente à água'
  ],
  materials: [
    'Algodão Premium com Barreira Hidrofóbica Respirável'
  ]
};

export const SAMPLE_PRODUCTS: ProductVerification[] = [
  {
    ...DEFAULT_PRODUCT,
    code: 'GOTTA-2026-2210B',
    size: '02 ANOS (INFANTIL)'
  },
  {
    ...DEFAULT_PRODUCT,
    code: 'GOTTA-2026-6642A',
    size: '06 ANOS (INFANTIL)'
  },
  DEFAULT_PRODUCT,
  {
    ...DEFAULT_PRODUCT,
    code: 'GOTTA-2026-1120K',
    size: '12 ANOS (INFANTIL)'
  },
  {
    ...DEFAULT_PRODUCT,
    code: 'GOTTA-2026-9934Z',
    size: '16 ANOS (INFANTIL)'
  }
];

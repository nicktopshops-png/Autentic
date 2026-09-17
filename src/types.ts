export interface ProductVerification {
  code: string;
  name: string;
  category: string;
  size: string;
  collection: string;
  dropYear: string;
  edition: string;
  colorway: string;
  image: string;
  nfcChipUid: string;
  verifiedAt: string;
  verificationCount: number;
  batchNumber: string;
  techSpecs: {
    title: string;
    description: string;
    iconName: string;
  }[];
  careInstructions: string[];
  materials: string[];
}

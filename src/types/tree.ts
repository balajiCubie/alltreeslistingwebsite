export interface Tree {
  id: string;
  commonName: string;
  scientificName: string;
  region: string;
  status: string; // Conservation status (e.g., Native, Endangered, Vulnerable, Ornamental)
  imageUrl: string;
  slug: string;
  family?: string;
  genus?: string;
  shortDescription?: string;
  isEndangered?: boolean;
  isEndemic?: boolean;
  uses?: string[]; // e.g., medicinal, timber, ornamental, food, water storage, conservation, tourism, dye, oil
  quickFacts?: {
    height?: string;
    lifespan?: string;
  };
  isFeatured?: boolean;
}

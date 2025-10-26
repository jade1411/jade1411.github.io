export enum BeerType {
  LAGER = 'lager',
  ALE = 'ale',
  IPA = 'ipa',
  STOUT = 'stout',
}

export interface Product {
  id: number;
  name: string;
  type: BeerType;
  description: string;
  fullDescription: string;
  abv: number;
  ibu: number;
  image: string;
  gallery: string[];
  tags: string[];
  available: boolean;
}

export interface FilterOption {
  value: BeerType | 'all';
  label: string;
  count: number;
}
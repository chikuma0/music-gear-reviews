export interface GearReview {
  id: string;
  title: string;
  brand: string;
  model: string;
  category: GearCategory;
  price: {
    current: number;
    currency: string;
    msrp?: number;
  };
  rating: {
    overall: number;
    sound: number;
    buildQuality: number;
    value: number;
    usability: number;
  };
  summary: string;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  images: {
    main: string;
    gallery: string[];
  };
  dateReviewed: string;
  author: string;
  content: {
    introduction: string;
    soundQuality: string;
    buildAndDesign: string;
    features: string;
    valueForMoney: string;
    conclusion: string;
  };
  tags: string[];
  affiliate?: {
    amazonUrl?: string;
    sweetwaterUrl?: string;
    reverb?: string;
  };
}

export type GearCategory = 
  | 'synthesizers'
  | 'daws'
  | 'audio-interfaces'
  | 'studio-monitors'
  | 'headphones'
  | 'midi-controllers'
  | 'effects-pedals'
  | 'microphones'
  | 'drum-machines'
  | 'samplers';

export interface CategoryInfo {
  name: string;
  slug: GearCategory;
  description: string;
  icon: string;
}
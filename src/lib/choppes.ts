export type Chopp = {
  slug: string;
  name: string;
  short: string;
  ibu: number;
  abv: string;
  color: string;
  intensity: "Leve" | "Médio" | "Intenso";
  pairing: string;
  profile: string;
  hue: string; // tailwind-able color via inline style
};

export const CHOPPS: Chopp[] = [
  { slug: "pilsen", name: "Pilsen", short: "Leve, refrescante e equilibrada.",
    ibu: 18, abv: "4,8%", color: "Dourado claro", intensity: "Leve",
    pairing: "Petiscos, churrasco, frutos do mar",
    profile: "Aroma maltado suave, amargor delicado e final limpo.",
    hue: "oklch(0.85 0.14 90)" },
  { slug: "helles", name: "Helles", short: "Maltada suave com final limpo.",
    ibu: 20, abv: "5,0%", color: "Dourado", intensity: "Leve",
    pairing: "Pratos leves, queijos suaves",
    profile: "Doçura de malte equilibrada, drinkability altíssima.",
    hue: "oklch(0.82 0.15 85)" },
  { slug: "weiss", name: "Weiss", short: "Notas frutadas e alta refrescância.",
    ibu: 14, abv: "5,2%", color: "Âmbar turvo", intensity: "Médio",
    pairing: "Saladas, peixes, frango grelhado",
    profile: "Banana e cravo no aroma, corpo cremoso e refrescante.",
    hue: "oklch(0.80 0.13 70)" },
  { slug: "red-ale", name: "Red Ale", short: "Toque caramelizado e corpo equilibrado.",
    ibu: 28, abv: "5,4%", color: "Vermelho âmbar", intensity: "Médio",
    pairing: "Carnes vermelhas, hambúrguer",
    profile: "Maltes caramelo, leve tostado, final equilibrado.",
    hue: "oklch(0.55 0.16 35)" },
  { slug: "ipa", name: "IPA", short: "Amargor marcante e aroma cítrico.",
    ibu: 55, abv: "6,2%", color: "Âmbar dourado", intensity: "Intenso",
    pairing: "Comida apimentada, queijos fortes",
    profile: "Lúpulos cítricos e tropicais, amargor firme e aromático.",
    hue: "oklch(0.72 0.16 65)" },
  { slug: "bock", name: "Bock", short: "Mais intensa e encorpada.",
    ibu: 25, abv: "6,5%", color: "Marrom escuro", intensity: "Intenso",
    pairing: "Pratos robustos, defumados",
    profile: "Malte tostado, notas de caramelo e chocolate.",
    hue: "oklch(0.30 0.06 45)" },
  { slug: "lager", name: "Lager", short: "Drinkability elevada.",
    ibu: 16, abv: "4,6%", color: "Dourado claro", intensity: "Leve",
    pairing: "Versátil, ótima para qualquer ocasião",
    profile: "Limpa, crocante e equilibrada — para todos os públicos.",
    hue: "oklch(0.87 0.13 95)" },
];

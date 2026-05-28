import pilsenImg from "@/assets/produtos/pilsen.png";
import hellesImg from "@/assets/produtos/helles.png";
import weissImg from "@/assets/produtos/weiss.png";
import redAleImg from "@/assets/produtos/red-ale.png";
import ipaImg from "@/assets/produtos/ipa.png";
import bockImg from "@/assets/produtos/bock.png";
import lagerImg from "@/assets/produtos/lager.png";
import ipa600Img from "@/assets/produtos/IPA600.png";
import doubleipa600Img from "@/assets/produtos/Double.png";
import helles600Img from "@/assets/produtos/Helles600.png";
import weiss600Img from "@/assets/produtos/Weiss600.png";
import redale600Img from "@/assets/produtos/Red600.png";
import barril30Img from "@/assets/produtos/Barril 30L.png";
import barril50Img from "@/assets/produtos/Barril 50L.png";

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
  hue: string;
  image: string;
  volume: string;
  accent: string; // hex/oklch tone for the bottle backdrop
};

export const CHOPPS: Chopp[] = [
  {
    slug: "pilsen",
    name: "Pilsen",
    short: "Leve, refrescante e equilibrada.",
    ibu: 18,
    abv: "4,5%",
    color: "Dourado claro",
    intensity: "Leve",
    pairing: "Petiscos, churrasco, frutos do mar",
    profile: "Aroma maltado suave, amargor delicado e final limpo.",
    hue: "oklch(0.85 0.14 90)",
    image: pilsenImg,
    volume: "Barrilete 1L",
    accent: "#c4543a",
  },
  {
    slug: "helles",
    name: "Helles",
    short: "Maltada suave com final limpo.",
    ibu: 20,
    abv: "5,2%",
    color: "Dourado",
    intensity: "Leve",
    pairing: "Pratos leves, queijos suaves",
    profile: "Doçura de malte equilibrada, drinkability altíssima.",
    hue: "oklch(0.82 0.15 85)",
    image: hellesImg,
    volume: "Barrilete 1L",
    accent: "#1f6dbf",
  },
  {
    slug: "weiss",
    name: "Weiss",
    short: "Notas frutadas e alta refrescância.",
    ibu: 14,
    abv: "6,8%",
    color: "Âmbar turvo",
    intensity: "Médio",
    pairing: "Saladas, peixes, frango grelhado",
    profile: "Banana e cravo no aroma, corpo cremoso e refrescante.",
    hue: "oklch(0.80 0.13 70)",
    image: weissImg,
    volume: "Barrilete 1L",
    accent: "#e8b829",
  },
  {
    slug: "red-ale",
    name: "Red Ale",
    short: "Toque caramelizado e corpo equilibrado.",
    ibu: 28,
    abv: "4,5%",
    color: "Vermelho âmbar",
    intensity: "Médio",
    pairing: "Carnes vermelhas, hambúrguer",
    profile: "Maltes caramelo, leve tostado, final equilibrado.",
    hue: "oklch(0.55 0.16 35)",
    image: redAleImg,
    volume: "Barrilete 1L",
    accent: "#c8242a",
  },
  {
    slug: "ipa",
    name: "IPA",
    short: "Refrescante e saborosa, aroma cítrico.",
    ibu: 55,
    abv: "5,7%",
    color: "Âmbar dourado",
    intensity: "Intenso",
    pairing: "Comida apimentada, queijos fortes",
    profile: "Lúpulos cítricos e tropicais, amargor firme e aromático.",
    hue: "oklch(0.72 0.16 65)",
    image: ipaImg,
    volume: "Barrilete 1L",
    accent: "#2e8b3d",
  },
  {
    slug: "bock",
    name: "Bock",
    short: "Mais intensa, encorpada e puro malte.",
    ibu: 25,
    abv: "5,5%",
    color: "Marrom escuro",
    intensity: "Intenso",
    pairing: "Pratos robustos, defumados",
    profile: "Malte tostado, notas de caramelo e chocolate.",
    hue: "oklch(0.30 0.06 45)",
    image: bockImg,
    volume: "Barrilete 1L",
    accent: "#8a3a3f",
  },
  {
    slug: "lager",
    name: "Lager",
    short: "Leve, refrescante e drinkability elevada.",
    ibu: 16,
    abv: "4,6%",
    color: "Dourado claro",
    intensity: "Leve",
    pairing: "Versátil, ótima para qualquer ocasião",
    profile: "Limpa, crocante e equilibrada — para todos os públicos.",
    hue: "oklch(0.87 0.13 95)",
    image: lagerImg,
    volume: "Barrilete 2L",
    accent: "#1f6dbf",
  },

  {
    slug: "ipa600",
    name: "IPA",
    short: "Refrescante e saborosa, aroma cítrico.",
    ibu: 45,
    abv: "5%",
    color: "Dourado claro",
    intensity: "Médio",
    pairing: "Carne vermelha e pizza",
    profile: "Lúpulos cítricos e tropicais, amargor firme e aromático.",
    hue: "oklch(0.72 0.16 65)",
    image: ipa600Img,
    volume: "600 ML",
    accent: "#2e8b3d",
  },
  {
    slug: "doubleipa",
    name: "Double IPA",
    short: "Refrescante e saborosa, aroma cítrico.",
    ibu: 55,
    abv: "5,7%",
    color: "Dourado claro",
    intensity: "Intenso",
    pairing: "Carnes vermelhas e pizzas",
    profile: "Lúpulos cítricos e tropicais, amargor firme e aromático.",
    hue: "oklch(0.72 0.16 65)",
    image: doubleipa600Img,
    volume: "600ml",
    accent: "#03380c",
  },
  {
    slug: "helles600",
    name: "Helles",
    short: "Refrescante e saborosa, aroma cítrico.",
    ibu: 55,
    abv: "5,7%",
    color: "Âmbar dourado",
    intensity: "Médio",
    pairing: "Comida apimentada, queijos fortes",
    profile: "Lúpulos cítricos e tropicais, amargor firme e aromático.",
    hue: "oklch(0.72 0.16 65)",
    image: helles600Img,
    volume: "600ml",
    accent: "#030583",
  },
  {
    slug: "weiss600",
    name: "Weiss",
    short: "Refrescante e saborosa, aroma cítrico.",
    ibu: 55,
    abv: "5,7%",
    color: "Âmbar dourado",
    intensity: "Leve",
    pairing: "Comida apimentada, queijos fortes",
    profile: "Lúpulos cítricos e tropicais, amargor firme e aromático.",
    hue: "oklch(0.72 0.16 65)",
    image: weiss600Img,
    volume: "600ml",
    accent: "#d3eb01",
  },
  {
    slug: "redale600",
    name: "Red Ale",
    short: "Refrescante e saborosa, aroma cítrico.",
    ibu: 15,
    abv: "4,5%",
    color: "Âmbar dourado",
    intensity: "Médio",
    pairing: "Comida apimentada, queijos fortes",
    profile: "Lúpulos cítricos e tropicais, amargor firme e aromático.",
    hue: "oklch(0.72 0.16 65)",
    image: redale600Img,
    volume: "600ml",
    accent: "#a01d05",
  },
  {
    slug: "barril30",
    name: "Barril 30L",
    short: "Leve, refrescante e equilibrada.",
    ibu: 18,
    abv: "4,5%",
    color: "Dourado claro",
    intensity: "Leve",
    pairing: "Petiscos, churrasco, frutos do mar",
    profile: "Aroma maltado suave, amargor delicado e final limpo.",
    hue: "oklch(0.85 0.14 90)",
    image: barril30Img,
    volume: "30L",
    accent: "#c4543a",
  },
  {
    slug: "barril50",
    name: "Barril 50L",
    short: "Leve, refrescante e equilibrada.",
    ibu: 18,
    abv: "4,5%",
    color: "Dourado claro",
    intensity: "Leve",
    pairing: "Petiscos, churrasco, frutos do mar",
    profile: "Aroma maltado suave, amargor delicado e final limpo.",
    hue: "oklch(0.85 0.14 90)",
    image: barril50Img,
    volume: "50L",
    accent: "#c4543a",
  },
];

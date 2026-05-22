export const SITE = {
  name: "Tupiniquim Cervejaria",
  tagline: "Chopp Artesanal Premium",
  city: "Santa Maria",
  state: "RS",
  region: "Santa Maria e região central do RS",
  phone: "+55 55 99999-9999",
  whatsappRaw: "5555999999999",
  email: "contato@goldenchopp.com.br",
  address: "Rua das Cervejarias, 1000 — Santa Maria/RS",
  hours: "Seg a Sáb · 09h às 22h",
  instagram: "https://instagram.com/",
};

export const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(msg)}`;

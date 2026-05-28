export const SITE = {
  name: "Tupiniquim Cervejaria",
  tagline: "Chopp Artesanal Premium",
  city: "Santa Maria",
  state: "RS",
  region: "Santa Maria e região central do RS",
  phone: "+55 55 98115-4577",
  whatsappRaw: "5555981154577",
  email: "hypebeer2@gmail.com",
  address: "Rua Silva Jardim, 1032 — Santa Maria/RS",
  hours: "Seg a Sáb · 09h às 18h",
  instagram: "https://instagram.com/hypebeersm",
};

export const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(msg)}`;

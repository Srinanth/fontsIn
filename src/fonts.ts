export interface font {
  name: string;
  href: string; // Google CDN link
  className: string;
  fontFamily: string;
}

export const fonts: font[] = [
  {
    name: "Bungee",
    href: "https://fonts.googleapis.com/css2?family=Bungee&display=swap",
    className: "bunge-orange",
    fontFamily: "'Bungee', sans-serif"
  },

  {
    name: "Roboto Condensed",
    href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
    className: "robotoCondensed",
    fontFamily: "'Roboto Condensed', sans-serif"
  },
];

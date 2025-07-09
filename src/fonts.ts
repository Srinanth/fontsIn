export interface font {
  name: string;
  file: string;
  weight?: string;
  style?: string;
  className: string;
  format: string;
}

export const fonts: font[] = [
  {
    name: "CivicBold",
    file: "ManufacturingConsent-Regular.ttf",
    weight: "normal",
    style: "normal",
    className: "civic-bold",
    format: "truetype"
  },

];

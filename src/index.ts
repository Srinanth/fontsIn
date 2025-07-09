import { fonts } from './fonts';

let fontsInjected = false;

export function injectFonts(): void {
  if (fontsInjected || typeof document === 'undefined') return;

  const style = document.createElement('style');
  style.textContent = generateFontCSS();
  document.head.appendChild(style);
  fontsInjected = true;
}

function generateFontCSS(): string {
  return fonts.map(font => `
    @font-face {
      font-family: '${font.name}';
      src: url('${getFontUrl(font.file)}') format('${font.format}');
      font-weight: ${font.weight ?? 'normal'};
      font-style: ${font.style ?? 'normal'};
      font-display: swap;
    }

    .${font.className} {
      font-family: '${font.name}', sans-serif;
    }
  `).join('\n');
}

function getFontUrl(file: string): string {
  return new URL(`../fonts/${file}`, import.meta.url).toString();
}

if (typeof document !== 'undefined') {
  injectFonts();
}

export { fonts };
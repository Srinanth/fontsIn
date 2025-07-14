import { fonts } from './fonts';

let fontsInjected = false;

export function injectFonts(): void {
  if (fontsInjected || typeof document === 'undefined') return;

  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = font.href;
    document.head.appendChild(link);
  });

  const style = document.createElement('style');
  style.textContent = generateFontClasses();
  document.head.appendChild(style);

  fontsInjected = true;
}

function generateFontClasses(): string {
  return fonts.map(font => `
    .${font.className} {
      font-family: ${font.fontFamily};
    }
  `).join('\n');
}

if (typeof document !== 'undefined') {
  injectFonts();
}

export { fonts };

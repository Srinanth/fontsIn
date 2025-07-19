[![NPM Version](https://img.shields.io/npm/v/fontsin?color=F3FC6F)](https://www.npmjs.com/package/fontsin)
[![NPM Downloads](https://img.shields.io/npm/dt/fontsin?color=F3FC6F)](https://www.npmjs.com/package/fontsin)
# 🎨 FontsIn

A simple TypeScript utility that lets you **use Google Fonts via class names** — no need to copy-paste `<link>` tags or configure `@font-face` rules manually.

---

## ✨ Why Font-Ts?

✔ Skip Google Fonts copy-paste  
✔ Use fonts directly via **CSS class names**  
✔ Lightweight, easy to integrate  
✔ Built in **TypeScript** for safety and DX  
✔ Works seamlessly with **Vite**, **React**, **Next.js**, **Vue**, and other modern frontend stacks.
✔ Great for design systems or component libraries
✔ will soon implement custom fonts

---


## 📦 Installation

```bash
npm install fontsin
```

---

## 🚀 Usage

```ts
import { fonts } from 'fontsin';

```

```html
<!-- Then use it like this in your HTML/JSX -->
<span class="robotoCondensed-bold">Bold Roboto Condensed</span>
```

---

# Font Class Usage

This document lists the available font class names based on the fonts currently loaded via Google Fonts CDN.

| Font Name              | Class Name         | Example Usage                                       |
|------------------------|--------------------|------------------------------------------------------|
| **Bungee Spice**       | `bunge-orange`      | `<p class="bunge-orange">Bungee Text</p>`           |
| **Roboto Condensed**   | `robotoCondensed`   | `<p class="robotoCondensed font-bold italic">Bold Italic Roboto Condensed</p>` |

---

## Roboto Condensed Style Examples (Using CSS)

| Style                          | Usage Example                                                   |
|--------------------------------|------------------------------------------------------------------|
| Regular (400)                  | `<p class="robotoCondensed font-normal">Regular text</p>`       |
| Thin (100)                     | `<p class="robotoCondensed font-thin">Thin text</p>`            |
| Extra Light (200)              | `<p class="robotoCondensed font-extralight">Extra Light</p>`    |
| Light (300)                    | `<p class="robotoCondensed font-light">Light</p>`               |
| Medium (500)                   | `<p class="robotoCondensed font-medium">Medium</p>`             |
| Semi Bold (600)                | `<p class="robotoCondensed font-semibold">Semi Bold</p>`        |
| Bold (700)                     | `<p class="robotoCondensed font-bold">Bold</p>`                 |
| Italic                         | `<p class="robotoCondensed italic">Italic</p>`                  |
| Bold Italic                    | `<p class="robotoCondensed font-bold italic">Bold Italic</p>`   |

## 🌐 Google Fonts Reference

- [Bungee Spice](https://fonts.google.com/specimen/Bungee+Spice)
- [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed)
---

## 🙌 Contributing

Want to add more fonts or fix a bug?

```bash
git clone https://github.com/Srinanth/fontsin
cd fontsin
npm install
```

Then make your changes and submit a pull request!

---
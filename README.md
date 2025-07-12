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

## 📚 Available Fonts

| Font Name | Class Name | Preview |
|----------|------------|---------|
| **Bungee Spice** | `bunge-orange` | <span style="font-family: 'Bungee Spice', cursive;">Bungee Spice</span> |
| **Manufacturing Consent (Civic)** | `civic-link` | <span style="font-family: 'Manufacturing Consent';">Manufacturing Consent</span> |
| **Roboto Condensed Black** | `robotoCondensed-black` | <span style="font-family: 'Roboto Condensed'; font-weight: 900;">Roboto Condensed Black</span> |
| **Roboto Condensed Black Italic** | `robotoCondensed-black-italic` | <span style="font-family: 'Roboto Condensed'; font-weight: 900; font-style: italic;">Roboto Condensed Black Italic</span> |
| **Roboto Condensed Bold** | `robotoCondensed-bold` | <span style="font-family: 'Roboto Condensed'; font-weight: bold;">Roboto Condensed Bold</span> |
| **Roboto Condensed Bold Italic** | `robotoCondensed-bold-italic` | <span style="font-family: 'Roboto Condensed'; font-weight: bold; font-style: italic;">Roboto Condensed Bold Italic</span> |
| **Roboto Condensed Extra Bold** | `robotoCondensed-extra-bold` | <span style="font-family: 'Roboto Condensed'; font-weight: 800;">Roboto Condensed Extra Bold</span> |
| **Roboto Condensed Extra Bold Italic** | `robotoCondensed-extra-bold-italic` | <span style="font-family: 'Roboto Condensed'; font-weight: 800; font-style: italic;">Roboto Condensed Extra Bold Italic</span> |
| **Roboto Condensed Extra Light** | `robotoCondensed-extra-light` | <span style="font-family: 'Roboto Condensed'; font-weight: 200;">Roboto Condensed Extra Light</span> |
| **Roboto Condensed Extra Light Italic** | `robotoCondensed-extra-light-italic` | <span style="font-family: 'Roboto Condensed'; font-weight: 200; font-style: italic;">Roboto Condensed Extra Light Italic</span> |
| **Roboto Condensed Italic** | `robotoCondensed-italic` | <span style="font-family: 'Roboto Condensed'; font-style: italic;">Roboto Condensed Italic</span> |
| **Roboto Condensed Light** | `robotoCondensed-light` | <span style="font-family: 'Roboto Condensed'; font-weight: 300;">Roboto Condensed Light</span> |
| **Roboto Condensed Medium** | `robotoCondensed-medium` | <span style="font-family: 'Roboto Condensed'; font-weight: 500;">Roboto Condensed Medium</span> |
| **Roboto Condensed Medium Italic** | `robotoCondensed-medium-italic` | <span style="font-family: 'Roboto Condensed'; font-weight: 500; font-style: italic;">Roboto Condensed Medium Italic</span> |
| **Roboto Condensed Regular** | `robotoCondensed-regular` | <span style="font-family: 'Roboto Condensed';">Roboto Condensed Regular</span> |
| **Roboto Condensed Semi Bold** | `robotoCondensed-semi-bold` | <span style="font-family: 'Roboto Condensed'; font-weight: 600;">Roboto Condensed Semi Bold</span> |
| **Roboto Condensed Semi Bold Italic** | `robotoCondensed-semi-bold-italic` | <span style="font-family: 'Roboto Condensed'; font-weight: 600; font-style: italic;">Roboto Condensed Semi Bold Italic</span> |
| **Roboto Condensed Thin** | `robotoCondensed-thin` | <span style="font-family: 'Roboto Condensed'; font-weight: 100;">Roboto Condensed Thin</span> |
| **Roboto Condensed Thin Italic** | `robotoCondensed-thin-italic` | <span style="font-family: 'Roboto Condensed'; font-weight: 100; font-style: italic;">Roboto Condensed Thin Italic</span> |

---

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
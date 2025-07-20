[![NPM Version](https://img.shields.io/npm/v/fontsin?color=F3FC6F)](https://www.npmjs.com/package/fontsin)
[![NPM Downloads](https://img.shields.io/npm/dt/fontsin?color=F3FC6F)](https://www.npmjs.com/package/fontsin)

# 🎨 FontsIn

A simple TypeScript utility that lets you **use Google Fonts via class names** — no need to copy-paste `<link>` tags or configure `@font-face` rules manually.

---

## ✨ Why FontsIn?

✔ Skip Google Fonts copy-paste  
✔ Use fonts directly via **CSS class names**  
✔ Lightweight, easy to integrate  
✔ Built in **TypeScript** for safety and DX  
✔ Works seamlessly with **Vite**, **React**, **Next.js**, **Vue**, etc.  
✔ Great for design systems or component libraries  
✔ Custom font support coming soon!

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
<!-- In your HTML/JSX -->
<p class="robotoCondensed font-bold italic">Bold Italic Roboto Condensed</p>
<p class="montserrat font-semibold">Montserrat</p>
```

---

## 🧩 Available Font Classes

Use any of these classes directly in your HTML/CSS/JSX:

| Font Name             | Class Name         | Example Usage |
|-----------------------|--------------------|----------------|
| Bungee                | `bunge-orange`     | `<p class="bunge-orange">Text</p>` |
| Roboto Condensed      | `robotoCondensed`  | `<p class="robotoCondensed font-bold italic">Text</p>` |
| Montserrat            | `montserrat`       | `<p class="montserrat font-semibold">Text</p>` |
| Open Sans             | `openSans`         | `<p class="openSans font-light">Text</p>` |
| Lato                  | `lato`             | `<p class="lato font-bold">Text</p>` |
| Poppins               | `poppins`          | `<p class="poppins font-medium">Text</p>` |
| Raleway               | `raleway`          | `<p class="raleway font-extralight">Text</p>` |
| Nunito                | `nunito`           | `<p class="nunito italic">Text</p>` |
| Playfair Display      | `playfairDisplay`  | `<p class="playfairDisplay font-semibold italic">Text</p>` |
| Merriweather          | `merriweather`     | `<p class="merriweather font-bold">Text</p>` |
| Oswald                | `oswald`           | `<p class="oswald font-light">Text</p>` |
| Source Sans Pro       | `sourceSansPro`    | `<p class="sourceSansPro font-thin">Text</p>` |
| Ubuntu                | `ubuntu`           | `<p class="ubuntu font-bold">Text</p>` |
| Dancing Script        | `dancingScript`    | `<p class="dancingScript">Text</p>` |
| Pacifico              | `pacifico`         | `<p class="pacifico">Text</p>` |
| Josefin Sans          | `josefinSans`      | `<p class="josefinSans font-light">Text</p>` |
| Quicksand             | `quicksand`        | `<p class="quicksand font-bold">Text</p>` |
| Fira Sans             | `firaSans`         | `<p class="firaSans font-medium">Text</p>` |
| Exo 2                 | `exo2`             | `<p class="exo2 font-extralight">Text</p>` |
| Archivo               | `archivo`          | `<p class="archivo font-medium">Text</p>` |
| Titillium Web         | `titilliumWeb`     | `<p class="titilliumWeb font-semibold">Text</p>` |
| Cabin                 | `cabin`            | `<p class="cabin font-medium">Text</p>` |
| Arvo                  | `arvo`             | `<p class="arvo font-bold">Text</p>` |
| Vollkorn              | `vollkorn`         | `<p class="vollkorn font-semibold">Text</p>` |
| Abril Fatface         | `abrilFatface`     | `<p class="abrilFatface">Text</p>` |
| Righteous             | `righteous`        | `<p class="righteous">Text</p>` |
| Lobster               | `lobster`          | `<p class="lobster">Text</p>` |
| Bebas Neue            | `bebasNeue`        | `<p class="bebasNeue">Text</p>` |

---

## 🖋️ Styling with Tailwind or Plain CSS

Use alongside Tailwind CSS utility classes for styling:

```html
<p class="poppins text-lg font-bold italic">Bold Italic Poppins</p>
<p class="ubuntu text-sm font-light">Light Ubuntu</p>
```

---

## 🌐 Google Fonts Reference

All fonts are sourced via Google Fonts:

- [Google Fonts](https://fonts.google.com)
- [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed)
- [Bungee](https://fonts.google.com/specimen/Bungee)
- [Montserrat](https://fonts.google.com/specimen/Montserrat)
- [Poppins](https://fonts.google.com/specimen/Poppins)
- ...and [more](https://fonts.google.com/?query=fonts).

---

## 🙌 Contributing

Want to add more fonts or fix a bug?

```bash
git clone https://github.com/Srinanth/fontsin
cd fontsin
npm install
```

Then create a branch, make your changes, and submit a PR.

---
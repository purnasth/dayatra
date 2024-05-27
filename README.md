<h1 align="center">
  <img
      src="https://readme-typing-svg.demolab.com?font=Roboto+Slab&color=9f4bff&size=30&center=true&vCenter=true&width=500&lines=+TailwindCSS+Starter+Kit;"
      alt="Tailwindcs + Starter Kit"
  />
</h1>
  <br/>

<div align="center">
  <img
    alt="GitHub repo size"
    src="https://img.shields.io/github/repo-size/purnasth/tailwindcss-starter-kit?color=9f4bff&logo=github&style=for-the-badge&logoColor=9f4bff"
  />
  <img
    alt="GitHub forks"
    src="https://img.shields.io/github/forks/purnasth/tailwindcss-starter-kit?color=9f4bff&logo=github&style=for-the-badge&logoColor=9f4bff"
  />
  <img
    alt="GitHub Repo stars"
    src="https://img.shields.io/github/stars/purnasth/tailwindcss-starter-kit?color=9f4bff&logo=github&style=for-the-badge&logoColor=9f4bff"
  />
  <img
    alt="Last commit"
    src="https://img.shields.io/github/last-commit/purnasth/tailwindcss-starter-kit?color=9f4bff&logo=git&logoColor&style=for-the-badge"
  />
  <img
    alt="Commit activity"
    src="https://img.shields.io/github/commit-activity/m/purnasth/tailwindcss-starter-kit?color=9f4bff&logo=git&logoColor&style=for-the-badge"
  />
</div>
<br />

<p align="center">This template provides a stater setup to get tailwindCSS working in php website.</p>

---

## Getting Started`*`

### 1. Clone this repo`*`

```sh
git clone https://github.com/purnasth/tailwindcss-starter-kit.git
```

### 2. Install and Run`*`

Run the following commands in your terminal:

```sh
npm install -D tailwindcss
```

```
npx tailwindcss init
```

---

<!-- ### Install tailwindCSS

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
``` -->

### Replace <em>`tailwind.config.js`</em> inner codes with

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Paste these lines in <em>`style.css`</em>

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Build

```sh
npx tailwindcss -i ./css/style.css -o ./dist/output.css --watch
```

- <b><em>`npm install`</em></b> to install the node_modules on your local repo which has been .gitignore in this github repo.
- <b><em>`npm run build`</em></b> for update in dist/output.css

---

⭐ Star this repo on GitHub — it helps!

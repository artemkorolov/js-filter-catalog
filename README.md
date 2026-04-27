# Vanilla JS Filter Catalog

Simple, fast, and dynamic product search engine built with Vanilla JavaScript.

## 🔗 Features

* **Real-time Search:** Filter products instantly as you type.
* **Case Insensitive:** Search works perfectly regardless of CAPS LOCK.
* **Smart UI:** Dynamic grid that updates automatically based on results.
* **Robust Logic:** Built-in `instanceof` checks to ensure DOM stability.

## 🛠 Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript**

## 💡 Usage

To use this logic in your project, ensure your HTML elements have matching IDs:

* `#searchInput` — the input field where users type.
* `#productGrid` — the container where sneaker cards are rendered.

The logic follows a clean **Data -> Filter -> Render** pipeline, keeping the original product list immutable.

## 📷 Preview

[Live Demo on GitHub Pages](https://artemkorolov.github.io/js-filter-catalog/)
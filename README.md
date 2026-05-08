# Vanilla JS Filter Catalog

Simple, fast, and dynamic product search engine with advanced filtering, built with Vanilla JavaScript.

## 🔗 Features

* **Real-time Search:** Filter products instantly as you type.
* **Multi-level Filtering:** Combine text search with brand-specific filters for a better user experience.
* **Dynamic UI Generation:** Brand selection buttons and product cards are rendered dynamically based on the data array.
* **Case Insensitive:** Search works perfectly regardless of CAPS LOCK.
* **Robust Logic:** Built-in `instanceof` checks to ensure DOM stability and clean data handling.
* **Immutability:** Follows a clean **Data -> Filter -> Render** pipeline, keeping the original product list immutable.

## 🛠 Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript**

## 💡 Usage

To use this logic, ensure your HTML elements have matching IDs:

* `#searchInput` — the input field for real-time text filtering.
* `#brandFilters` — the container where brand selection buttons are automatically generated.
* `#productGrid` — the container where product/sneaker cards are rendered.

The logic follows a clean **Data -> Filter -> Render** pipeline, keeping the original product list immutable.

## ⚙️ How it works

1. **Initialization:** The script automatically generates a unique list of brands from your data.
2. **Filtering:** An event listener monitors both the search input and brand button clicks.
3. **Rendering:** The UI updates instantly, showing only the products that match all active criteria.

## 📷 Preview

[Live Demo on GitHub Pages](https://artemkorolov.github.io/js-filter-catalog/)
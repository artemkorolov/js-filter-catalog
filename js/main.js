const products = [
	{
		id: 1,
		title: "Nike Air Max",
		brand: "Nike",
		price: 150,
		category: "Running",
		inStock: true,
		image: "https://placehold.co/200"
	},
	{
		id: 2,
		title: "Adidas Forum",
		brand: "Adidas",
		price: 90,
		category: "Casual",
		inStock: true,
		image: "https://placehold.co/200"
	},
	{
		id: 3,
		title: "Puma Cali Special",
		brand: "Puma",
		price: 85,
		category: "Casual",
		inStock: false,
		image: "https://placehold.co/200"
	},
	{
		id: 4,
		title: "New Balance 530",
		brand: "New Balance",
		price: 125,
		category: "Running",
		inStock: true,
		image: "https://placehold.co/200"
	},
	{
		id: 5,
		title: "Jordan Retro 1",
		brand: "Jordan",
		price: 180,
		category: "Basketball",
		inStock: true,
		image: "https://placehold.co/200"
	},
	{
		id: 6,
		title: "Reebok Classic",
		brand: "Reebok",
		price: 75,
		category: "Casual",
		inStock: true,
		image: "https://placehold.co/200"
	},
];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const brandContainer = document.getElementById('brandFilters');

function renderProducts(items) {
	if (!productGrid) {
		console.warn("productGrid not found in the DOM");
		return;
	}

	productGrid.innerHTML = '';

	items.forEach(product => {
		const card = document.createElement('div');
		card.classList.add('product-card');

		const img = document.createElement('img');
		img.src = product.image;
		img.alt = product.title;
		card.appendChild(img);

		const title = document.createElement('h3');
		title.textContent = product.title;
		card.appendChild(title);

		const info = document.createElement('p');
		info.textContent = `${product.brand} | ${product.category}`;
		card.appendChild(info);

		const price = document.createElement('span');
		price.textContent = `$${product.price}`;
		card.appendChild(price);

		const stockStatus = document.createElement('p');
		stockStatus.classList.add('stock-status');

		if (product.inStock) {
			stockStatus.textContent = '✅ In Stock';
			stockStatus.classList.add('in-stock');
		} else {
			stockStatus.textContent = '❌ Out of Stock';
			stockStatus.classList.add('out-of-stock');
		}

		card.appendChild(stockStatus);

		productGrid?.appendChild(card);
	});

}

renderProducts(products);

function initSearch() {
	if (!(searchInput instanceof HTMLInputElement)) {
		console.warn('searchInput not found in the DOM');
		return;
	}

	searchInput.addEventListener('input', () => {
		const searchTerm = searchInput.value.toLowerCase().trim();
		const filtered = products.filter(product =>
			product.title.toLowerCase().includes(searchTerm)
		);

		renderProducts(filtered);
	});

}

initSearch();

function renderBrandFilters() {
	if (!brandContainer) return;

	const allBrands = products.map(product => product.brand);

	const uniqueBrands = ['all', ...new Set(allBrands)];

	brandContainer.innerHTML = '';

	uniqueBrands.forEach(brand => {
		const btn = document.createElement('button');
		btn.className = 'brand-btn';
		btn.dataset.brand = brand;

		btn.textContent = brand === 'all' ? 'All Brands' : brand;

		brandContainer.appendChild(btn);
	});
}

renderBrandFilters();

if (brandContainer) {
	brandContainer.addEventListener('click', (event) => {
		if (event.target instanceof HTMLElement) {
			const clickedBtn = event.target.closest('.brand-btn');

			if (clickedBtn instanceof HTMLElement) {
				const selectedBrand = clickedBtn.dataset.brand;

				const filtered = selectedBrand === 'all'
					? products
					: products.filter(product => {
						return product.brand === selectedBrand;
					});

				renderProducts(filtered);
			}

			document.querySelectorAll('.brand-btn').forEach(btn => {
				btn.classList.remove('active');
			});

			clickedBtn?.classList.add('active');
		}
	});
}

const productsList = document.querySelector("#productsList");
const sortSelect = document.querySelector("#sortSelect");

let products = [];

async function loadProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  products = data.map(function(item) {
    return new Product(
      item.id,
      item.title,
      item.price,
      item.description,
      item.image,
      item.category
    );
  });

  renderProducts(products);
}

function renderProducts(productsArray) {
  productsList.innerHTML = "";

  productsArray.forEach(function(product) {
    productsList.innerHTML += `
      <a href="product.html?id=${product.id}" class="card">
        <img src="${product.image}" alt="${product.title}">
        <span>${product.title}</span>
        <span>$${product.price}</span>
        <button class="buy-btn">MORE DETAILS</button>
      </a>
    `;
  });
}

sortSelect.addEventListener("change", function() {
  let sortedProducts = [...products];

  if (sortSelect.value === "price-asc") {
    sortedProducts.sort(function(a, b) {
      return a.price - b.price;
    });
  }

  if (sortSelect.value === "price-desc") {
    sortedProducts.sort(function(a, b) {
      return b.price - a.price;
    });
  }

  if (sortSelect.value === "title-asc") {
    sortedProducts.sort(function(a, b) {
      return a.title.localeCompare(b.title);
    });
  }

  renderProducts(sortedProducts);
});

loadProducts();
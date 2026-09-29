const productPage = document.querySelector("#productPage");
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

async function loadProduct() {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const item = await response.json();
        const product = new Product(
                item.id,
                item.title,
                item.price,
                item.description,
                item.image,
                item.category
        );

  productPage.innerHTML = `
    <div class="pv">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="houdi-card">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p class="price">$${product.price}</p>
      <button class="buy-btn">ADD TO CART</button>
      <a href="index.html" class="buy-btn">BACK TO CATALOG</a>
    </div>
  `;

        const addButton = document.querySelector(".buy-btn");

        addButton.addEventListener("click", function() {
                const cart = new Cart();
                cart.addProduct(product);
                renderCart();
                alert("Product added to cart");
        });
}

loadProduct();
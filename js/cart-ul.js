function renderCart() {
  const cart = new Cart();

  const cartCount = document.querySelector("#cartCount");
  const headerCartCount = document.querySelector("#headerCartCount");
  const cartItems = document.querySelector("#cartItems");
  const cartTotal = document.querySelector("#cartTotal");
  const checkoutBtn = document.querySelector("#checkoutBtn");

  if (!cartItems || !cartTotal) return;

  if (cartCount) {
    cartCount.textContent = cart.getCount();
  }

  if (headerCartCount) {
    headerCartCount.textContent = cart.getCount();
  }

  if (cart.items.length === 0) {
    cartItems.innerHTML = "<p>NO ITEMS YET.</p>";
  } else {
    cartItems.innerHTML = cart.items.map(function(item) {
      return `
        <div class="cart-item">
          <button class="cart-remove" data-id="${item.product.id}">×</button>
          <img src="${item.product.image}" alt="${item.product.title}">
          <h4>${item.product.title}</h4>
          <span>${item.quantity}</span>
          <span>$${item.product.price}</span>
        </div>
      `;
    }).join("");
  }

  cartTotal.textContent = `SUBTOTAL $${cart.getTotal().toFixed(2)}`;

  const removeButtons = document.querySelectorAll(".cart-remove");

  removeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const id = Number(button.dataset.id);
      cart.removeProduct(id);
      renderCart();
    });
  });

  if (checkoutBtn) {
    checkoutBtn.onclick = function() {
      alert("Order completed");
    };
  }
}

renderCart();
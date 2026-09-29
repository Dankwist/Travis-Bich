const musicButtons = document.querySelectorAll(".music-add-btn");

musicButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const card = button.closest(".music-product");

    const product = new Product(
      Number(card.dataset.id),
      card.dataset.title,
      Number(card.dataset.price),
      card.dataset.description,
      card.dataset.image,
      card.dataset.category
    );

    const cart = new Cart();
    cart.addProduct(product);
    renderCart();
    
    alert("Product added to cart");
  });
});
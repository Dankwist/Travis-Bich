class Cart{
        constructor(){
                this.items = JSON.parse(localStorage.getItem('cart')) || [];
        }

        save(){
                localStorage.setItem('cart', JSON.stringify(this.items));
        }

        addProduct(product) {
                const existingItem = this.items.find(function(item) {
                         return item.product.id === product.id;
                });

                if (existingItem) {
                        existingItem.quantity += 1;
                } else {
                        const cartItem = new CartItem(product, 1);
                        this.items.push(cartItem);
        }

        this.save();
        }

         removeProduct(id) {
          this.items = this.items.filter(function(item) {
          return item.product.id !== id;
        });

         this.save();
  }

                getTotal() {
                        return this.items.reduce(function(sum, item) {
                        return sum + item.product.price * item.quantity;
                }, 0);
  }

  getCount() {
        return this.items.reduce(function(count, item) {
        return count + item.quantity;
    }, 0);
  }
}
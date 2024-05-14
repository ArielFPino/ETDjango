$(document).ready(function() {
    let cart = [];
  
    function updateCartCount() {
      $('#cart-count').text(cart.length);
    }
  
    function addToCart(product) {
      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      updateCartCount();
    }
  
    $('.card .btn').click(function() {
      const productCard = $(this).closest('.card');
      const product = {
        id: productCard.index(),
        name: productCard.find('.card-title').text(),
        price: parseFloat(productCard.find('.card-text:contains("Precio")').text().replace('Precio: $', '')),
        stock: parseInt(productCard.find('.card-text:contains("Stock")').text().replace('Stock: ', '')),
        editorial: productCard.find('.card-text:contains("Editorial")').text().replace('Editorial: ', '')
      };
      addToCart(product);
      alert(`${product.name} ha sido añadido al carrito.`);
    });
  
    $('#cart').click(function() {
      alert(JSON.stringify(cart, null, 2));
    });
  });
  
// e-commerce 
const products = [
  { id: 1, name: "Remeras", price: 20 },
  { id: 2, name: "Jeans", price: 50 },
  { id: 3, name: "Zapatillas", price: 80 }
];

// carrito de compras 
const cart = [];

// función para mostrar productos disponibles 
function displayProducts() {
  let productList = "Productos disponibles:\n";
  for (let product of products) {
    productList += `${product.id}. ${product.name} - $${product.price}\n`;
  }
  alert(productList);
}

// función para agregar productos al carrito 
function addToCart() {
  let productId;
  let product;
  
  do {
    productId = parseInt(prompt("Ingresá el número de articulo que querés agregar a la canasta:"));
    product = products.find(item => item.id === productId);
    if (!product) {
      alert("Producto no encontrado - Por favor indicar código de producto nuevamente.");
    }
  } while (!product);

  const quantity = parseInt(prompt(`Ingrese la cantidad de ${product.name}(s) que deseas agregar a la canasta:`));
  if (isNaN(quantity) || quantity <= 0) {
    alert("¡Cantidad de productos no valida!");
    return;
  }

  const totalPrice = product.price * quantity;
  alert(`Agreagado/s ${quantity} ${product.name}(s) a la canasta. Total: $${totalPrice}`);

  // Agregar productos 
  cart.push({ productId: productId, quantity: quantity });
}

// función para calcular cantidad de productos en carrito
function calculateTotalPrice(cart) {
  let totalPrice = 0;
  for (let item of cart) {
    const product = products.find(p => p.id === item.productId);
    if (product) {
      totalPrice += product.price * item.quantity;
    }
  }
  return totalPrice;
}

// mostrar total 
displayProducts();
addToCart(); 

const totalCartPrice = calculateTotalPrice(cart);
alert(`Total de productos en la canasta: $${totalCartPrice}`);

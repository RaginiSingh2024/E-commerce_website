const products = [
    {
      name: "Wireless Headphones",
      price: 1499,
      image: "images/headphones.jpg"
    },
    {
      name: "Smart Watch",
      price: 2999,
      image: "images/smartwatch.jpg"
    },
    {
      name: "Gaming Mouse",
      price: 999,
      image: "images/mouse.jpg"
    }
  ];
  
  const productList = document.getElementById("product-list");
  
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="alert('Added to Cart!')">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
  
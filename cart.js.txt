let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const countEl = document.getElementById("cart-count");
  const paypalItems = document.getElementById("paypal-items");

  list.innerHTML = "";
  paypalItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.textContent = `${item.name} – ${item.price} €`;
    list.appendChild(li);

    paypalItems.innerHTML += `
      <input type="hidden" name="item_name_${index + 1}" value="${item.name}">
      <input type="hidden" name="amount_${index + 1}" value="${item.price}">
      <input type="hidden" name="quantity_${index + 1}" value="1">
    `;
  });

  totalEl.textContent = total;
  countEl.textContent = cart.length;
}

function openCart() {
  document.getElementById("cart").classList.add("open");
}

function closeCart() {
  document.getElementById("cart").classList.remove("open");
}

/* ================= PANIER ================= */

let cart = [];

/* Initialisation */
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const product = button.closest(".product");

      if (!product) return;

      const name = product.dataset.name;
      const price = Number(product.dataset.price);

      if (!name || isNaN(price)) return;

      addToCart(name, price);
    });
  });
});

/* Ajouter au panier */
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  openCart();
}

/* Mettre à jour l’affichage */
function updateCart() {
  const items = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  const count = document.getElementById("cart-count");

  if (!items || !total || !count) return;

  items.innerHTML = "";
  let sum = 0;

  cart.forEach((item, index) => {
    sum += item.price;

    const li = document.createElement("li");
    li.className = "cart-item";

    li.innerHTML = `
      <span class="cart-item-name">
        ${item.name} – ${item.price.toFixed(2)} €
      </span>
      <button class="remove-item" aria-label="Supprimer" data-index="${index}">
        ✕
      </button>
    `;

    items.appendChild(li);
  });

  total.textContent = sum.toFixed(2);
  count.textContent = cart.length;

  // Gestion suppression
  document.querySelectorAll(".remove-item").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      removeFromCart(index);
    });
  });
}

/* Supprimer un article */
function removeFromCart(index) {
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
    updateCart();
  }
}

/* Ouvrir le panier */
function openCart() {
  const cartEl = document.getElementById("cart");
  if (cartEl) {
    cartEl.classList.add("open");
  }
}

/* Fermer le panier */
function closeCart() {
  const cartEl = document.getElementById("cart");
  if (cartEl) {
    cartEl.classList.remove("open");
  }
}

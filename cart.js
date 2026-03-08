const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

let totalPrice = 0;

// Function to render cart items
function renderCartItems() {
    cartItemsContainer.innerHTML = ""; // Clear previous items
    totalPrice = 0; // Reset total price

    cart.forEach((item, index) => {
        const itemContainer = document.createElement("div");
        itemContainer.style.display = "flex";
        itemContainer.style.alignItems = "center";
        itemContainer.style.marginBottom = "15px";
        itemContainer.style.borderBottom = "1px solid #ddd";
        itemContainer.style.paddingBottom = "10px";

        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImage.style.width = "50px";
        itemImage.style.height = "50px";
        itemImage.style.marginRight = "15px";
        itemImage.style.border = "5px solid #ccc"; // Updated border style
        itemImage.style.borderRadius = "10px";

        const itemText = document.createElement("p");
        itemText.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        itemText.style.flexGrow = "1";
        itemText.style.textAlign = "left";

        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = item.quantity || 1; // Default quantity to 1 if not set
        quantityInput.min = 1;
        quantityInput.style.width = "50px";
        quantityInput.style.marginRight = "15px";

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "10px";
        removeButton.onclick = () => removeItem(index);

        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemText);
        itemContainer.appendChild(quantityInput);
        itemContainer.appendChild(removeButton);
        cartItemsContainer.appendChild(itemContainer);

        totalPrice += item.price * (item.quantity || 1); // Update total price based on quantity
    });

    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1); // Remove item from cart array
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
    renderCartItems(); // Re-render cart items
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem("cart"); 
    cartItemsContainer.innerHTML = ""; 
    totalPriceElement.textContent = "0.00"; 
    alert("Cart cleared!");
}

// Initial render
renderCartItems();

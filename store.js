let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        const productName = this.parentElement.getAttribute("data-name");
        const productPrice = parseFloat(this.parentElement.getAttribute("data-price"));
        const productImage = this.parentElement.querySelector("img").src;

        cart.push({ name: productName, price: productPrice, image: productImage });

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${productName} added to cart!`);
    });
});

// for about us section
function toggleAboutUs() {
    const aboutUsSection = document.getElementById('about-us');
    
    if (aboutUsSection.style.display === 'none' || aboutUsSection.style.display === '') {
        aboutUsSection.style.display = 'block';
    } else {
        aboutUsSection.style.display = 'none';
    }
}

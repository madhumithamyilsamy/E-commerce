// Image Slider for Home Page
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelectorAll(".slider img");
  let index = 0;

  if (slider.length > 0) {
    setInterval(() => {
      slider.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
      index = (index + 1) % slider.length;
    }, 3000); // change every 3s
  }

  // Newsletter Form Validation
  const newsletterForm = document.querySelector(".newsletter form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector("input[type='email']").value;
      if (email.includes("@")) {
        alert("Thank you for subscribing!");
        newsletterForm.reset();
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }

  // Contact Form Validation
  const contactForm = document.querySelector("form");
  if (contactForm && contactForm.querySelector("textarea")) {
    contactForm.addEventListener("submit", (e) => {
      const email = contactForm.querySelector("input[type='email']").value;
      if (!email.includes("@")) {
        e.preventDefault();
        alert("Please enter a valid email address.");
      }
    });
  }
});

// Product Data
const products = [
  {
    name: "Men's Jacket",
    price: 2499,
    rating: 4,
    category: "men",
    image: "images/product/leather-jacket.jpg",
  },
  {
    name: "Women's Dress",
    price: 1999,
    rating: 5,
    category: "women",
    image: "images/product/women-dress.jpg",
  },
  {
    name: "Kids T-Shirt",
    price: 799,
    rating: 3,
    category: "kids",
    image: "images/product/kid.jpg",
  },
  {
    name: "Men's Shoes",
    price: 2999,
    rating: 5,
    category: "men",
    image: "images/product/sneakers.jpg",
  },
  {
    name: "Women's Handbag",
    price: 1599,
    rating: 4,
    category: "women",
    image: "images/product/handbag.jpg",
  },
  {
    name: "Kids Jeans",
    price: 999,
    rating: 4,
    category: "kids",
    image: "images/product/kid-jean.jpg",
  },
  {
    name: "Hair-blower",
    price: 999,
    rating: 4,
    category: "Electronics",
    image: "images/product/blower.jpg",
  },
  {
    name: "Gold Earring",
    price: 999,
    rating: 4,
    category: "Accessories",
    image: "images/product/earring.jpg",
  },
];

// DOM elements
const productContainer = document.getElementById("product-container");
const filterButtons = document.querySelectorAll(".filter-btn");

// Render Products
function renderProducts(filter = "all") {
  productContainer.innerHTML = "";

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  filteredProducts.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <div class="stars">${"★".repeat(product.rating)}${"☆".repeat(
      5 - product.rating
    )}</div>
      </div>
    `;
    productContainer.appendChild(card);
  });
}

// Event Listeners for Filter
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    renderProducts(category);
  });
});

// Initial render
renderProducts();

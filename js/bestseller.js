// Product Data (4 Men + 4 Women + 4 Kids)
const products = [
  // --- Men ---
  {
    id: 1,
    name: "Waterproof Jacket",
    category: "men",
    img: "images/bestseller/waterfroof shirt.jpg",
    desc: "Stylish waterproof jacket for all seasons."
  },
  {
    id: 2,
    name: "Hand-Drawn Shirt",
    category: "men",
    img: "images/bestseller/shirt.webp",
    desc: "Exclusive sketched shirt for artistic vibes."
  },
  {
    id: 3,
    name: "Formal Blazer",
    category: "men",
    img: "images/bestseller/blazer.webp",
    desc: "Classic formal blazer for office and events."
  },
  {
    id: 4,
    name: "Casual Sneakers",
    category: "men",
    img: "images/bestseller/sneakers.webp",
    desc: "Lightweight sneakers perfect for everyday wear."
  },

  // --- Women ---
  {
    id: 5,
    name: "Convertible Saree",
    category: "women",
    img: "images/bestseller/cs.jpg",
    desc: "Modern convertible saree with multiple styles."
  },
  {
    id: 6,
    name: "Pocket Saree",
    category: "women",
    img: "images/bestseller/s.jpg",
    desc: "Traditional saree with modern convenience."
  },
  {
    id: 7,
    name: "Evening Gown",
    category: "women",
    img: "images/bestseller/eg.webp",
    desc: "Elegant evening gown for special occasions."
  },
  {
    id: 8,
    name: "Handbag",
    category: "women",
    img: "images/bestseller/handbag.jpg",
    desc: "Trendy handbag with spacious compartments."
  },

  // --- Kids ---
  {
    id: 9,
    name: "Kids T-Shirt",
    category: "kids",
    img: "images/bestseller/kt.jpg",
    desc: "Cool & comfy T-shirt for kids."
  },
  {
    id: 10,
    name: "Kids Hoodie",
    category: "kids",
    img: "images/bestseller/kh.jpg",
    desc: "Warm hoodie perfect for children."
  },
  {
    id: 11,
    name: "Kids Sneakers",
    category: "kids",
    img: "images/bestseller/ks.jpg",
    desc: "Durable sneakers for little adventurers."
  },
  {
    id: 12,
    name: "Kids Dress",
    category: "kids",
    img: "images/bestseller/kd.webp",
    desc: "Beautiful kids dress for parties."
  }
];

function displayProducts(category = "all") {
  const container = document.getElementById("product-container");
  container.innerText = "hiii";

//   const filtered = category === "all" ? products : products.filter(p => p.category === category);

//   filtered.forEach(product => {
//     const div = document.createElement("div");
//     div.classList.add("product");
//     div.innerText = `
//       <img src="${product.img}" alt="${product.name}" style="max-width:200px; height:250px;">
//       <h3>${product.name}</h3>
//       <p>${product.desc}</p>
//     `;
//     container.appendChild(div);
//   });
// }

// // Category Filter Function
// function filterProducts(category) {
//   displayProducts(category);
 }

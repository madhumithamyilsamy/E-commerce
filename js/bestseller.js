const products = [
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

function filterProducts(category = "all"){
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    let filtered;
    if(category === "all"){
        filtered = products;  
    }
    else{
        filtered = products.filter(p=>p.category===category);
    }
    for(let i = 0; i<filtered.length;i++){
        const p = filtered[i];
    container.innerHTML+=`
        <div class="product-card">
              <img src="${p.img}" alt="${p.name}">
              <h3>${p.name}</h3>
              <p>${p.desc}</p>
            </div>
    `;
    }}
     document.addEventListener("DOMContentLoaded", () => {
       filterProducts("all"); 
      });



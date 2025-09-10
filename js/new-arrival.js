const newArrivals = [
  {
    id: 1,
    name: "Fitness Watch for Men",
    category: "men",
    img: "images/newarrival/fitnesstracker_men.jpg",
    desc: "Be Fit Be Good"
  },
  {
    id: 2,
    name: "Bags",
    category: "women",
    img: "images/newarrival/bag_women.jpg",
    desc: "This handbag blends style with space."
  },
  {
    id: 3,
    name: "Belts",
    category: "men",
    img: "images/newarrival/belt_men.jpg",
    desc: "Elegant formal shirt for office wear."
  },
  {
    id: 4,
    name: "Sneakers for Kids",
    category: "kids",
    img: "images/newarrival/shoes_kids.jpg",
    desc: "Comfortable sneakers for daily use."
  },
 
  {
    id: 5,
    name: "Floral Dress",
    category: "women",
    img: "images/newarrival/partywear_women.jpg",
    desc: "Fresh floral dress perfect for summer."
  },
  {
    id: 6,
    name: "LipStick",
    category: "women",
    img: "images/newarrival/lipstick_women.jpg",
    desc: "Smooth, vibrant color enhances lips."
  },
  {
    id: 7,
    name: "DumBells",
    category: "men",
    img: "images/newarrival/dumbell_men.jpg",
    desc: "Grow Stronger"
  },
  {
    id: 8,
    name: "Slippers",
    category: "women",
    img: "images/newarrival/sandal_women.jpg",
    desc: "Makes your walk smoother"
  },
  {
    id: 9,
    name: "Shirts",
    category: "men",
    img: "images/newarrival/shirt_men.jpg",
    desc: "Comfortable fabric with stylish fit."
  },
  {
    id: 10,
    name: "Toys",
    category: "kids",
    img: "images/newarrival/toys_kids.jpg",
    desc: "Play"
  },
  {
    id: 11,
    name: "Hot Wheeles",
    category: "kids",
    img: "images/newarrival/toys1_kids.jpg",
    desc: "The Car you Love"
  },
  {
    id: 12,
    name: "NoteBooks",
    category: "kids",
    img: "images/newarrival/note_kids.jpg",
    desc: "Write n Learn something"
  }
];
 
// Function to Render Products
function displayNewArrivals(category = "all") {
  const container = document.querySelector(".product-grid");
  container.innerHTML = "";
 
  const filtered = category === "all" ? newArrivals : newArrivals.filter(p => p.category === category);
 
  filtered.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" style="max-width:200px; height:250px;">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
    `;
    container.appendChild(div);
  });
}
 
// Category Filter Function
function filterProducts(category) {
  displayNewArrivals(category);
}
 
// On Page Load
document.addEventListener("DOMContentLoaded", () => {
  displayNewArrivals("all");
});
 
 
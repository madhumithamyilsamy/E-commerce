document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slides img");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");
  let index = 0;
  let interval;

  // Create dots dynamically
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => showSlide(i));
  });

  const dots = dotsContainer.querySelectorAll("span");

  // Show a specific slide
  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    slides[i].classList.add("active");
    dots[i].classList.add("active");
    index = i;
  }

  // Next & Previous
  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  next.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prev.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  // Auto Slide
  function startAutoSlide() {
    interval = setInterval(nextSlide, 3000); // every 3 seconds
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Start auto slide on page load
  startAutoSlide();

  // Pause when hovering over slider
  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
});

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
      if (!email.includes("@gmail.com")) {
        e.preventDefault();
        alert("Please enter a valid email address.");
      }
    });
  }
// Example Product Object with Reviews
const product = {
  name: "Stay Dry, Stay Stylish",
  reviews: [
    {
      user: "Arun",
      rating: 5,
      comment: "Excellent quality! Totally worth it."
    },
    {
      user: "Priya",
      rating: 4,
      comment: "Very stylish, but delivery was delayed."
    },
    {
      user: "Rahul",
      rating: 5,
      comment: "Perfect fit and amazing fabric."
    }
  ]
};

// Function to display reviews
function displayReviews() {
  const reviewContainer = document.getElementById("review-container");

  // Clear existing
  reviewContainer.innerHTML = "";

  // Loop through reviews
  product.reviews.forEach(review => {
    const div = document.createElement("div");
    div.classList.add("review");

    div.innerHTML = `
      <strong>${review.user}</strong> ⭐ ${"★".repeat(review.rating)}
      <p>${review.comment}</p>
    `;

    reviewContainer.appendChild(div);
  });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", displayReviews);



// Search Button - Search bar appears
let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  userLogin.classList.remove("active");
  mobileMenu.classList.remove("active");
};
// Shopping Cart Button
let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  userLogin.classList.remove("active");
  mobileMenu.classList.remove("active");
};
// Login Button
let userLogin = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
  userLogin.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  mobileMenu.classList.remove("active");
};
// mobile menu
let mobileMenu = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  mobileMenu.classList.toggle("active");
  userLogin.classList.remove("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
};

window.scroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  userLogin.classList.remove("active");
  mobileMenu.classList.remove("active");
};

// Slider
var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// Review Slidser
var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

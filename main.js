import "./js/swiper.js";

if ("theme" in localStorage) {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// Cart Box Elements
const cartBox = document.getElementById("cart-box");
const cartBoxOpen = document.getElementById("cart-box-open");
const cartBoxClose = document.getElementById("cart-box-close");

// Sidebar Elements
const sidebar = document.getElementById("sidebar");
const sidebarOpen = document.getElementById("sidebar-open");
const sidebarClose = document.getElementById("sidebar-close");

// Shop Menu Elements
const shopMenu = document.getElementById("shop-menu");
const shopMenuToggle = document.getElementById("shop-menu-toggle");

// Toggle Theme Element
const themeToggle = document.querySelectorAll(".theme-toggle");

themeToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

shopMenuToggle.addEventListener("click", (e) => {
  if (shopMenu.classList.contains("hidden")) {
    shopMenu.classList.replace("hidden", "flex");
  } else {
    shopMenu.classList.replace("flex", "hidden");
  }
  e.currentTarget.parentElement.classList.toggle("text-orange-300");
});

// overlay
const overlay = document.getElementById("overlay");

cartBoxClose.addEventListener("click", (e) => {
  cartBox.classList.replace("left-0", "-left-64");
  overlay.classList.add("hidden");
});

cartBoxOpen.addEventListener("click", () => {
  cartBox.classList.replace("-left-64", "left-0");
  overlay.classList.remove("hidden");
});

sidebarOpen.addEventListener("click", () => {
  sidebar.classList.replace("-right-64", "right-0");
  overlay.classList.remove("hidden");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.replace("right-0", "-right-64");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  cartBox.classList.contains("left-0") &&
    cartBox.classList.replace("left-0", "-left-64");
  overlay.classList.add("hidden");

  sidebar.classList.contains("right-0") &&
    sidebar.classList.replace("right-0", "-right-64");
});

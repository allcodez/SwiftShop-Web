'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


/**
 * header sticky & go to top
 */

// const header = document.querySelector("[data-header]");
// const goTopBtn = document.querySelector("[data-go-top]");

// window.addEventListener("scroll", function () {

//   if (window.scrollY >= 10) {
//     header.classList.add("active");
//     goTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     goTopBtn.classList.remove("active");
//   }

// });


/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});


/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }
});

// Apply last selected theme from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.querySelector("[data-theme-btn]");

  if (localStorage.getItem("theme") === "dark_theme") {
    themeToggleBtn.classList.remove("active");
    document.body.classList.remove("light_theme");
    document.body.classList.add("dark_theme");
  } else {
    themeToggleBtn.classList.add("active");
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    localStorage.setItem("theme", "light_theme"); // Set default to light theme
  }

  const giftersTab = document.getElementById("gifters-tab");
  const vendorsTab = document.getElementById("vendors-tab");
  const giftersSection = document.getElementById("gifters-section");
  const vendorsSection = document.getElementById("vendors-section");

  const toggleActiveTab = (activeTab, inactiveTab, activeSection, inactiveSection) => {
    activeTab.classList.add("gifting-active");
    inactiveTab.classList.remove("gifting-active");
    activeSection.style.display = "flex";
    inactiveSection.style.display = "none";
  };

  // Add event listeners for tab switching
  giftersTab.addEventListener("click", () => {
    toggleActiveTab(giftersTab, vendorsTab, giftersSection, vendorsSection);
  });

  vendorsTab.addEventListener("click", () => {
    toggleActiveTab(vendorsTab, giftersTab, vendorsSection, giftersSection);
  });
});
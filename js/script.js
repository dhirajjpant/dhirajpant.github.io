// THEME TOGGLE

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

});


// NAVBAR SCROLL EFFECT

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});


// ACTIVE SECTION HIGHLIGHTING

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(scrollY >= sectionTop - 200){

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href") === `#${current}`){

      link.classList.add("active");

    }

  });

});


// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom){

      section.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();


// MOBILE MENU

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

  navMenu.classList.toggle("mobile-active");

});


// CLOSE MOBILE MENU

document.querySelectorAll(".nav-link").forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("mobile-active");

  });

});
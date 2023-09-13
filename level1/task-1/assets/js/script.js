//////preloader functions//////////
let preloader = document.querySelector(".preloader");
// console.log(preloader);
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("remove");
  }, 1500);
});
//////preloader functions//////////

/////// Function for add event for elements ////////

let addEventElements = function (elements, eventType, callBack) {
  let i = 0,
    len = elements.length;
  for (; i < len; i++) {
    elements[i].addEventListener(eventType, callBack);
  }
};
/////// Function for add event for elements ////////
/////// navbar toggle ////////
let navbar = document.querySelector(".navbar");
let navbarBtnToggles = document.querySelectorAll(".nav-toggle-btn");
let overlay = document.querySelector(".overlay");

let toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};
addEventElements(navbarBtnToggles, "click", toggleNav);
/////// navbar toggle ////////
//////////////header sticky////////////
let header = document.querySelector("header.header");
window.onscroll = () => {
  // console.log(window.scrollY);
  if (window.scrollY > 100) {
    // console.log(window.scrollY);
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
//////////////header sticky////////////

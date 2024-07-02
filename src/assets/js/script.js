const burgerMenuToggler = document.querySelector("header .hiding-content-btn-toggler");
const header = document.querySelector("header");

burgerMenuToggler.addEventListener("click", (e) => {
  header.classList.toggle("opened");
});

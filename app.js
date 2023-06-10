/**
 * agregar un event listener multiple elementos
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.lenght; i < len; i++) {
    elements[i].addEventListener(event, callback);
  }
};

/**
 * mobile navbar toggler
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[ data-nav-toggler]");

const toggleNav = () => navbar.classList.toggle("active");

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * ANIMACIÓN DE CABECERA
 * Cuando se desplace hacia abajo a 100 px, el encabezado estará activo
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

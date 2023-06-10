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

/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");

/** trae los elementos del archivo HTML */
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

/** del archivo css se trae la viriable  "--slider-items" linea 534 */
let totalSliderVisibleItems = Number(
  getComputedStyle(slider).getPropertyValue("--slider-items")
);

let totalSlidableItems =
  sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliferItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
};

/**
 * next slide
 */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;
  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliferItem();
};

sliderNextBtn.addEventListener("click", slideNext);

/**
 * prev slide
 */

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliferItem();
};

sliderPrevBtn.addEventListener("click", slidePrev);

/**
 * Responsive
 */

window.addEventListener("ressize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});

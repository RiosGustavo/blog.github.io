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
const navTogglers = document.querySelectorAll("[ mobile navbar toggler]");

const toggleNav =

import showElements from "./show.js";
import language from "./language.js";
import lightMode from "./lightMode.js";
import navAnimations from "./menu.js";

document.addEventListener('DOMContentLoaded', () => {
    lightMode('icon-light-mode');
    language('flags', '[data-section]');
    showElements('.hidden');
    navAnimations('btn-menu', '.nav' , '.close');
})

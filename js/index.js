// import showElements from "./show.js";
// import language from "./language.js";
// import lightMode from "./lightMode.js";
// import navAnimations from "./menu.js";
import Galaxy from './galaxy.js';

const d = document;

d.addEventListener('DOMContentLoaded', e => {
    Galaxy();
})

d.addEventListener('click', e => {
    console.log(e.target)
    if (e.target.matches('.menu__buttons-bars') ||
     e.target.matches('.menu__buttons-bars *')) {
        d.querySelector('.menu__buttons-bars').classList.toggle('is-active');
        d.querySelector('.menu__nav-mobile').classList.toggle('menu__nav-mobile-active');
        return;
    }

})

/*const $loader = document.querySelector('.loader-bg');
let start = performance.now();

function vanish(){
    $loader.classList.add('dissapear');
    document.body.classList.remove('hideScroll'); 
    showElements('.hidden');
}


window.addEventListener('load', ()=>{
    var end   = performance.now();
    let tiempo = Math.round(end - start);
    if (tiempo < 2000){
        let tiempoFaltante = 2000 - tiempo;
        setTimeout(()=>{
            vanish();
        },tiempoFaltante)    
    } else {
        vanish();
    }
})

document.addEventListener('DOMContentLoaded', () => {
    lightMode('icon-light-mode');
    language('flags', '[data-section]');
    // showElements('.hidden');
    navAnimations('btn-menu', '.nav' , '.close');
})*/



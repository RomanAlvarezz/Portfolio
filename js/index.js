import galaxy from './galaxy.js';
import menuBtn from './menu-btn.js';
import lightMode from './lightMode.js';
import language from './language.js';
import form from './form.js';

const d = document;

d.addEventListener('DOMContentLoaded', () => {
    galaxy();
    menuBtn();
    lightMode();
    language();
    form();
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



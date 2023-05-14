export default function menuBtn(){
    const $btnMenu = document.querySelector('.menu__buttons-bars');

    $btnMenu.addEventListener('click', () => {
        document.querySelector('.menu__buttons-bars').classList.toggle('is-active');
        document.querySelector('.menu__nav-mobile').classList.toggle('menu__nav-mobile-active');
    });
}
const d = document,
w = window;

export default function navAnimations(btnMenu, nav, navLink){
    const $checkbox = document.getElementById(btnMenu);
    const $nav = d.querySelector(nav);
    const $navLinks = document.querySelectorAll(navLink);

    w.addEventListener('scroll', () => {
        console.log($nav)
        console.log(w.pageYOffset)
        if (w.pageYOffset > 72){
            $nav.classList.add('nav__transparency')
        } else {
            $nav.classList.remove('nav__transparency')
        }
    })

    $navLinks.forEach( link =>{
        link.addEventListener('click', ()=>{
            $checkbox.checked = false;
        })
    })
}
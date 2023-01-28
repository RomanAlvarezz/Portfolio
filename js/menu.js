export default function navAnimations(btnMenu, navLink){
    const $checkbox = document.getElementById(btnMenu);
    const $navLinks = document.querySelectorAll(navLink);

    $navLinks.forEach( link =>{
        link.addEventListener('click', ()=>{
            $checkbox.checked = false;
        })
    })
}
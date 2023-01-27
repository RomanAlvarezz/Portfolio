const icon = document.getElementById('icon-light-mode');
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');
const hiddenElements = document.querySelectorAll('.hidden');
const $checkbox = document.getElementById('btn-menu');
const $navLinks = document.querySelectorAll('.close');

$navLinks.forEach( link =>{
    link.addEventListener('click', ()=>{
        $checkbox.checked = false;
    })
})

const changeLanguage = async language =>{
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

icon.addEventListener('click', ()=>{
    document.body.classList.toggle('light-mode');

    //Guardamos el modo en localstorage

    if(document.body.classList.contains('light-mode')){
        localStorage.setItem('light-mode', 'true');
        icon.src = './assets/bxs-moon.svg';
    } else {
        localStorage.setItem('light-mode', 'false');
        icon.src = './assets/bxs-sun.svg';
    }
})

flagsElement.addEventListener('click',(e)=>{
    const lang = e.target.parentElement.dataset.language;
    changeLanguage(lang);
    switch (lang) {
        case 'es':
            localStorage.setItem('language', 'espaniol')
            break;
        case 'en':
            localStorage.setItem('language', 'english')
        break;
    }
    
});

//Obtenemos el modo actual

if(localStorage.getItem('light-mode') === 'true'){
    document.body.classList.add('light-mode');
    icon.src = './assets/bxs-moon.svg';
} else {
    document.body.classList.remove('light-mode');
    icon.src = './assets/bxs-sun.svg';
}

if(localStorage.getItem('language') === 'espaniol') {
    changeLanguage('es');
}
if(localStorage.getItem('language') === 'english') {
    changeLanguage('en');
}

//Intersection Observer

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
}
, {
    threshold: 0.2
}
)

hiddenElements.forEach(el => {
    observer.observe(el)
})

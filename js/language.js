const d = document;

export default function language(){
    const $textsToChange = d.querySelectorAll('[data-section]');
    //console.log($textsToChange);

    const changeLanguage = async language =>{
        const requestJson = await fetch(`./languages/${language}.json`);
        const texts = await requestJson.json();
    
        for (const textToChange of $textsToChange) {
            const section = textToChange.dataset.section;
            const value = textToChange.dataset.value;
    
            textToChange.innerHTML = texts[section][value];
        }
    }

    const localLanguage = localStorage.getItem('language');
    
    if(localLanguage === 'espaniol') {
        changeLanguage('es');
        d.querySelector(`[data-language=es]`).classList.add('menu__flag-active');
    }
    if(localLanguage === 'english' || !(localLanguage)) {
        changeLanguage('en');
        d.querySelector(`[data-language=en]`).classList.add('menu__flag-active');
    }
    
    d.addEventListener('click', (e) => {

        if (e.target.matches('.menu__flag') && !(e.target.classList.contains('menu__flag-active'))) {
            e.target.classList.add('menu__flag-active');
            const lang = e.target.dataset.language;
            
            changeLanguage(lang);
            
            switch (lang) {
                case 'es':
                    d.querySelector(`[data-language=en]`).classList.remove('menu__flag-active');
                    localStorage.setItem('language', 'espaniol')
                    break;
                case 'en':
                    d.querySelector(`[data-language=es]`).classList.remove('menu__flag-active');
                    localStorage.setItem('language', 'english');
                break;
            }


        }    
    });
}
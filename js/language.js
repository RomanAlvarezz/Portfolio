const d = document;

export default function language(flagsID, dataSection){
    const flagsElement = d.getElementById(flagsID);
    const textsToChange = d.querySelectorAll(dataSection);

    const changeLanguage = async language =>{
        const requestJson = await fetch(`./languages/${language}.json`);
        const texts = await requestJson.json();
    
        for (const textToChange of textsToChange) {
            const section = textToChange.dataset.section;
            const value = textToChange.dataset.value;
    
            textToChange.innerHTML = texts[section][value];
        }
    }
    
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
    
    if(localStorage.getItem('language') === 'espaniol') {
        changeLanguage('es');
    }
    if(localStorage.getItem('language') === 'english') {
        changeLanguage('en');
    }

}
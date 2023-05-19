const d = document;

export default function form () {
    d.addEventListener('submit', e => {
        e.preventDefault();
        const language = localStorage.getItem('language') || 'en';
        const $btn = d.querySelector('.form__button');
        const $alert = d.querySelector('.form__alert');
        const html = $btn.innerHTML;
        $btn.innerHTML = `<div id="loading-logo"></div>`;

        fetch('https://formsubmit.co/ajax/alvarezroman150@gmail.com',
        {
            method: "POST",
            body: new FormData(e.target)
         })
        .then(res => res.ok? res.json() : Promise.reject(res))
        .then(json => {
            if (language == 'en') {
                $alert.innerHTML = json.message + ';)';
            } else {
               $alert.innerHTML = 'Tu mensaje ha sido enviado con éxito ;)'; 
            }
            console.log(json);
            
        })
        .catch(err => {
            console.log(err);
            if (language == 'en') {
                $alert.innerHTML = json.message + ':(';
            } else {
               $alert.innerHTML = 'Algo salió mal, intenta de nuevo :('; 
            }
        })
        .finally(()=> {
            $btn.innerHTML = html;
            setTimeout(()=>{
                $alert.innerHTML = '';
            }, 3000);
        })
    })
}
const d = document;

export default function lightMode(btnIcon){
    const icon = d.getElementById(btnIcon);

    if(localStorage.getItem('light-mode') === 'true'){
        d.body.classList.add('light-mode');
        icon.src = './assets/bxs-moon.svg';
    } else {
        d.body.classList.remove('light-mode');
        icon.src = './assets/bxs-sun.svg';
    }

    icon.addEventListener('click', ()=>{
        d.body.classList.toggle('light-mode');
    
        if(d.body.classList.contains('light-mode')){
            localStorage.setItem('light-mode', 'true');
            icon.src = './assets/bxs-moon.svg';
        } else {
            localStorage.setItem('light-mode', 'false');
            icon.src = './assets/bxs-sun.svg';
        }
    })

}
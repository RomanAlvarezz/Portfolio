const d = document;

export default function lightMode(){
    const $btnTheme = d.querySelector('.menu__buttons-theme');

    if(localStorage.getItem('light-mode') === 'true'){
        d.body.classList.add('light-mode');
        $btnTheme.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    } else {
        d.body.classList.remove('light-mode');
        $btnTheme.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    }

    $btnTheme.addEventListener('click', ()=>{
        d.body.classList.toggle('light-mode');
    
        if(d.body.classList.contains('light-mode')){
            localStorage.setItem('light-mode', 'true');
            $btnTheme.innerHTML = `<i class="fa-regular fa-moon"></i>`;
        } else {
            localStorage.setItem('light-mode', 'false');
            $btnTheme.innerHTML = `<i class="fa-regular fa-sun"></i>`;
        }
    });

}
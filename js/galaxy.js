const d = document;
const styles = ['inset', 'dashed', 'outset'];

export default function Galaxy(){
 d.addEventListener('click', e => {
    const $element = e.target;

    if($element.dataset.language){
        const language = $element.dataset.language;
        d.querySelector(`.moon__${language}`).classList.toggle('moon-active');
        d.querySelector(`.moon__content__${language}`).classList.toggle('moon__content-active');
        return;
    }

    if ($element.matches('.sun') ||
    $element.matches('.sun__content')) {
        d.querySelector('.sun').classList.toggle('sun-active');
        
        d.querySelectorAll('.ring').forEach(($ring) => {
            const randomIndex = Math.floor(Math.random() * 3);
            $ring.style.borderStyle = styles[randomIndex]; 
        });
    return;
    }
})   
}

const d = document;
const styles = ['inset', 'dashed', 'outset'];

export default function galaxy(){

 d.addEventListener('click', e => {
    const $element = e.target;

    if($element.dataset.skill){
        const skill = $element.dataset.skill;
        d.querySelector(`.moon__${skill}`).classList.toggle('moon-active');
        d.querySelector(`.moon__content__${skill}`).classList.toggle('moon__content-active');
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

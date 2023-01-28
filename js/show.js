export default function showElements(hiddenEl){
    const hiddenElements = document.querySelectorAll(hiddenEl);

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
}
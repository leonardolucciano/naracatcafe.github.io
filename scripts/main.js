// Parallax Function
const Parallax = () => {
    let scroll = window.scrollY;

    const element = document.querySelector('.parallax--bg');
    //element.style.backgroundPosition = `center ${scroll * 0.75}px`;
    element.style.transform = `translateY(${scroll * 0.50}px)`;
    console.log(scroll);
};

// Parallax Scrolling Effect
window.addEventListener('scroll', event => {    
    Parallax();
});
const navbar = document.querySelector('.navbar');
let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-100px';
    }
    prevScrollPos = currentScrollPos;
};
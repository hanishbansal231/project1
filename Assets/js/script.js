const navMenu = document.querySelector('.nav-menu');
const closeBtn = document.getElementById('nav-close');
const openBtn = document.getElementById('nav-toggle');

// Open The Menu
openBtn.addEventListener('click', () => {
    navMenu.classList.add('open');
});
// Close The Menu
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('open');
});

// Remove Menu Mobile
const navLinks = document.querySelectorAll('.nav-link');
const linkActive = () => {
    navMenu.classList.remove('open');
};
navLinks.forEach(navLink => navLink.addEventListener('click', linkActive));

//  Scroll Up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// Carousel
const buttons = document.querySelectorAll('[data-button]');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.button == "next" ? 1 : -1;
        const slides = button.closest('[data-calouser]').querySelector("[data-slides]");
        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

// Scroll Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // animation repeat
});

sr.reveal('.home-data');
sr.reveal('.about-card', { origin: 'left', distance: '100px', });
sr.reveal('.courses-card', { origin: 'right', distance: '100px', });
sr.reveal('.team-box', { origin: 'left', distance: '100px', });
sr.reveal('.new-box', { origin: 'right', distance: '100px', });
sr.reveal('.left-contact', { origin: 'left', distance: '100px', });
sr.reveal('.right-contact', { origin: 'right', distance: '100px', });
sr.reveal('.detail', { origin: 'right', distance: '100px', });
sr.reveal('.contact-detail', { origin: 'left', distance: '100px', });
sr.reveal('.link-detail', { origin: 'right', distance: '100px', });

// PreLoader

const loader = document.querySelector('.preloader');
window.addEventListener('load', function () {
   setInterval(()=>{
    loader.classList.add('loading');
   },1000);
});

// Scroll Active Link
const selections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    let scrollY = window.pageYOffset;
    selections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active');
        } else {
            sectionClass.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', scrollActive);
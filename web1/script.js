// Hide Navbar When in Hero Section, Show in About Section
const navbar = document.getElementById('navbar');
const heroSection = document.getElementById('hero');
const aboutSection = document.getElementById('about');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const aboutTop = aboutSection.offsetTop;

    if (currentScroll >= aboutTop) {
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
    }
});
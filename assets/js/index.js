const navToggle = document.getElementById('bar-toggle');
const navBar = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    navBar.classList.toggle('active');
    if (navBar.classList.contains('active')) {
        navToggle.classList.remove('fa-bars');
        navToggle.classList.add('fa-xmark');
    } else {
        navToggle.classList.remove('fa-xmark');
        navToggle.classList.add('fa-bars');
    }
});
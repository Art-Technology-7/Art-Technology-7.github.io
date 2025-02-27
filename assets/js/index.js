const navToggle = document.getElementById('bar-toggle');
const navBar = document.getElementById('nav');
const navLinks = navBar.querySelectorAll('.nav-bar a'); // Selecciona todos los enlaces dentro de nav-bar

navToggle.addEventListener('click', () => {
    navBar.classList.toggle('active');
    updateNavToggleIcon();
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active'); // Cierra el menú
        updateNavToggleIcon(); // Actualiza el icono
    });
});

function updateNavToggleIcon() {
    if (navBar.classList.contains('active')) {
        navToggle.classList.remove('fa-bars');
        navToggle.classList.add('fa-xmark');
    } else {
        navToggle.classList.remove('fa-xmark');
        navToggle.classList.add('fa-bars');
    }
}
const navbar = document.getElementById('nav-bar');
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const navLinks = document.querySelectorAll('.navbar-a');

abrir.addEventListener('click', () => {
    navbar.classList.add('visible');
})

cerrar.addEventListener('click', () => {
    navbar.classList.remove('visible');
});

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navLink.classList.remove('visible');
    })
})


let menuIcon = document.querySelector('.navbar-container i');
let navbar = document.querySelector('.nav-list');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}
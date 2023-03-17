//Augustin
const burgerButton = document.getElementById('burger-button');
const menu = document.getElementById('menu');
const body = document.querySelector('body');

burgerButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('menu-active');
});
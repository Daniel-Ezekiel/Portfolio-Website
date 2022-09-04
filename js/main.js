const menuBtn = document.querySelector('.hamburger').addEventListener('click', showMenu);
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu')

function showMenu(){
    menuBar.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
}
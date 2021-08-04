const burgerMenu = document.querySelector('.burger');
const dropdownBtn = document.querySelector('.dropdown-btn');
const burgerMenuSpan = document.querySelector('.burger span');
const menu = document.querySelector('.menu');

function openMenu() {
    burgerMenu.classList.toggle('active')
    burgerMenuSpan.classList.toggle('active');
    burgerMenu.classList.toggle('activeBurger');
    menu.classList.toggle('active');
}

burgerMenu.addEventListener('click', openMenu)

const dropdownContent = document.querySelector('.dropdown-content');
dropdownBtn.addEventListener('mouseover', function () {
    dropdownContent.classList.add('show')
})

dropdownBtn.addEventListener('mouseout', function () {
    dropdownContent.classList.remove('show')
})
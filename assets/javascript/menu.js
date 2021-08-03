const burgerMenu = document.querySelector('.burger');
const dropdownBtn = document.querySelector('.dropdown-btn');

function openMenu() {
    burgerMenu.classList.toggle('active')
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('activeBurger');
    document.querySelector('.menu').classList.toggle('active');
}

burgerMenu.addEventListener('click', openMenu)

const dropdownContent = document.querySelector('.dropdown-content');
dropdownBtn.addEventListener('mouseover', function () {
    dropdownContent
        .classList.add('show')
})

dropdownBtn.addEventListener('mouseout', function () {
    dropdownContent.classList.remove('show')
})
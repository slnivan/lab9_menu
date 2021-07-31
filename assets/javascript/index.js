import '../style/style.scss';
const burgerMenu = document.querySelector('.burger');
const dropdownBtn = document.querySelector('.dropdown-btn');

function openMenu() {
    burgerMenu.classList.toggle('active')
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('-active');
    document.querySelector('.menu').classList.toggle('active');
}

burgerMenu.addEventListener('click', openMenu)

dropdownBtn.addEventListener('mouseover', function () {
    document.querySelector('.dropdown-content').classList.add('show')
})

dropdownBtn.addEventListener('mouseout', function () {
    document.querySelector('.dropdown-content').classList.remove('show')
})

function createToDoPoint() {
    let li = document.createElement('li')
    let inputText = document.getElementById('to-do-value').value
    let liText = document.createTextNode(inputText)

    li.appendChild(liText)
    if (inputText !== '') {
        document.getElementById('list').appendChild(li)
    } else {
        alert('Поле не должно быть пустым')
    }
    
    document.getElementById('to-do-value').value = "";
    let span = document.createElement('span')
    let txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}

const btnAdd = document.querySelector('.btn-add')
const inputToDo = document.querySelector('input')
btnAdd.addEventListener('click', createToDoPoint)


const list = document.querySelector('.wrapper__todo')
list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    } else if (event.target.tagName === 'SPAN') {
        let point = event.target.parentNode
        point.remove()
    }
})




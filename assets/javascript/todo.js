function createToDoPoint() {
    let input = document.getElementById('to-do-value');
    let li = document.createElement('li')
    let inputText = input.value
    let liText = document.createTextNode(inputText)

    li.appendChild(liText)
    if (inputText !== '') {
        document.getElementById('list').appendChild(li)
    } else {
        alert('Поле не должно быть пустым')
    }
    
    input.value = "";
    let closeBtn = document.createElement('span')
    let txt = document.createTextNode("X");
    closeBtn.className = "close";
    closeBtn.appendChild(txt);
    li.appendChild(closeBtn);
}

const btnAdd = document.querySelector('.btn-add')
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
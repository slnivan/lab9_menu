import '../style/style.scss';

document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    
})
document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
    
})


document.querySelector('.dropdown-btn').addEventListener('mouseover', function (t) {
    
    document.querySelector('.dropdown-content').classList.add('show')
})

document.querySelector('.dropdown-btn').addEventListener('mouseout', function () {
    
    document.querySelector('.dropdown-content').classList.remove('show')
})


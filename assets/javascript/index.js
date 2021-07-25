import '../style/style.scss';

document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    
})
document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
})


document.querySelector('.li').addEventListener('mouseover', function () {
    document.querySelector('.dropdown-content').classList.add('show')
})

document.querySelector('.li').addEventListener('mouseout', function () {
    document.querySelector('.dropdown-content').classList.remove('show')
})
// document.querySelector('.dropdown-content').addEventListener('mouseover', function () {
//     this.classList.add('show')
// })
// document.querySelector('.dropdown-content').addEventListener('mouseout', function () {
//     this.classList.remove('show')
// })

import '../style/style.scss';

document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    
})
document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
  })
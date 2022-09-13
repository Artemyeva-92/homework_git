let selectColor = document.querySelector('#selectColor');
let element = document.querySelector('#element');
let formShape = document.querySelector('#formShape');
let selectShape = document.querySelector('#selectShape');

formShape.addEventListener('submit', event =>{
    event.preventDefault();
    element.className = selectShape.value;
    element.style.backgroundColor = selectColor.value;
})




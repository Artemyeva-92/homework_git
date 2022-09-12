let selectColor = document.querySelector('#selectColor');
let element = document.querySelector('#element');
let formShape = document.querySelector('#formShape');
let selectShape = document.querySelector('#selectShape');
let borderR = 50;
let squareW = 100;

selectColor.addEventListener('change', event =>{   
    element.style.backgroundColor = event.target.value;
})

formShape.addEventListener('submit', event =>{
    event.preventDefault();
    let shape =  selectShape.value;
    element.classList.add('square');
    if(shape === 'rectangle'){
        element.style.width = (squareW * 2) + `px`;
        element.style.borderRadius = 0;
    } else if (shape === 'circle'){
        element.style.borderRadius = borderR + `%`;
        element.style.width = squareW + `px`;
    } else{
        element.style.borderRadius = 0;
        element.style.width = squareW + `px`;
    }
})




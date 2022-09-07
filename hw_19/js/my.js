let block = document.querySelector(`#block`);
let blockItem = document.querySelector(`#block_item`);
let elemTop = 0;
let elemLeft = 0;
let length = 10;
let bodyWidth = document.body.clientWidth;
let bodyHeight = document.body.clientHeight;
let activeBlock;
block.addEventListener(`click`, () => activeBlock = block);

let showText = () => { 
    blockItem.style.display = `block`;
    setTimeout(()=> {  blockItem.style.display = `none`
} ,2000)
}

let transitionFunc = () =>{
    activeBlock.style.transition = `0.5s`;
    setTimeout(()=> {
        activeBlock.style.transition = `none`;
    },1000)
}

const movingUp = () => {
    if( activeBlock.offsetTop < 0 ){
        activeBlock.style.top = ( elemTop = elemTop + length*2) + `px`;
        showText();  
    } else{
        activeBlock.style.top = (elemTop = elemTop - length) +`px`;
    }
}

const movingDown= ()=>{
    if( (activeBlock.offsetTop + length) >= (bodyHeight - activeBlock.offsetHeight) ){
        activeBlock.style.top = ( elemTop = elemTop - length*2) + `px`;
        showText();
    } else{
        activeBlock.style.top = (elemTop = elemTop + length) +`px`;
    }
}

const movingLeft= ()=>{
    if( activeBlock.offsetLeft < 0 ){
        activeBlock.style.left = ( elemLeft = elemLeft + length*2) + `px`;
        showText();
    } else{
        activeBlock.style.left = (elemLeft = elemLeft - length) +`px`;
    }
}
const movingRight= ()=>{
    if( (activeBlock.offsetLeft + length) >= (bodyWidth - activeBlock.offsetWidth)){
        activeBlock.style.left = ( elemLeft = elemLeft -length*2) + `px`;
        showText();
    } else{
        activeBlock.style.left = (elemLeft = elemLeft + length) +`px`;
    }
}

const jump = ()=>{
    if( activeBlock.offsetTop < 0 ){
        activeBlock.style.top = ( elemTop = elemTop + length) + `px`;
        transitionFunc();
        showText();  
    } else{
        activeBlock.style.top = (elemTop = elemTop - length) +`px`;
        transitionFunc();
        setTimeout(()=> {
        activeBlock.style.top = (elemTop = elemTop + length) +`px`;
        },500)   
    }  
}

const movingShort= ()=>{
    activeBlock.style.width = ( activeBlock.offsetWidth * 1.25) + `px`;
    activeBlock.style.height = ( activeBlock.offsetHeight / 1.4) + `px`;
    activeBlock.style.lineHeight =  activeBlock.style.height;
    transitionFunc();
    setTimeout(()=> {
        activeBlock.style.width = ( activeBlock.offsetWidth / 1.25) + `px`;
        activeBlock.style.height = ( activeBlock.offsetHeight * 1.4) + `px`;
        activeBlock.style.lineHeight =  activeBlock.style.height;
    },500)
}

const EVENTS = {
    38: block => movingUp(block),
    40: block => movingDown(block),
    37: block => movingLeft(block),
    39: block => movingRight(block),
    32: block => jump(block),
    17: block => movingShort(block)
}

document.addEventListener(`keydown`, event =>{
    activeBlock && EVENTS[event.keyCode] && EVENTS[event.keyCode](activeBlock)
})
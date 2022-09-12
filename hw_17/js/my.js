let setLastItemClassName = () =>{
    let allLastLi = document.querySelectorAll(`li:last-of-type`);
     allLastLi.forEach(li => li.classList.add(`last`))
}

let  setFirstItemClassName = (level) =>{
    if(level === 1){
        let allFirstLi = document.querySelector(`li:first-of-type`);
        allFirstLi.classList.add(`first`)
      
    } else if(level === 2){
        let allFirstLi = document.querySelectorAll(`li>ul>li:first-of-type`);
        allFirstLi.forEach(li => li.classList.add(`first`))
    }
}

setTimeout(setLastItemClassName, 2000);
setTimeout(`setFirstItemClassName(2)`, 2000)

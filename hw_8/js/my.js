let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];

let rainbow = hero.concat(native.reverse()).concat(destination.reverse());
rainbow.pop();
rainbow.shift();
rainbow.push(`Vain`);
rainbow.unshift(`Richard`);
rainbow.splice(3, 0, `Gave`, `Battle`);

const colorsArr = [`red`,`orange`,`yellow`,`green`,`blue`,`darkblue`,`darkmagenta`];
let divColor = [];
for( let j = 0;j < colorsArr.length; j++){
    divColor.push( `<div  class="rainbow__item rainbow__item_circle" style="background-color: ${colorsArr[j]};"></div>`);
};
let divWord = [];
for( let i = 0;i < rainbow.length; i++){
    divWord.push( `<div  class="rainbow__item ">${rainbow[i]}</div>`);
};

document.write(`<div class="rainbow">
${divColor.join(``)}
${divWord.join(``)}
</div>
`);

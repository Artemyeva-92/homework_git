const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
]

function getPrice(products, seasonFunc){
    let productsValue=[];
    let sum=0;
    for(let i=0;i<products.length; i++){
    productsValue[i]=products[i][1];
    sum += productsValue[i];
    }
    return typeof seasonFunc === `function`? seasonFunc(sum) : sum;  
}

let summerValue= (sum)=> sum*=0.8;
let autumnValue= (sum)=> sum*=1.4;
let winterValue= (sum)=> sum*=2;
let springValue= (sum)=> sum*=0.6;

console.log(getPrice(products,summerValue))
console.log(getPrice(products,autumnValue))
console.log(getPrice(products,winterValue))
console.log(getPrice(products,springValue))
console.log(getPrice(products))

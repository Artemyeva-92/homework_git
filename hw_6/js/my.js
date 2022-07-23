let firstMeal = "hamburger";
let secondMeal = "cheeseburger";
let arrMeal = ["hamburger", "cheeseburger"]
let choiceOfMeal;
let totalValue;
let correctChoiceOfMeal = false;
let addDoubleCheese;
let valueHumburger = +10;
let valueCheeseburger = +15;
let valueDoubleCheese = +5;

do{
    choiceOfMeal = prompt (`Please choose ${firstMeal} or ${secondMeal}.`)
    for (let letter=0; letter<arrMeal.length; letter++){
        if(arrMeal[letter] === choiceOfMeal) correctChoiceOfMeal = true;
    }
} while (!choiceOfMeal || !correctChoiceOfMeal);
if(choiceOfMeal == firstMeal) totalValue = valueHumburger; 
else if(choiceOfMeal == secondMeal) {
    totalValue = valueCheeseburger;
    addDoubleCheese = confirm(`Would you like to add double cheese?`);
    if(addDoubleCheese) totalValue = totalValue + valueDoubleCheese;
}

let addPotato = confirm (`Would you like potato?`)
let potatoSize;
let smallPotato = "small";
let middlePotato = "middle";
let bigPotato = "big";
let valueSmallPotato = +10;
let valueMiddlePotato = +15;
let valueBigPotato = +20;
if(addPotato){
    potatoSize = prompt (`Choose potato size: ${smallPotato}/${middlePotato}/${bigPotato}`)
   if( potatoSize == smallPotato || potatoSize ==""){
    potatoSize = smallPotato;
    totalValue = totalValue + valueSmallPotato;
   }
   else if(potatoSize ==  middlePotato) totalValue = totalValue + valueMiddlePotato;
   else if (potatoSize == bigPotato) totalValue = totalValue + valueBigPotato;   
   else {
    potatoSize = smallPotato;
    totalValue = totalValue + valueSmallPotato;
    }
} else potatoSize = ``;

let addSauce= confirm (`Would you like sauce?`)
let firstSauce = "ketchup";
let secondSauce = "mayonnaise";
let choiceOfSauce;
let valueKetchup = +2;
let valueMayonnaise = +3;
if(addSauce){
   choiceOfSauce = prompt (`Choose sauce: ${firstSauce}/${secondSauce}`)
   if(choiceOfSauce == firstSauce){
    choiceOfSauce = firstSauce;
    totalValue = totalValue + valueKetchup;
    }
   else if(choiceOfSauce ==  secondSauce) totalValue = totalValue + valueMayonnaise;
   else {
    choiceOfSauce = firstSauce;
    totalValue = totalValue + valueKetchup;
    }
} else choiceOfSauce = ``;

document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${choiceOfMeal} </li>
`)
if(addPotato){
    document.write(`<li>Potato 🍟: ${potatoSize} </li>`)}
if(addSauce){
    document.write(`<li>Sauce 🧂: ${choiceOfSauce} </li>`)}
document.write(`</ul>
    <p>Price: $${totalValue} </p>
 `);

 

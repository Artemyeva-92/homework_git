
        
const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}


class Coffee{
    constructor(obj){
        Object.assign(this, obj)
    }
    makeCoffee(){
        let ingredientInfo = Object.keys(this.ingredients);
        return`<div class="cup">
        <div class="coffee">
            <div class="coffee__ingredients">
                <p style="height: ${this.ingredients.espresso}%" class="ingredient ${ingredientInfo[0]}"> ${ingredientInfo[0]}</p>
                <p style="height: ${this.ingredients.whiskey}%" class="ingredient  ${ingredientInfo[1]}"> ${ingredientInfo[1]}</p>
                <p style="height: ${this.ingredients["whipped cream"]}%" class="ingredient  ${ingredientInfo[2].replace(` `,`__`)}"> ${ingredientInfo[2]}</p>
            </div>
        </div>
        <p class="coffee__title">${this.title}</p>
    </div>`
    } 
    
    getWater(){
    let ingredientInfo = Object.keys(this.ingredients);
    return  `<p style="height: ${this.ingredients.water}%" class="ingredient ${ingredientInfo[1]}">${ingredientInfo[1]}</p>`
    }
    getMilk(){
        let ingredientInfo = Object.keys(this.ingredients);
        return `<p style="height: ${this.ingredients.milk}%" class="ingredient ${ingredientInfo.find(item=>item ==`milk`)}">${ingredientInfo.find(item=>item ==`milk`)}</p>`
    }
    getSyrop(){
        let ingredientInfo = Object.keys(this.ingredients);
        return `<p style="height: ${this.ingredients[`chocolate syrop`]}%" class="ingredient ${ingredientInfo.find(item=>item ==`chocolate syrop`).replace(` `,`__`)}">${ingredientInfo.find(item=>item ==`chocolate syrop`)}</p>`
    }
    getWhiskey(){
        let ingredientInfo = Object.keys(this.ingredients);
         return `<p style="height: ${this.ingredients.whiskey}%" class="ingredient ${ingredientInfo.find(item=>item ==`whiskey`)}">${ingredientInfo.find(item=>item ==`whiskey`)}</p>`
    }
    getBrandy(){
    let ingredientInfo = Object.keys(this.ingredients);
    return `<p style="height: ${this.ingredients.brandy}%" class="ingredient ${ingredientInfo.find(item=>item ==`brandy`)}">${ingredientInfo.find(item=>item ==`brandy`)}</p>`
    }
    getWhippedCream(){
    let ingredientInfo = Object.keys(this.ingredients);
    return `<p style="height: ${this.ingredients[`whipped cream`]}%" class="ingredient ${ingredientInfo.find(item=>item ==`whipped cream`).replace(` `,`__`)}">${ingredientInfo.find(item=>item ==`whipped cream`)}</p>`
    }
    getWarmMilk(){
    let ingredientInfo = Object.keys(this.ingredients);
    return `<p style="height: ${this.ingredients[`warm milk`]}%" class="ingredient ${ingredientInfo.find(item=>item ==`warm milk`).replace(` `,`__`)}">${ingredientInfo.find(item=>item ==`warm milk`)}</p>`
    }
    getBaileys(){
    let ingredientInfo = Object.keys(this.ingredients);
    return `<p style="height: ${this.ingredients[`baileys irish cream`]}%" class="ingredient ${ingredientInfo.find(item=>item ==`baileys irish cream`).replaceAll(` `,`__`)}">${ingredientInfo.find(item=>item ==`baileys irish cream`)}</p>`
    }
    getIce(){
        let ingredientInfo = Object.keys(this.ingredients);
        return `<p style="height: ${this.ingredients.ice}%" class="ingredient ${ingredientInfo.find(item=>item ==`ice`)}">${ingredientInfo.find(item=>item ==`ice`)}</p>`
    }
    getIceCream(){
        let ingredientInfo = Object.keys(this.ingredients);
        return `<p style="height: ${this.ingredients[`ice cream`]}%" class="ingredient ${ingredientInfo.find(item=>item ==`ice cream`).replace(` `,`__`)}">${ingredientInfo.find(item=>item ==`ice cream`)}</p>`
    }
    getChocolate(){
        let ingredientInfo = Object.keys(this.ingredients);
        return `<p style="height: ${this.ingredients.chocolate}%" class="ingredient ${ingredientInfo.find(item=>item ==`chocolate`)}">${ingredientInfo.find(item=>item ==`chocolate`)}</p>`
    }
    getGratedChocolate(){
        let ingredientInfo = Object.keys(this.ingredients);
        return `<p style="height: ${this.ingredients[`grated chocolate`]}%" class="ingredient ${ingredientInfo.find(item=>item ==`grated chocolate`).replace(` `,`__`)}">${ingredientInfo.find(item=>item ==`grated chocolate`)}</p>`
    }
}

class Espresso extends Coffee{
    constructor(obj){
        super(obj);
    }
    makeCoffee(){
        let ingredientInfo = Object.keys(this.ingredients);
        return `<div class="cup">
            <div class="coffee coffee--espresso">
                <div class="coffee__ingredients">
                    <p style="height: ${this.ingredients.espresso}%" class="ingredient ${ingredientInfo[0]}">${ingredientInfo[0]}</p>
                    ${this.ingredients.water ? this.getWater() : ``}
                </div>
            <p class="coffee__title">${this.title}</p> 
            </div>
        </div>`
    }  
}

class EspressoMilk extends Coffee{
    constructor(obj){
        super(obj);
    }
    makeCoffee(){
        let ingredientInfo = Object.keys(this.ingredients);
         return`<div class="cup">
        <div class="coffee coffee--espressoMilk">
            <div class="coffee__ingredients"> 
            <p style="height:  ${this.ingredients.espresso}%" class="ingredient ${ingredientInfo.find(item=>item ==`espresso`)}">${ingredientInfo.find(item=>item ==`espresso`)}</p>
            <p style="height: ${this.ingredients[`milk foam`]}%" class="ingredient ${ingredientInfo.find(item=>item ==`milk foam`).replace(` `,`__`)}">${ingredientInfo.find(item=>item ==`milk foam`)}</p>
            ${this.ingredients[`chocolate syrop`] ? this.getSyrop() : ``}
            ${this.ingredients.milk ? this.getMilk() : ``}
            </div>
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`
    }
   
}

class Alcoholic extends Coffee{
    constructor(obj){
        super(obj);
    }
    makeCoffee(){
        let ingredientInfo = Object.keys(this.ingredients);
        return` <div class="cup">
        <div class="coffee coffee--alcoholic">
            <div class="coffee__ingredients">
                <p style="height: ${this.ingredients.espresso}%" class="ingredient ${ingredientInfo.find(item=>item ==`espresso`)}">${ingredientInfo.find(item=>item ==`espresso`)}</p>
                ${this.ingredients.whiskey ? this.getWhiskey() : ``}
                ${this.ingredients.brandy ? this.getBrandy() : ``}
                ${this.ingredients[`whipped cream`] ? this.getWhippedCream() : ``}
                ${this.ingredients[`warm milk`] ? this.getWarmMilk() : ``}
                ${this.ingredients[`baileys irish cream`] ? this.getBaileys() : ``}
            </div>
        </div>
        <p class="coffee__title">${this.title}</p>
    </div>`
   }
}

class Dessert extends Coffee{
    constructor(obj){
        super(obj);
    }
    makeCoffee(){
        let ingredientInfo = Object.keys(this.ingredients);
        return`<div class="cup">
            <div class="coffee coffee--dessert">
                <div class="coffee__ingredients">
                <p style="height: ${this.ingredients.espresso}%" class="ingredient ${ingredientInfo.find(item=>item ==`espresso`)}">${ingredientInfo.find(item=>item ==`espresso`)}</p>
                     ${this.ingredients[`whipped cream`] ? this.getWhippedCream() : ``}
                     ${this.ingredients.milk ? this.getMilk() : ``}
                     ${this.ingredients.ice ? this.getIce() : ``}
                     ${this.ingredients[`ice cream`] ? this.getIceCream() : ``}
                     ${this.ingredients[`grated chocolate`] ? this.getGratedChocolate() : ``}
                     ${this.ingredients.chocolate ? this.getChocolate() : ``}   
                </div>
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`
    }
}

let renderDefaultCoffee = new Coffee(
    {
        title: `Default Coffee`,
        ingredients: {
            espresso: 50,
            whiskey: 10,
            "whipped cream": 40
        }
    }
).makeCoffee();

let espresso = COFFEE_TYPES.Espresso;
let espressoMilk = COFFEE_TYPES.EspressoMilk;
let alcoholic = COFFEE_TYPES.Alcoholic;
let dessert = COFFEE_TYPES.Dessert;

const ESPRESSO_TITLES = {
	Ristretto: coffee => new Espresso(coffee),
	Espresso: coffee => new Espresso(coffee),
	Lungo: coffee => new Espresso(coffee),
    Americano: coffee => new Espresso(coffee)
}
let espressoClass = espresso
	.map(coffee => ESPRESSO_TITLES[coffee.title] ? ESPRESSO_TITLES[coffee.title](coffee) : new Coffee(coffee))
    .map(coffee=> coffee.makeCoffee())
    .join(` `)

const ESPRESSOMILK_TITLES = {
	Macchiato: coffee => new EspressoMilk(coffee),
	[`Flat White`]: coffee => new EspressoMilk(coffee),
	Cappuccino: coffee => new EspressoMilk(coffee),
    Latte: coffee => new EspressoMilk(coffee),
    Mocha: coffee => new EspressoMilk(coffee)
}
let espressoMilkClass = espressoMilk
	.map(coffee => ESPRESSOMILK_TITLES[coffee.title] ? ESPRESSOMILK_TITLES[coffee.title](coffee) : new Coffee(coffee))
    .map(coffee=> coffee.makeCoffee())
    .join(` `)

const ALCOHOLIC_TITLES = {
	[`Irish Coffee`]: coffee => new Alcoholic(coffee),
	Corretto: coffee => new Alcoholic(coffee),
	[`Baileys Hot Coffee`]: coffee => new Alcoholic(coffee)
}
let alcoholicClass = alcoholic
	.map(coffee => ALCOHOLIC_TITLES[coffee.title] ? ALCOHOLIC_TITLES[coffee.title](coffee) : new Coffee(coffee))
    .map(coffee=> coffee.makeCoffee())
    .join(` `)

const DESSERT_TITLES = {
	Affogato: coffee => new Dessert(coffee),
	Frappe: coffee => new Dessert(coffee),
	Glace: coffee => new Dessert(coffee)
}
let dessertClass = dessert
	.map(coffee => DESSERT_TITLES[coffee.title] ? DESSERT_TITLES[coffee.title](coffee) : new Coffee(coffee))
    .map(coffee=> coffee.makeCoffee())
    .join(` `)

document.write(`<section class="cups">${renderDefaultCoffee} ${espressoClass} ${espressoMilkClass}  ${alcoholicClass} ${dessertClass}</section>`)


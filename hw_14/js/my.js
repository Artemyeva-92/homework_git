const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

class Vegetable{
    constructor(product){
        this.type = `Vegetable`;
        this.seasonKoef = 1.3;
        Object.assign(this, product);
    }
    getPrice(){
        return this.season ? this.price * this.seasonKoef : this.price;
    }
    getInfo(){
        return `<li>${Object.keys(this).map(key => `${capitalize(key)}: ${this[key]}`).join(`. `)}</li>`;
    }
}

const capitalize = str => str[0].toUpperCase()+str.slice(1).toLowerCase();
let tomato = vegetables[0];
let carrot = vegetables[1];
let corn = vegetables[2];

tomato = new Vegetable(tomato);
carrot = new Vegetable(carrot);
corn = new Vegetable(corn);

document.write( `<ul> ${tomato.getInfo()}
${carrot.getInfo()}
${corn.getInfo()}
</ul>`)





       


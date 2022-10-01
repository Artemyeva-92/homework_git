const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

let userCurrency = Object.keys(userData);
let userEntries = Object.entries(userData);
let bankCurrency = Object.keys(bankData);
let sameCurrency = userCurrency.filter( e=> bankCurrency.includes(e));
let maxCurrencySum = bankCurrency.filter(e=> bankData[e].max > 0);
let currency;

let getMoney = new Promise(
    function(resolve, reject){
        let showBalance = confirm (`Подивитися баланс карті?`);
        showBalance ? resolve(): reject();
    } 
)

getMoney
    .then(
        function(){
            do{ currency = prompt('Введіть валюту, за якою буде виведено баланс');
                if(currency){currency = currency.toUpperCase()}
            }
            while(!userCurrency.includes(currency));
            let userSum = userEntries.map(([key,value]) => {
                if(currency === key) return value
            });
            console.log(`Баланс становить: ${userSum.join(``)} ${currency}`);
        },
        function(){
            do{ currency = prompt('Введіть валюту, за якою буде проведено зняття готівки')
                if(currency){currency = currency.toUpperCase()}
            }
            while(!sameCurrency.includes(currency) || !maxCurrencySum.includes(currency))
            let sum = +prompt('Введіть cуму зняття');
            let maxSum = bankData[currency].max;
            let minSum = bankData[currency].min;
            let imgCurrency = bankData[currency].img;
            if(isNaN(sum)){
                console.log('Cуму введено некоректно');
            } else if( sum > maxSum){
                console.log(`Введена сума більша за доступну. Максимальна сума зняття:${maxSum}`);
            } else if(sum < minSum){
                console.log(`Введена сума менша за доступну. Мінімальна сума зняття:${minSum}`);
            } else {
                console.log(`От Ваші гроші ${sum} ${currency} ${imgCurrency}`);
            } 
        }
    )
    .finally(
        function(){
            console.log('Дякую, гарного дня 😊');
        }
    )
  


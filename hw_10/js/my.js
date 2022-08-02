const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

const universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo(array, title) {
    let TDs = [];
    for(let i=0; i<array.length; i++){
        let symbol = array[i][0];
            word = array[i][1];
            wordAddInfo = array[i][2];
        TDs.push(`<tr>
        <td>${symbol}</td>
        <td>${word}</td>
        <td>${wordAddInfo}</td>
        </tr>`)
    };
    document.write(`
        <table>
            <caption><b> ${title} info <b></caption>
            <tbody>
                ${TDs.join(``).replaceAll(`,`,`; `)}
            </tbody>
        </table>
    `);
};

getInfo(animals,`Animal`);
getInfo(food,`Food`);
getInfo(universes,`Universes`);

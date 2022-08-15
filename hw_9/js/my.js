let sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

let winter_sports = sports.slice(0,5);
let summer_sports = sports.slice(5,11);
let fruits = winter_sports.splice(2,1).concat(summer_sports.splice(2,2));

winter_sports = winter_sports
    .join (`\n`)
    .replaceAll(`,`,`: `);
summer_sports = summer_sports
    .join (`\n`)
    .replaceAll(`,`,`: `);
fruits = fruits
    .join (`\n`)
    .replaceAll(`,`,`: `);

console.log(`*** Winter Sports ***
${winter_sports}\n
*** Summer Sports ***
${summer_sports}\n
*** Fruits ***
${fruits}
`);

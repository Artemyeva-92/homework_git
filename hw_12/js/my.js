const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];

let newArrayExclam = [];
users.forEach(userName => newArrayExclam.push(userName[0] + `!`));
let newArrayQuestion = newArrayExclam.map( userName => userName.replace(`!`, `?`)) ;
let newArrayRed = users.filter(color => color[1] == `red`);
let newArrayScore = newArrayRed
    .map(score => score[2])
    .reduce((sum, current) => sum + current, 0);
let TRs = [];
newArrayRed.forEach(item =>{
    let TDs = [];
    item.forEach(item=> TDs.push(`<td>${item}</td>`));
    TRs.push(`<tr>${TDs.join(``).replaceAll(`,`,`; `)}</tr>`);  
});

document.write(`
<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Comand</th>
                <th>Score</th>
                <th>Data</th>
            </tr>
        </thead>
        <tbody>
           ${TRs.join(``)}
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4">Total score: ${newArrayScore}</td>
            </tr>
        </tfoot>
    </table>
`)
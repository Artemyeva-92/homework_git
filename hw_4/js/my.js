let anyString = prompt("Write any string.");
let userId = Number( prompt("Please enter integer from 1 to 4"));

if (userId === 1) {
    let indexId = Number( prompt("Write integer number"));
    newString = Number (anyString.charCodeAt (indexId));
    console.log(newString)
} else if (userId === 2) {
    let indexId = Number( prompt("Write integer number"));
    newString = anyString.slice(0, indexId) + anyString.slice(indexId + 1);
    console.log(newString)
} else if (userId === 3){
    let indexId = Number( prompt("Write integer number"));
    let arr = [":)", "=)", ":c", ":o", ":]", "8)", ":?", ":^", "XD", ":>"];
    const randomSmile = arr[getRandomIntInclusive(0, 9)]; 
    newString = anyString.slice(0, indexId) + randomSmile + anyString.slice(indexId + 1);
    console.log(newString)
} else if (userId === 4){
    newString = anyString.replace(/\s/g, "");
    console.log(newString.length)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
  
    return Math.floor(Math.random() * (max - min + 1) + min);
}

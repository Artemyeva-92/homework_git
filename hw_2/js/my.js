const FIRST_NAME = prompt("Please write your first name");
let lastName = prompt("Please write your last name");
let yearOfBirth = prompt ("Please write your year of birth");
const SPACE = " ";
const CURRENT_YEAR = 2022;

console.log("User Bio: " + FIRST_NAME + SPACE + lastName + ", " + (CURRENT_YEAR - (Number(yearOfBirth))) + SPACE + "years old.");


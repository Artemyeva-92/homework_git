const firstName = prompt("Please write your first name");
let lastName = prompt("Please write your last name");
const BIRTH_NUMBER = Number (prompt("Please write your birth number"));
const BIRTH_MONTH = Number (prompt("Please write your birth month"));
const BIRTH_YEAR = Number (prompt("Please write your birth year"));
const CURRENT_YEAR = 2022;

if (( BIRTH_NUMBER >=20 && BIRTH_MONTH == 1) || (BIRTH_NUMBER <=18 && BIRTH_MONTH == 2 )) {
    zodiac = "Aquarius \u2652;"
}   else if  (( BIRTH_NUMBER >=19 && BIRTH_MONTH == 2) || (BIRTH_NUMBER <=20 && BIRTH_MONTH == 3 )) {
        zodiac ="Pisces \u2653;"
}   else if  (( BIRTH_NUMBER >=21 && BIRTH_MONTH == 3) || (BIRTH_NUMBER <=19 && BIRTH_MONTH == 4 )) {
        zodiac ="Aries \u2648;"
}   else if  (( BIRTH_NUMBER >=20 && BIRTH_MONTH == 4) || (BIRTH_NUMBER <=20 && BIRTH_MONTH == 5 )) {
        zodiac ="Taurus \u2649;"
}   else if  (( BIRTH_NUMBER >=21 && BIRTH_MONTH == 5) || (BIRTH_NUMBER <=20 && BIRTH_MONTH == 6 )) {
        zodiac ="Gemini \u264A;"
}   else if  (( BIRTH_NUMBER >=21 && BIRTH_MONTH == 6) || (BIRTH_NUMBER <=22 && BIRTH_MONTH == 7 )) {
        zodiac ="Cancer \u264B;"
}   else if  (( BIRTH_NUMBER >=23 && BIRTH_MONTH == 7) || (BIRTH_NUMBER <=22 && BIRTH_MONTH == 8 )) {
        zodiac ="Leo \u264C;"
}   else if  (( BIRTH_NUMBER >=23 && BIRTH_MONTH == 8) || (BIRTH_NUMBER <=22 && BIRTH_MONTH == 9 )) {
        zodiac ="Virgo \u264D;"
}   else if  (( BIRTH_NUMBER >=23 && BIRTH_MONTH == 9) || (BIRTH_NUMBER <=22 && BIRTH_MONTH == 10 )) {
        zodiac ="Libra \u264E;"
}   else if  (( BIRTH_NUMBER >=23 && BIRTH_MONTH == 10) || (BIRTH_NUMBER <=21 && BIRTH_MONTH == 11 )) {
        zodiac ="Scorpio \u264F;"
}   else if  (( BIRTH_NUMBER >=22 && BIRTH_MONTH == 11) || (BIRTH_NUMBER <=21 && BIRTH_MONTH == 12 )) {
        zodiac ="Sagittarius \u2650;"
}   else if  (( BIRTH_NUMBER >=22 && BIRTH_MONTH == 12) || (BIRTH_NUMBER <=19 && BIRTH_MONTH == 1 )) {
        zodiac ="Capricorn \u2651;"
}   else{
        zodiac ="none;"
}

if (BIRTH_YEAR % 400 == 0 || BIRTH_YEAR % 4 == 0) {
    leapYear =" (leap year)";
} else if (BIRTH_YEAR % 100 == 0) {
    leapYear ="";
} else {
    leapYear ="";
}

console.log("User Bio: " + firstName + " " + lastName + "," + (CURRENT_YEAR - BIRTH_YEAR) + " " + "years old" + leapYear + "," + " " + zodiac);

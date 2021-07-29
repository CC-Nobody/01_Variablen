/***** Variablen 01 *******/

/*
Dies ist ein richtiges Block-Kommentar
*/

// Das ist ein Zeilen-Kommentar


/* Ausgabe
var firstName = "Jesus"; // C Variante der Variablen definition
console.log("Welcome back:",firstName);
*/


// Deklaration + Wertzuweisung I
/*
let lastName; //Deklaration (Definition)
lastName = "Christ"; // Wertzuweisung
console.log(lastName + ", " + firstName,lastName); // Ausgabe der Variablen
*/

// 03 Deklaration + Wertzuweisung II
/*
let fullName,currentResidence, svn;
fullName = prompt("Wer bist du?");
currentResidence = prompt("Wo kommst du her?");
svn = prompt("Wie lautet Ihre Sozialversicherungsnummer?");
console.log("Hallo ich bin",fullName,"ich komme aus",currentResidence + "."); // Ausgabe
*/

// JavaScript ist eine untypisierte Sprache! | untyped

/*
let test;
test = "Value X"; //String
test = 2; //Number
test = false; //Boolean

// test = prompt("Ich bitte um eine Eingabe:"); //String
// string, number & boolean are primitive variables

console.log("Datentyp:",typeof test);
console.log("Inhalt:",test);
*/

/******************* Variaben 02 *********************/
/*
// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

//Wertzuweisung | Assignment
let year = new Date();
ageJohn = 25;
ageMark = 30;

// Operation
birthYearJohn = year.getFullYear() - ageJohn;
birthYearMark = year.getFullYear() - ageMark;

console.log("birthYearJohn:",birthYearJohn);
console.log("birthYearMark:", birthYearMark);
console.log("date:", year.getFullYear());
*/

/*********  Variablen 03 ********/

const ageJohn = parseInt(prompt("How old is John?"));
const ageMark = 30;

// Operation (Vergleich/Test)
let isJohnOlder = (ageJohn > ageMark);
console.log("Is John older?", isJohnOlder);
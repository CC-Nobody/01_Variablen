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

let test;
test = "Value X"; //String
test = 2; //Number
test = false; //Boolean

// test = prompt("Ich bitte um eine Eingabe:"); //String
// string, number & boolean are primitive variables

console.log("Datentyp:",typeof test);
console.log("Inhalt:",test);
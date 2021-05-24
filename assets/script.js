"use strict"; // strict mode to track errors and possible future variable conflicts

// USER INPUT VARIABLES
let passwordLength = prompt('How many characters in your password (8 - 128)?');
let passwordUC = confirm ('Include uppercase letters');
let passwordNUM = confirm ('Include numbers');
let passwordSYM = confirm ('Include symbols');


// ASCII values for number and character ranges
let NUMBER_ASCII = arrayFromLowToHigh(48, 57); // ASCII for numbers
let UPPER_ASCII = arrayFromLowToHigh(65, 90); // ASCII for uppercase
let LOWER_ASCII = arrayFromLowToHigh(97, 122); // ASCII for lowercase
let SYMBOL_ASCII = arrayFromLowToHigh(33, 47).concat( // ASCII for special characters
  arrayFromLowToHigh(58, 64)).concat(
  arrayFromLowToHigh(91, 96)).concat(
  arrayFromLowToHigh(123, 126))

let passwordGenerated = document.getElementById('password') // link to empty password field in html card container

const button = document.getElementById('generate'); // link to button in html document
button.addEventListener('click', e => {
    e.preventDefault() // prevent auto refresh after submit
    let length = passwordLength;
    let upperCase = passwordUC;
    let pNumber = passwordNUM;
    let symbol = passwordSYM;
    
    // these variables may be unnecessary, but I have revised several times and kept them :)

    console.log(length);
    console.log(upperCase);
    console.log(pNumber);
    console.log(symbol);

    let password = generatePassword(length, upperCase, pNumber, symbol);
    passwordGenerated.innerText = password
}) 

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array;
}

function generatePassword(length, upperCase, pNumber, symbol) {
    let charCodes = LOWER_ASCII
    if (upperCase) charCodes = charCodes.concat(UPPER_ASCII)
    if (pNumber) charCodes = charCodes.concat(NUMBER_ASCII)
    if (symbol) charCodes = charCodes.concat(SYMBOL_ASCII)

    // pulls the boolean values in upperCase, pNumber, symbol and concatenates into the array

    let passwordCharacters = [];

    for (let i = 0; i < length; i++) {
        let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode)); // generates the random numbers for the ASCII codes and pushes to array
    }
    return passwordCharacters.join(""); // array becomes string for display
}





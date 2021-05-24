"use strict"; // strict mode to track errors and possible future variable conflicts

// USER INPUT VARIABLES

let passwordLength = prompt('How many characters in your password (8 - 128)?');
let passwordUC = confirm ('Include uppercase letters');
let passwordNUM = confirm ('Include numbers');
let passwordSYM = confirm ('Include symbols');

const button = document.getElementById('generate'); // link to button in html document
button.addEventListener('click', e => {
    e.preventDefault() // prevent auto refresh after submit
    let length = passwordLength;
    let upperCase = passwordUC;
    let pNumber = passwordNUM;
    let symbol = passwordSYM;
    
    // console.log(length);
    // console.log(upperCase);
    // console.log(pNumber);
    // console.log(symbol);

    let password = generatePassword(length, upperCase, pNumber, symbol);

}) 



// Assignment code here

// var numbers = arrayFromLowToHigh(48, 57);
// var upperCase = arrayFromLowToHigh(65, 90);
// var lowerCase = arrayFromLowToHigh(97, 122);
// var specialChar = arrayFromLowToHigh(33, 47).concat(
//   arrayFromLowToHigh(58, 64)).concat(
//   arrayFromLowToHigh(91, 96)).concat(
//   arrayFromLowToHigh(1213, 126))


// var characterCountNumber = // from .document //
// var includeNumberElement = // from .document //
// var includeUppercaseElement = // from .document //
// var includeLowercaseElement = // from .document //
// var includeSpecialCharElement = // from .document //



// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// generate array from low to high

// function arrayFromLowToHigh(low,high) {
//   const array = []
//   for (let i = low; i <= high; i++) {
//     array.push(i)
//   }
//   return array
// }

// Write password to the #password input
// function writePassword() {
//   var characterCount = characterCountNumber.value
//   var includeNumber = includeNumberElement.value
//   var includeUppercase = includeUppercaseElement.value
//   var includeLowercase = includeLowercaseElement.value

//   var password = generatePassword(characterCount, includeNumber, includeUppercase, includeLowercase, includeSpecialChar) {






//   }
  

  
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Generate the password





// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);





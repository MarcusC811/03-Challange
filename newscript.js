// Entire character set object
var passwordText = document.querySelector("#password");
const randomFunc = {
	lower: charLower,
	upper: charUpper,
	number: charNum,
	symbol: charSpec
}

// Get references to the #generate element - defines generate button 
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

// Initializes prompts for generate button
generateBtn.addEventListener("click", () => {
    var userLength = prompt('choose a length of at least 8 characters and no more than 128 characters');

    if(Number(userLength) < 8 || Number(userLength) > 128) {
        return;
    }

    var typeLow = prompt('Do you want include lowercase characters?');
    var typeUp = prompt('Do you want include uppercase characters?');
    var typeNum = prompt('Do you want include numeric characters?');
    var typeSpec = prompt('Do you want include special characters?');


    const inputLength = Number(userLength);
    const inputLow = typeLow === 'yes' || !typeLow === 'no';
    const inputUpper = typeUp === 'yes' || !typeUp === 'no';
    const inputNumber = typeNum === 'yes' || !typeNum === 'no';
    const inputSpec = typeSpec === 'yes' || !typeSpec === 'no';

    passwordText.innerText = writePassword(inputLength, inputLow, inputUpper, inputNumber, inputSpec);
});

// Write password to the #password input
function writePassword(length, lower, upper, number, special) {
    let finalPass = ' ';
    var inputCount = lower + upper + number + special; //number
    var inputArr = [{lower}, {upper}, {number}, {special}].filter(item => Object.values(item)[0]); //Object that is filtering out what is true and what isnt
    var inputKey = Object.keys(inputArr);
    
    for (i=0; i < length; i+= inputCount) {
        if(lower) {
            finalPass += charLower();
        } else {
            return;
        }

        if(upper) {
            finalPass += charUpper();
        } else {
            return;
        }

        if(number) {
            finalPass += charNum();
        } else {
            return;
        }

        if(special) {
            finalPass += charSpec();
        } else {
            return;
        }
    }

    return finalPass.slice(0, length+1);
}

// New Specific char gens
var charUpper = function () {
    const capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return capLetters[(Math.floor(Math.random() * capLetters.length))];
  }

var charLower = function () {
    const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
    return lowerLetter[(Math.floor(Math.random() * lowerLetter.length))];
}

var charNum = function () {
    const numText = "0123456789";
    return numText[(Math.floor(Math.random() * numText.length))];
}

var charSpec = function () {
    const specText = "!@#$%^&*()";
    return specText[Math.floor(Math.random() * specText.length)];
}
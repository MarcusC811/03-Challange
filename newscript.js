// Entire character set object
var passwordText = document.querySelector("#password");
var charSet = {
    lower: charLower,
    upper: charUpper,
    number: charNum,
    special: charSpec
};

// New Specific char gens
var charUpper = function () {
    const capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(capLetters[(Math.floor(Math.random() * capLetters.length))]);
  }

charUpper();

var charLower = function () {
    const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
    console.log(lowerLetter[(Math.floor(Math.random() * lowerLetter.length))]);
}

charLower();

var charNum = function () {
    const numText = "0123456789";
    console.log(numText[(Math.floor(Math.random() * numText.length))]);
}

charNum();

var charSpec = function () {
    const specText = "!@#$%^&*()";
    console.log(specText[Math.floor(Math.random() * specText.length)]);
}

charSpec();

// Get references to the #generate element - defines generate button 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Initializes prompts for generate button
generateBtn.addEventListener("click", () => {
    var userLength = prompt('choose a length of at least 8 characters and no more than 128 characters');
    var typeLow = prompt('Do you want include lowercase characters?');
    var typeUp = prompt('Do you want include uppercase characters?');
    var typeNum = prompt('Do you want include numeric characters?');
    var typeSpec = prompt('Do you want include special characters?');


    const inputLength = Number(userLength);
    const inputLow = typeLow === 'yes' || !typeLow === 'no';
    const inputUpper = typeUp === 'yes' || !typeUp === 'no';
    const inputNumber = typeNum === 'yes' || !typeNum === 'no';
    const inputSpec = typeSpec === 'yes' || !typeSpec === 'no';

    passwordText.innerText = generatePassword(inputLength, inputLow, inputUpper, inputNumber, inputSpec);
});

function generatePassword (length, lower, upper, number, special) {
    
}
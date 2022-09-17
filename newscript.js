// Entire character set object
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
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var generatePassword = function () {

    var userLength = prompt('choose a length of at least 8 characters and no more than 128 characters');
    var typeLow = prompt('Do you want include lowercase characters?');
    var typeUp = prompt('Do you want include uppercase characters?');
    var typeNum = prompt('Do you want include numeric characters?');
    var typeSpec = prompt('Do you want include special characters?');


    const  Number(userLength);
    console.log(typeLow === 'yes' || !typeLow === 'no');
    console.log(typeUp === 'yes' || !typeUp === 'no');
    console.log(typeNum === 'yes' || !typeNum === 'no');
    console.log(typeSpec === 'yes' || !typeSpec === 'no');
}

generateBtn.addEventListener("click", generatePassword);
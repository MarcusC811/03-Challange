// Assignment code here
var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Password generation
var generatePassword = function () {
  const low = 8;
  const high = 128;
  var userLength = prompt('choose a length of at least 8 characters and no more than 128 characters');
  if (userLength < low && userLength > high) {
    return;
  }
  
  var typeLow = prompt('Do you want include lowercase characters?');
  var typeUp = prompt('Do you want include uppercase characters?');
  var typeNum = prompt('Do you want include numeric characters?');
  var typeSpec = prompt('Do you want include special characters?');

  if (userLength < high && userLength > low && typeLow && typeUp && typeNum && typeSpec) {
    for (var i = 0; i < userLength; i++) {
      var passText = ' ';
      var randomNumber = Math.floor(Math.random() * characters.length);
      passText+= characters.substring(randomNumber, randomNumber+1);
      console.log(passText);
    } return passText;
  }
}
// Get references to the #generate element - generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // calls function to gen password
  var passwordText = document.querySelector("#password"); // selector for password element in HTML
  passwordText.value = password; // sets in text field

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

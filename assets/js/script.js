var possibleCharacters = [];
var newPasswordArr = [];
var newPassword = "";
var lowercaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','m','p','q','s','t','u','v','w','x','y','z'];
var uppercaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersList = ['1','2','3','4','5','6','5','7','8','9','0'];
var specialsList = ['!','#','$','%','^','&','*','(',')','-','_','=','+',';',':',',','<','=','.','>','/','?','~','[','{',']','}'];

var generatePassword = function() {
  // Ask for input of password length (8-128 characters)
  var inputLength = prompt("How long do you want your password to be? Must be between 8 and 128 characters.")

  if (inputLength >= 8 && inputLength <= 128) {

  } else {
    alert("Password must be between 8 and 128 characters!");
    return "Please try again.";
  }

  // Asks if you want lowercase
  var lowercasePrompt = confirm("Do you want lowercase characters in your password?");
  if (lowercasePrompt === true) {
    possibleCharacters = possibleCharacters.concat(lowercaseAlphabet);
    }
  // Asks if you want uppercase
  var uppercasePrompt = confirm("Do you want uppercase characters in your password?");
  if (uppercasePrompt === true) {
    possibleCharacters = possibleCharacters.concat(uppercaseAlphabet);
  }
  // Asks if you want numbers
  var numberPrompt = confirm("Do you want numbers in your password?");
  if (numberPrompt === true) {
    possibleCharacters = possibleCharacters.concat(numbersList);
  }
  // Asks if you want special characters
  var specialPrompt = confirm("Do you want special characters in your password?");
  if (specialPrompt === true) {
    possibleCharacters = possibleCharacters.concat(specialsList);
  }
  // If no character types are selected, alert the user.
  if (lowercasePrompt === false && uppercasePrompt === false && numberPrompt === false && specialPrompt  === false) {
    alert("You didn't select any character types!");
  }
  // Use user's input to modify newPassword variable, which is then converted to a string
  for (i = 0; i < inputLength; i++) {
    var randomChar = possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)];
    newPasswordArr = newPasswordArr.concat(randomChar);
  }
  newPassword = newPasswordArr.join("");

  password = newPassword;

  // reset arrays
  possibleCharacters = [];
  newPasswordArr = [];

  return password;
};

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Enter your desired password length between 8 and 128 characters.");
  var lowerCase = confirm("Include lowercase letters?");
  var upperCase = confirm("Include uppercase letters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");


  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("The password length should be between 8 and 128 characters");
    return;
  }

  if (!lowerCase &&!upperCase &&!numeric &&!special) {
    alert("You need to include at least one character type");
    return;
  }

  var passwordCharacters = "";
  var smallLetters = "abcdefghijklmnopqrstuvwxyz";
  var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";



  if (lowerCase) {
    passwordCharacters += smallLetters;
  }

  if (upperCase) {
    passwordCharacters += capitalLetters;
  }

  if (numeric) {
    passwordCharacters += numericCharacters;
  }

  if (special) {
    passwordCharacters += specialCharacters;
  }

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  return generatedPassword;
}

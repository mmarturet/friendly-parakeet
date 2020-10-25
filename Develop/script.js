// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcedefghijklmnopqrstuvwxyz0123456789@#$';

  for (i = 1; 1<= 8; i++) {
    var char = Math.floor (Math.random ()
    * str.length +1);

    generatePassword += str.charAt(char)
  }
  return generatePassword

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

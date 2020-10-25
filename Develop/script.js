// Assignment code here
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcedefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "!@#$%^&*"

console.log(uppercase, lowercase, numbers, symbols);

// Write password to the #password input
function writePassword() {
  var password = 0 <= 128
  for (var i = 0; 1 <= 128; i++) {
    var randomNumber = Math.floor(Math.random ()
    * 128 +1);
    console.log(randomNumber);
  }
  function generateNumber(min,max) {
    return Math.floor(Math.random()(max - min +1))+min;
  }

  // set password 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


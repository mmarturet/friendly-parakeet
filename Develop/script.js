// Assignment code here
var confirmUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var confirmLowercase = "abcedefghijklmnopqrstuvwxyz"
var confirmNumbers = "0123456789"
var confirmSymbols = "!@#$%^&*"

console.log(confirmUppercase, confirmLowercase, confirmNumbers, confirmSymbols);
//password variables
symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\"];
console.log(symbol)

number = ["0","1","2","3","4","5","6","7","8","9"];
console.log(number)

alpha = ["a","b","c","e","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log (alpha)

space = [];
console.log([])

// upperCase characters
var choices;
var toUpper = function (x) {
  return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#password");

get.addEventListener("click", function () {
  password = generatePassword();
  document.getElementById("password").placeholder = password;
});

// Write password to the #password input
function generatePassword() {
  //user input ask
  enter =parseInt(promp("How many characters would you like your password? Choose between 8 and 128"))
  // if statement validation
  if (!enter) {
    alert("This needs to be a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(promp("You must choose between 8 and 123"));
  } else {
    confirmNumber = confirm("Want to add numbers?");
    confirmSymbols = confirm("Want to add symbols?");
    confirmUpperCase = confirm("Want to add Uppper Case letters?");
    confirmLowerCase = confirm("Want to add LowerCase letters?");
  };

  


  
  // set password 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button



// Assignment code here
var enter;
var confirmUppercase;
var confirmLowercase;
var confirmNumbers; 
var confirmSymbols;


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

document.querySelector("#generate").addEventListener("click", function() {
  ps = generatePassword();
});

// Write password to the #password input
function generatePassword() {
  //user input ask
  console.log("hello!")
  enter = (prompt("How many characters would you like your password? Choose between 8 and 128"))
  // if statement validation
  if (!enter) {
    alert("This needs to be a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(promp("You must choose between 8 and 123"));
  } else {
    confirmNumber = confirm("Want to add numbers?");
    confirmSymbols = confirm("Want to add symbols?");
    confirmUpperCase = confirm("Want to add Upper Case letters?");
    confirmLowerCase = confirm("Want to add LowerCase letters?");
  };

  //none selected
  if (!confirmSymbols && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choice = alert("You must choose a criteria");
  }

  // 4 options
  else if (confirmSymbols && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = symbol.concat(number, alpha, alpha2);
}
//  3 options
else if (confirmSymbols && confirmNumber && confirmUppercase) {
    choices = symbol.concat(number, alpha2);
}
else if (confirmSymbols && confirmNumber && confirmLowercase) {
    choices = symbol.concat(number, alpha);
}
else if (confirmSymbols && confirmLowercase && confirmUppercase) {
    choices = symbol.concat(alpha, alpha2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
}
//  2 options 
else if (confirmSymbols && confirmNumber) {
  choices = symbol.concat(number);

} else if (confirmSymbols && confirmLowercase) {
  choices = symbol.concat(alpha);

} else if (confirmSymbols && confirmUppercase) {
  choices = symbol.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
  choices = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
  choices = alpha.concat(alpha2);

} else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alpha2);
}
// 1 option
else if (confirmSymbols) {
  choices = symbol;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = alpha;
}
// uppercase conversion
else if (confirmUppercase) {
  choices = space.concat(alpha2);
};

// math formula
for (var i = 0; i < enter; i++) {
  var pickChoices = 
  choices = [Math.floor(Math.random() * choices.length) +0];  
}
}

// Assignment code here

//declare values of each element in array values of each character types
var lowercase =["a", "b" ,"c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase=["A", "B", "C","D","E","F","G", "H","I","J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var special =["~", "!", "@", "#","$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", "<", ">", ",", "?", "-", "=", "[", "]", ".", ";", "'", ".", "/"];

//confirmed character type choices put into options variable string
var options=[];
var inputLength; //character length specified

function generatePassword() { 

//use prompt for  password criteria determination
while (true) {
var inputLength = Number(prompt("Enter a password length 8-128: "));

if (!inputLength) {
  alert("Please enter valid input. Enter a number from 8-128 characters");
  }
  else if  (inputLength < 8 || inputLength > 128) {
  prompt("Please enter valid value between 8 - 128");
  }
// if unacceptable input value ,  cannot move forward until correct input is entered in prompt
  else {
  break;
  }
}


var lowerCase = (prompt("Do you want to include lowercase characters? (Enter yes or No: )"));
var upperCase = (prompt("Do you want to include uppercase characters? (Enter yes or No: )"));
var numbers = (prompt("Do you want to include numbers characters? (Enter yes or No: )"));
var specialCharacters = (prompt("Do you want to include special characters? (Enter yes or No: )"));

  

  





// if acceptable input length, prompt next criteria of character types

//declare confirmed variable options for password character types
//alert("Please confirm characters to be included in password. Click OK to confirm selection. Please select at least one: lowercase, uppercase, numeric, and special characters");
//var confirmLowerCase = confirm(" Lowercase characters is selected");
//var confirmUpperCase = confirm(" Uppercase characters  is selected");
//var confirmNum = confirm("Numeric characters is selected");
//var confirmSpecial = confirm("Special Characters is selected");

//if not at least one character type is selected, alert one character type  must be selected 
if (lowercase === "no" && upperCase === "no" && numbers === "no" &&  specialCharacters === "no") {
  alert("At least one character type must be selected");
  var confirmLowerCase = (prompt("Do you want to include lowercase characters? (Enter yes or No: )"));
  var confirmUpperCase = (prompt("Do you want to include uppercase characters? (Enter yes or No: )"));
  var confirmNum = (prompt("Do you want to include numbers characters? (Enter yes or No: )"));
  var confirmSpecial = (prompt("Do you want to include special characters? (Enter yes or No: )"));
}
 
  //declared all options of character type selection, joined arrays values via concat method
if (lowerCase === "yes") {
  options = options.concat(lowercase);
}

if (upperCase === "yes" ) {
  options = options.concat(uppercase);
}
 
if (numbers === "yes" ) {
  options = options.concat(num);
}

if (specialCharacters === "yes") {
  options = options.concat(special);
}

var userOptionsPw =[]; // password created will be input in to this empty variable
// how to get a randomize password based on options and inputlength using Loop, push  and Math.random method
for (var i= 0; i < inputLength; i++) {
 var optionsCombined = options[Math.floor(Math.random()* options.length)];
 userOptionsPw.push(optionsCombined);
}
//join the selected options value with input length to create the random password to return value 
return userOptionsPw.join(""); 
}

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

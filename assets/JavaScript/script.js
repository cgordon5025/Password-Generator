// Assignment Code
var generateBtn = document.querySelector("#generate");
// for this I want 1s to count as Yes's and 0s are No's
var passLengthChoice = 0; //All stored values will be 'no' by default
// Strings of letters, numbers and special charcaters
var password = [];
var passwordRaw = [];
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!@#$%^&*()";
special = special.split('')

var incUpperCase = 0;
var incLowerCase = 0;
var incSpecialChar = 0;
var incNumbs = 0;
function generatePassword() {
  var passLength = window.prompt("How long do you want your password to be");
  if (!passLength) {
    return;
  }
  // this first as the rest is in relation to each other

  if (passLength >= 8 && passLength <= 128) {
    passLengthChoice = passLength;
  } else//if (passLength < 8 || passLength > 128) 
    while (passLength < 8 || passLength > 128) {
      passLength = window.prompt("Character length invalid, please give another number")
      passLengthChoice = passLength;
    } if (!passLength || passLength == NaN) {
      return;
    }
  passLengthChoice =parseInt(passLengthChoice);
  //Code for upper and lower case, special characters and numbers
  var lowerPrompt = window.confirm("Would you like to include lower case letters in your password?");
  var upperPrompt = window.confirm("Would you like to include upper case letters in your password?")
  var specialCharPrompt = window.confirm("Do you want any special characters?");
  var numberPrompt = window.confirm("Do you want any numbers in your password?");
  
  if (specialCharPrompt){
      incSpecialChar = Math.floor(Math.random()*special.length)
      passwordRaw.push(special[incSpecialChar])
  }
  if (numberPrompt){
    incNumbs = Math.floor(Math.random()*numbers.length)
    passwordRaw.push(numbers[incNumbs])
  }
  if (lowerPrompt){
    incLowerCase = Math.floor(Math.random()*lowerCase.length)
    passwordRaw.push(lowerCase[incLowerCase])
  }
  if (upperPrompt){
    incUpperCase = Math.floor(Math.random()*upperCase.length)
    passwordRaw.push(upperCase[incUpperCase])
  }
  var passString = upperCase + lowerCase + numbers + special
  passString = passString.split('')
  var desiredLength = passLengthChoice-passwordRaw.length;
  console.log (desiredLength)
    for (var i = 0; i < desiredLength; i++) {
      character = (Math.floor(Math.random() * passString.length));
      passwordRaw.push(passString[character])
    }
    let passwordShuffled = passwordRaw.sort(function(){
      return Math.random() -0.5;
    })
    //shuffle pass here
    password = passwordShuffled.join('')
    
  return password

  // conditional statement to see if to check for specific characters and to redo if it doesn't have it
}
// Write password to the #password input

// //The code here is prompting user to ask for the length of the password
function writePassword() {
  //keep this line
  var password = generatePassword(); //this means that its trying to call the function generatePassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// // This line below will actually execute the code to generate the password
// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

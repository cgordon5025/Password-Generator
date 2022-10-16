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
upperCase = upperCase.split('')
lowerCase = lowerCase.split('')
numbers = numbers.split('')
special = special.split('')

var incUpperCase = 0;
var incLowerCase = 0;
var incSpecialChar = 0;
var incNumbs = 0;
function generatePassword() {

  //Establishing all mutable variables locally because if not they are saved over by successive attempts
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var special = "!@#$%^&*()";
  upperCase = upperCase.split('')
  lowerCase = lowerCase.split('')
  numbers = numbers.split('')
  special = special.split('')

  var incUpperCase = 0;
  var incLowerCase = 0;
  var incSpecialChar = 0;
  var incNumbs = 0;

  password = [];
  var passLength = window.prompt("How long do you want your password to be");
  if (!passLength) {
    return;
  }
  if (passLength < 8 || passLength > 128 || passLength == NaN) {
    alert("Character length invalid, please provide a number between 8 and 128")
    return
  }
  passLengthChoice = passLength

  //currently passLengthChoice is a string, making it an int for  ease later
  passLengthChoice = parseInt(passLengthChoice);
  //Code for upper and lower case, special characters and numbers
  var lowerPrompt = window.confirm("Would you like to include lower case letters in your password?");
  var upperPrompt = window.confirm("Would you like to include upper case letters in your password?")
  var specialCharPrompt = window.confirm("Do you want any special characters?");
  var numberPrompt = window.confirm("Do you want any numbers in your password?");
  //We are automatically picking a charcater based on their criteria so we can guarantee that it makes it in to the password
  //also setting the strings to 0 if they don't want certain critera
  if (specialCharPrompt) {
    incSpecialChar = Math.floor(Math.random() * special.length);
    password.push(special[incSpecialChar]);
  } else special = [];
  if (numberPrompt) {
    incNumbs = Math.floor(Math.random() * numbers.length);
    password.push(numbers[incNumbs]);
  } else numbers = [];
  if (lowerPrompt) {
    incLowerCase = Math.floor(Math.random() * lowerCase.length);
    password.push(lowerCase[incLowerCase]);
  } else lowerCase = [];
  if (upperPrompt) {
    incUpperCase = Math.floor(Math.random() * upperCase.length);
    password.push(upperCase[incUpperCase]);
  } else upperCase = [];
  //here we make a big array of all the charcaters to pull from, 
  var passString = [];
  passString = passString.concat(upperCase);
  passString = passString.concat(lowerCase);
  passString = passString.concat(numbers)
  passString = passString.concat(special);
  var desiredLength = passLengthChoice - password.length;
  //loop to make the rest of the password based off the criteria provided
  for (var i = 0; i < desiredLength; i++) {
    character = (Math.floor(Math.random() * passString.length));
    password.push(passString[character])
  }
  //lets shuffle the password to make a truly original password
  let passwordShuffled = password.sort(function () {
    return Math.random() - 0.5;
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

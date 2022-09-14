// Assignment Code
var generateBtn = document.querySelector("#generate");
// for this I want 1s to count as Yes's and 0s are No's
var passHistory = [];
var passLengthChoice = 0; //All stored values will be 'no' by default
var specialCharChoice = 0;
var lowerChoice = 0;
var upperChoice = 0
var numberChoice = 0;

// Strings of letters, numbers and special charcaters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!@#$%^&*()";

// Write password to the #password input

//The code here is prompting user to ask for the length of the password
function writePassword() {
  var passLength = window.prompt("How long do you want your password to be");
  if (passLength >= 8 && passLength <= 128) {
    passLengthChoice = passLength
  } else {
    while (passLength < 8 || passLength > 128) {
      newPassLength = window.prompt("Character length invalid, please give another number")
        passLength = newPassLength
      if (passLength >= 8 && passLength <= 128) {
      }
    } passLengthChoice = passLength //Need this line outside thw while loop or else it will not be adjusted (local v universal)
  }
  window.alert("You selected " + passLengthChoice + " characters"); //Remove after understanding how the codw works
  //Code for upper and lower case
  var lowerPrompt = window.prompt("Would you like to include lower case letters in your password (Y or N)");
    lowerPrompt = lowerPrompt.toLocaleUpperCase;
  if (lowerPrompt === 'Y'){
    lowerChoice++;
  }else lowerChoice =0;

  var upperPrompt = window.prompt("Would you like to include upper case letters in your password (Y or N)")
    upperPrompt = upperPrompt.toLocaleUpperCase;
    if (upperPrompt === 'Y'){
      upperChoice++;
    }else upperChoice = 0;

  //code for the special character option?
  var specialChar = window.prompt("Do you want any special characters (Y or N)");
  specialChar = specialChar.toUpperCase;
  if (specialChar === 'Y') {
    specialCharChoice++;
  } else specialCharChoice = 0;
//code for numbers option
var numberPrompt = window.prompt("Do you want any numbers in your password (Y or N)");
  numberPrompt = numberPrompt.toLocaleUpperCase;
  if (numberPrompt === 'Y'){
    numberChoice++;
  }else numberChoice=0;

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// function generatePassword();{
//   if (specialCharChoice = 0){
//     special = [];//make the array empty to not include it
//   }
//   if (numberChoice = 0){
//     numbers = [];//Do the same here and make it empty
//   }
//   if (lowerChoice = 0){
//     lowerCase = [];
//   }
//   if (upperChoice = 0){
//     upperCase = [];
//   }
// var passString = upperCase + lowerCase + numbers +special; // add all arrays together
// var newPass = ''; //establishing empty variable for password to go into
// for (var i=0; i<passLengthChoice;i++)
//   var ranNum = Math.floor(Math.random()*passString.length)
//   newPass += passString.substring(ranNum, ranNum+1)
//}
  passwordText.value = password;


}
// This line below will actually execute the code to generate the password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
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
  //Remove after understanding how the code works
  window.alert("You selected " + passLengthChoice + " characters");
  //Code for upper and lower case
  var lowerPrompt = window.prompt("Would you like to include lower case letters in your password (Y or N)");
  lowerPrompt = lowerPrompt.toLocaleUpperCase;
  if (lowerPrompt === 'Y') {
    lowerChoice++;
  } else
    lowerChoice = 0;
//idiot proof this, add in while loop for if they don't put in the correct? x3

var upperPrompt = window.prompt("Would you like to include upper case letters in your password (Y or N)")
upperPrompt = upperPrompt.toLocaleUpperCase;
if (upperPrompt === 'Y') {
  upperChoice++;
} else upperChoice = 0;

//code for the special character option?
var specialChar = window.prompt("Do you want any special characters (Y or N)");
specialChar = specialChar.toUpperCase;
if (specialChar === 'Y') {
  specialCharChoice++;
} else specialCharChoice = 0;
//code for numbers option
var numberPrompt = window.prompt("Do you want any numbers in your password (Y or N)");
numberPrompt = numberPrompt.toLocaleUpperCase;
if (numberPrompt === 'Y') {
  numberChoice++;
} else numberChoice = 0;


  //Now that they've established their choices we need to print it and make a password
  function generatePassword() {

    //TODO FIX THIS
    //CURRENTLY NOT OPERATING
    //these lines tell me to make adjustments if they do not want certain things in their password
    if (specialCharChoice = 0) {
      special = '';//make the array empty to not include it
    }
    if (numberChoice = 0) {
      numbers = '';//Do the same here and make it empty 
    }
    if (lowerChoice = 0) {
      lowerCase = '';
    }
    if (upperChoice = 0) {
      upperCase = '';
    }
    //Sally note's do 4 for loops to do a pseudorandom code
    //for loop with random num x3
    //positions?

    //
    //final for loop with all as string and random
    //as code is there is a high chance that a category won't be selected
    var passString = upperCase + lowerCase + numbers + special; // add all arrays together
    password = '';


    for (var i = 0; i < passLengthChoice; i++) {
      password += passString.charAt(Math.floor(Math.random() * passString.length)
      );
    }
    return password
  }


  //keep this line
  var password = generatePassword(); //this means that its trying to call the function generatePassword

  //keep this line
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

  passHistory.push(password)

}
passHistory = passHistory;//saved to the array of previous passwords
// This line below will actually execute the code to generate the password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// //extra code to get some practice
// function copyPass(){
//   passwordText.select();
//   navigator.clipboard.writeText(passwordText)
//   window.alert("Copied to clipboard");
// }
// copyBtn.addEventListener("click",copyPass);

// console.log(passHistory)
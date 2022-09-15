// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
// for this I want 1s to count as Yes's and 0s are No's
var passHistory = [];
var passLengthChoice = 0; //All stored values will be 'no' by default
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

  //Code for upper and lower case, special characters and numbers
  var lowerPrompt = window.confirm("Would you like to include lower case letters in your password?");
  var upperPrompt = window.confirm("Would you like to include upper case letters in your password?")
  var specialCharPrompt = window.confirm("Do you want any special characters?");
  var numberPrompt = window.confirm("Do you want any numbers in your password?");

  //Now that they've established their choices we need to print it and make a password
  function generatePassword() {

    //TODO FIX THIS
    //CURRENTLY NOT OPERATING
    //these lines tell me to make adjustments if they do not want certain things in their password
    //currently setting any of my Choice variables seems to break the code, but they need to check if they're 0 what do?
    if (!specialCharPrompt) {
      special = '';//]make the array empty to not include it
    }
    if (!numberPrompt) {
      numbers = '';//Do the same here and make it empty 
    }
    if (!lowerPrompt) {
      lowerCase = '';
    }
    if (!upperPrompt) {
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
    // function checkCharacters(str) {
    //   if (specialCharPrompt) {
    //     return special.test(str);
    //   }
    //   if (numberPrompt) {
    //     return numbers.test(str);
    //   }
    //   if (upperPrompt) {
    //     return upperCase.test(str);
    //   }
    //   if (lowerPrompt) {
    //     return lowerCase.test(str)
    //   }
    // }


    // if (!checkCharacters(password)) {
      for (var i = 0; i < passLengthChoice; i++) {
        password += passString.charAt(Math.floor(Math.random() * passString.length)
        );
        //breaks here, why? has to do with the structure of this loop
      }
    // }      
    return password

      // conditional statement to see if to check for specific characters and to redo if it doesn't have it
  }
    // let passString = ''; 
    //     specialCharChoice == 1 ? (passString+=special): [];
    //     numberChoice == 1 ? (passString+=numbers): [];
    //     lowerChoice == 1 ? (passString+=lowerCase): [];
    //     upperChoice == 1 ? (passString+=upperCase): [];
    //   //Sally note's do 4 for loops to do a pseudorandom code
    //   //for loop with random num x3
    //   //positions?

    //   //
    //   //final for loop with all as string and random
    //   //as code is there is a high chance that a category won't be selected
    //  // let passString = upperCase += lowerCase += numbers += special; // add all arrays together
    //   password = '';

    //   for (var i = 0; i < passLengthChoice; i++) {
    //     password += passString.charAt(Math.floor(Math.random() * passString.length)
    //     ); 
    //      }   
    //      return password
    // }
    //        pString = passString.charAt(Math.floor(Math.random() * passString.length)


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

// //Workspace to debug?
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!@#$%^&*()";
var passString = upperCase + lowerCase + numbers + special; // add all arrays together
 console.log(passString)

x = 1

// if (x == 0){
//   special = '';
// }
// console.log(special);
// b = 0
// x = 0
// if (x == 0){//must be == or ===
//   b++;
// };
// console.log(b)
// if (b == 1){
//   special = [];
// }
// console.log(special)

// passString = upperCase += lowerCase += numbers += special; 
console.log(passString)

password = [];

passLengthChoice = 12;
function checkCharacters(str) {
    return special.test(str);
    return numbers.test(str);
    return upperCase.test(str);
    return lowerCase.test(str)
  }

for (var i = 0; i < passLengthChoice; i++) {
  password += passString.charAt(Math.floor(Math.random() * passString.length)
  );
}
console.log(password)
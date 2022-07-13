// Assignment code here
var passwordText = document.getElementById("#password");
var length = document.getElementById("#length");
var useNumbers = document.getElementById("#numbers");
var useSymbols = document.getElementById("#symbols");
//use arrays for new digets let capital = []
let newArray = [];
let special = [".", ",", "?", "!", "#", ",", "$", "%", "&", "*", "@", "-", "_"];
let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","q","r","z","t","u","v","w","x","y","z"];
let nmber = ["1", "2","3","4","5","6","7","8","9"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//need alert to say nothing smaller than 8 characters
// Write password to the #password input

function generatePassword() {
  var passDig = window.prompt(" How many digets do you want?");
 

  if (passDig >= 8 && passDig <= 128) {
    var specCharacters = window.confirm(" Would you like special characters?");
    var numeric = window.confirm(" Would you like numeric characters?");
    var upperCase = window.confirm(" Would you like Upper case characters?");
    var lowerCase = window.confirm(" Would you like Lower case characters?");

    if (specCharacters === true) {
      newArray = newArray.concat(special);
    }
    if (upperCase === true) {
      newArray = newArray.concat(upper);
    }
    if (lowerCase === true) {
      newArray = newArray.concat(lower);
    }
    if (numeric === true) {
      newArray = newArray.concat(nmber);
    }

    var length = 8, 
     
      choice = [];

    for (var i = 0; i < passDig; ++i) {
      choice.push(newArray[Math.floor(Math.random() * newArray.length)]); //got help on this math part
    }return choice;
  } else {
    
      window.alert(" Password has to be atleast 8 digets.");
    


    //     // var newPassword = window.confirm(" Do you want a different password?");
    //     // if (newPassword) {
    //     // location.reload;
  }
  

}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


  choice = [];
  newArray = [];

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
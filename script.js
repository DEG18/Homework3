// Assignment Code
var generateBtn, lowalphabet, capalphabet, numbers, symbols, lenpassword, keep;
var Tlowalphabet, Tcapalphabet, Tnumbers, Tsymbols, x, newstring, rorder;
generateBtn = document.querySelector("#generate");

Tlowalphabet = false;
Tcapalphabet = false;
Tnumbers = false;
Tsymbols = false;
keep = true;

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
function generatePassword() {
  lenpassword = prompt(
    "Enter an integer of length of your password (between 8-128): "
  );
  //check if the user's input is interger and also in between 8-128
  while (keep) {
    if (lenpassword === null) {
      break; //if user press cancel bottom, input would be null and stop the while loop, also keep=true
    }
    if (Number.isInteger(parseInt(lenpassword))) {
      if (lenpassword >= 8 && lenpassword <= 128) {
        keep = false;
      } else {
        lenpassword = prompt(
          "Please try again! Enter an interger between 8-128"
        );
      }
    } else {
      lenpassword = prompt("Please try again! Enter an integer!");
    }
  }

  if (keep) {
    alert("Generate Password Fail! Please try again!");
    var refresh = "Generate Password Fail! Please try again!".split("");
    return refresh;
  } else {
    //user can choose password criteria
    Tnumbers = confirm("Do you want numeric in your password?"); //if "Test number" confirm ok it will trun numbers=true
    // console.log(numbers);
    // console.log(numbers.length);
    Tlowalphabet = confirm("Do you want lowercase letter in your passsword?");
    // console.log(lowalphabet);
    // console.log(lowalphabet.length);
    Tcapalphabet = confirm("Do you want uppercase letter in your passsword?");
    // console.log(capalphabet);
    // console.log(capalphabet.length);
    Tsymbols = confirm("Do you want special characters in your password?");
    // console.log(symbols);
    // console.log(symbols.length);

    lowalphabet = "abcdefghijklmnopqrstuvwxyz".split(""); //26 elements
    // console.log(lowalphabet);

    capalphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); //26 elements
    // console.log(capalphabet);

    numbers = "1234567890".split("");
    // console.log(numbers);

    symbols = "!@#$%^&*()_+~`[]{}|;:,./<>?'".split(""); //28 elements
    // console.log(symbols);

    numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; //10 elements
    // console.log(numbers);

    var newpasswordarray = []; //create an empty array to store new password char, later I will use this array make it to random order
    //random password generater
    //choose each element from True var. array in order, and add the element to newpasswordarray array

    for (var i = 0; i < lenpassword; ) {
      if (Tnumbers) {
        var a = numbers[Math.floor(Math.random() * numbers.length)];
        console.log(a);
        newpasswordarray.push(a);
        i++;
      }
      if (Tlowalphabet) {
        var b = lowalphabet[Math.floor(Math.random() * lowalphabet.length)];
        console.log(b);
        newpasswordarray.push(b);
        i++;
      }
      if (Tcapalphabet) {
        var c = capalphabet[Math.floor(Math.random() * capalphabet.length)];
        console.log(c);
        newpasswordarray.push(c);
        i++;
      }
      if (Tsymbols) {
        var d = symbols[Math.floor(Math.random() * symbols.length)];
        console.log(d);
        newpasswordarray.push(d);
        i++;
      }
    }
    console.log(newpasswordarray);
    // console.log(newpasswordarray.join(""));

    //make newpasswordarray into random order, and add them to a string
    // for (x = 0; x < newpasswordarray.length; x++) {
    //   rorder = Math.floor(Math.random() * newpasswordarray.length);
    //   newstring = newstring + newpasswordarray[rorder];
    // }
    // console.log(newstring);

    return newpasswordarray;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword().join("");
  // console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

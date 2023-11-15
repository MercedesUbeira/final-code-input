//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE
//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE
//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE
//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE
//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE
//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE
//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE
//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE
//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE
//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE
//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE
//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE
//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE

document.addEventListener("DOMContentLoaded", function () {
  var inputCode = document.getElementById("codeInput");
  var messageBox = document.getElementById("messageBox");
  var continueBtn = document.getElementById("continueBtn");

  // Add click event listener to the Continue button
  continueBtn.addEventListener("click", function () {
    checkCode(inputCode, messageBox);
  });

  // Add input event listener to the code input field
  inputCode.addEventListener("input", function () {
    inputCode.style.borderColor = "";
  });
});

//YOU FUCKING CHEATER GET OUT OF HEREEEEEEEEEEEEEEEEEEEE

function checkCode(inputCode, messageBox) {
  if (inputCode.value.toUpperCase() === "5F4ME9N") {
    // Correct code
    messageBox.innerHTML =
      "This is your final clue: <br> In melodies sweet, your treasure lies, <br> Where keys are not just black and white. <br> Amidst tables where hunger takes flight, <br> A pianist's delight conceals your prize";
    inputCode.style.borderColor = ""; // Reset border color
  } else {
    // Incorrect code
    var errorMessages = [
      "Oh, Christmas tree! Your code is not the key.",
      "Jingle bells, your code smells. Try again!",
      "Ho, ho, no! That's not the right code.",
      "You're on the naughty list with that code. Try a different one.",
      "Santa's elves are still coding... and your code is not it.",
    ];

    var randomError =
      errorMessages[Math.floor(Math.random() * errorMessages.length)];

    messageBox.innerHTML = randomError;
    inputCode.style.borderColor = "#e74c3c"; // Set border to red
  }
}

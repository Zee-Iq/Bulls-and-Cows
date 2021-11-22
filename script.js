let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let secretNumbers = [];

for (let i = 0; i < 4; i++) {
  let randomNumber = numbers.splice(Math.floor(Math.random() * 9), 1);
  secretNumbers.push(randomNumber);
}
console.log(secretNumbers);

//html
let body = document.body;
let result = document.createElement("h1"); // displaying the result
body.append(result);
let showCounter = document.createElement("h5"); //displaying how many tries are left
body.append(showCounter);
let input = document.createElement("input"); // the input has to be a four digit number
input.type = "number";
body.append(input);
let button = document.createElement("button"); // creating an enter button
button.textContent = "Enter";
body.append(button);

//event listener with a callback function to check wether it's bulls and/or cows

let counter = 10; // giving player 10 tries
button.addEventListener("click", function () {
  let bull = 0;
  let cow = 0;
  console.log(secretNumbers.join(""), input.value); //outputting a number instead of a string with .join("")
  if (secretNumbers.join("") == input.value) {
    //if guess is correct -->  displays: "You win"
    result.textContent = "You win!";
  } else {
    if (counter > 0) {
      for (let j = 0; j < 4; j++) {
        if (secretNumbers[j] == input.value[j]) {
          bull++;
          result.textContent = bull + "bulls";
        } else if (secretNumbers.includes(input.value)) {
          cow++;
        }
      }
    }

    result.textContent = bull + " Bulls " + cow + " Cows "; // Text of result
    input.value = ""; // resets the input area to empty after a value is entered
    counter--; //counts down after each try
    showCounter.textContent = counter + " chances left ";

    if (counter == 0) {
      result.textContent = "Sorry, you have lost :( ...try again!";
      input.value = "";
    }
  }
});

//

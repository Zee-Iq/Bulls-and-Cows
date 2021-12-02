let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let secretNumbers = [];

for (let i = 0; i < 4; i++) {
  let randomNumber = numbers.splice(Math.floor(Math.random() * 9), 1);
  secretNumbers.push(randomNumber);
}
console.log(secretNumbers);

let body = document.body;
let result = document.createElement("h1");
body.append(result);
let showCounter = document.createElement("h5");
body.append(showCounter);
let input = document.createElement("input");
input.type = "number";
body.append(input);
let button = document.createElement("button");
button.textContent = "Enter";
body.append(button);

let counter = 10;
button.addEventListener("click", function () {
  let bull = 0;
  let cow = 0;
  console.log(secretNumbers.join(""), input.value);
  if (secretNumbers.join("") == input.value) {
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

    result.textContent = bull + " Bulls " + cow + " Cows ";
    input.value = "";
    counter--;
    showCounter.textContent = counter + " chances left ";

    if (counter == 0) {
      result.textContent = "Sorry, you have lost :( ...try again!";
      input.value = "";
    }
  }
});

// 🎯 Part 1: JavaScript Basics
// Variables, conditionals, and console.log/output or by modifying the webpage content.

function checkAge() {
  let age = prompt("Enter your age:"); // ask user for input
  age = Number(age); // convert to number

  if (age >= 18) {
    document.getElementById("result").textContent = "You are an adult ✅";
  } else {
    document.getElementById("result").textContent = "You are under 18 🚸";
  }
}

// ❤️ Part 2: Functions — reusable blocks
// Function 1: calculate a total from 2 numbers
function calculateTotal() {
  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));
  let total = num1 + num2;

  document.getElementById("result").textContent =
    "The total is: " + total;
}

// Function 2: multiply two numbers
function multiplyNumbers() {
  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));
  let product = num1 * num2;

  document.getElementById("result").textContent =
    "The product is: " + product;
}

// 🔁 Part 3: Loops — repetition
// Example: simple countdown

function loopExample() {
  let output = "";
  for (let i = 5; i > 0; i--) {
    output += i + " ";
  }
  document.getElementById("loop-output").textContent =
    "Count down: " + output;
}

// Example 2: count up using while loop
function loopExample2() {
  let output = "";
  let i = 1;
  while (i <= 5) {
    output += i + " ";
    i++;
  }
  document.getElementById("loop-output-2").textContent =
    "Count up: " + output;
}

// 🌐 Part 4: DOM Manipulation
// Example 1: change existing text on page
function changeText() {
  const intro = document.getElementById("intro");

  // Check the current text and switch it back and forth
  if (intro.textContent === "Welcome Precious! Let's test our JavaScript skills.") {
    intro.textContent = "Hi Precious, keep up the good work!";
  } else {
    intro.textContent = "Welcome Precious! Let's test our JavaScript skills.";
  }
}

// Example 2: toggle background color
function toggleColor() {
  document.body.classList.toggle("highlight");
}

// Example 3: add new list item with user input
function addNewItem() {
 let itemText = prompt("Enter the item you want to add:"); // ask user
  if (itemText) { // only add if not empty
    let newItem = document.createElement("li");
    newItem.textContent = itemText;
    document.getElementById("item-list").appendChild(newItem);
  }
}


//Part 2: Adding JavaScript 
alert("Hello World!");

//Part 3: Writing JavaScript
// Prompt user for their name and display in lab01.html
let yourName = prompt("What is your name?", "Your name here...");
document.getElementById("name").innerHTML = "Hello, " + yourName + ". Nice to meet you.";

// Prompt user for the amount
let yourAmount = prompt("What is your amount?", "Your amount here...");
yourAmount = parseInt(yourAmount);
document.getElementById("amount").innerHTML = "$" + yourAmount;

// Prompt user for tax rate
let taxRate = prompt("What is the tax rate?", "Tax rate here...");
taxRate = parseInt(taxRate);
document.getElementById("tax").innerHTML = taxRate + "%";

// Multiply Amount and Tax Rate
let totalAmount = yourAmount + (yourAmount*taxRate/100);
totalAmount = parseFloat(totalAmount);
totalAmount = totalAmount.toFixed(2);
document.getElementById("total").innerHTML = "$" + totalAmount;
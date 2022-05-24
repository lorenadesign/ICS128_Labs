//Part 1: Using JS Conditional Statements

//1.1: Middle Number

// Prompt user for 3 numbers 
let num1 = parseInt(prompt("Enter your first number", "First number here..."));
let num2 = parseInt(prompt("Enter your second number", "Second number here..."));
let num3 = parseInt(prompt("Enter your third number", "Third number here..."));

// Declare median variable (middle number)
let median = null

// Test all conditions to find middle number
if (num1 > num2)
    {
        if (num2 > num3) {
            median = num2;
            }
        else if (num1 > num3) {
            median = num3;
            }
        else {
            median = num1;
        }
    }
    else
    {
        if (num1 > num3) {
            median = num1;
        } else if (num2 > num3) {
            median = num3;
        }
        else {
            median = num2;
        }
    }

// Display statement about middle number
document.getElementById("output").innerHTML = `The middle number of (${num1}, ${num2}, ${num3}) is: `;
document.getElementById("colour").innerHTML = median; 

// Colour middle number red
if (median % 2 == 0 ){
    document.getElementById("colour").style.color="red";
} 

//1.2: Grade Calculator

let grade = parseInt(prompt("Enter a percentage", "Number from 0 to 100..."));
let letterGrade = null;

// Calculate letter grade and style based on score
switch(true) {
    case (grade<50):
        letterGrade = "F";
        document.getElementById("color").style.color="red";
        break;
    case (grade<65):
        letterGrade = "D";
        document.getElementById("color").style.color="black";
        break;
    case (grade<80):
        letterGrade = "C";
        document.getElementById("color").style.color="gold"; //yellow colour is 'gold' to improve readability
        break;
    case (grade<90):
        letterGrade = "B";
        document.getElementById("color").style.color="blue";
        break;
    case (grade<=100):
        letterGrade = "A";
        document.getElementById("color").style.color="green";
        break;
    default :
        letterGrade = "Incorrect - not between 0-100";
        break;
}

// Display letter grade
document.getElementById("grade").innerHTML = `The letter grade for ${grade}% is: `;
document.getElementById("color").innerHTML = letterGrade; 

//Part 2: Using JS Iterative Statements

//2.1: Iteration Question 

let symbol = "";

for (let i = 0; i < 5; i++){
    symbol += "<br>";
    for (let j = 0; j <= i; j++){
        symbol += "# ";
    }
}
for (let k = 0; k < 4; k++){
    symbol += "<br>";
    for (let m = 0; m <= 3 - k; m++){
        symbol += "# ";
    }
}
// Print both looping constructs
document.getElementById("triangle").innerHTML = symbol;

//2.2: Word Problem

let smogSize = 100;
let increaseRate = 1.06;
let bangkokArea = 125000;
let count = 0;
let half = 1;

while (smogSize <= bangkokArea){
    smogSize *= increaseRate;
    count += 1;
    if (smogSize <= bangkokArea/2){
        half += 1;
    }
}
document.getElementById("full").innerHTML = `Fully envelop Bangkok in MINUTES: ${count}`;
document.getElementById("half").innerHTML = `Half envelop Bangkok in MINUTES: ${half}`;



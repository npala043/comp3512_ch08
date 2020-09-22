/* add code below this */
let bill = prompt("Enter your bill total");
let iBill = Number(bill);

const tipPercent = 0.1;
let tip = iBill*tipPercent;

console.log("For bill of $" + iBill + " the tip should be $" + tip);
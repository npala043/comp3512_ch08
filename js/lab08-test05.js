/* add code below this */
// let bill = prompt("Enter your bill total");
// let iBill = Number(bill);

// const tipPercent = 0.1;

// if (isNaN(iBill)) {
//     console.error("Whoa there, bucko")
// } else {
//     let tip = iBill*tipPercent;
//     console.log("For bill of $" + iBill + " the tip should be $" + tip);
// }

let billTotals = [50,150,20,500];
let tips = [];

function calculateTip(total) {
    if (total > 75) {
        return total * 0.1;
    } else if (total < 30) {
        return total * 0.3;
    } else {
        return total * 0.2;
    }
}

for (let bill of billTotals) {
    tips.push(calculateTip(bill));
}

for (let i=0; i<billTotals.length; i++) {
    console.log(`Bill=$${billTotals[i]} Tip=$${tips[i]}`);
}
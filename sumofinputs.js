// Sum of inputs
//
// The script runs a prompt until cancelled and returns
// the sum of the numbers entered.
//
// If The input is empty string or an invalid number the script
// breaks and returns the sum of the inputs added so far
//
//
// TO USE THIS FILE
// replace the current index.js with this
//
//

console.log(`I'm in.`);

function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt('Add a number', 0);

        // Should we break?
        if (value === '' || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    // Return the sum
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

alert(sumInput());

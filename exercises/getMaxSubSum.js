// Get Max Subset Sum
//
// The script returns the maximum sum that can be obtained within a subset of an array.
//
// TO USE THIS FILE
// replace the current index.js with this
//
//

console.log(`Maximal Subarray loaded..`);
console.log('\n');

function getMaxSubSum(arr) {
    console.log(`We are now testing: ${arr}`);

    let maxSum = 0;

    // Looping through the array
    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        //Looping through subsets
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
            console.log(`Max sum is: ${maxSum}`);
        }
    }

    console.log(`The maxSum is: ${maxSum}`);
    console.log('\n');
    return maxSum;
}

getMaxSubSum([-1, 2, 3, -9]);

function filterRangeInPlace(arr, a, b) {
    arr.map((item, index, thisArg) => {
        if (item <= a || item >= b) {
            thisArg.splice(index, 1);
        }
    });
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]

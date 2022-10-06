function filterRange(arr, a, b) {
    console.log(`We have array: ${arr} with a: ${a} and b: ${b}`);
    return arr.filter(item => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

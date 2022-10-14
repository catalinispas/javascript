let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let arr = [pete, john, mary];
console.log(
    `Initial array:  ${arr.map(obj => `\n Name: ${obj.name}, Age: ${obj.age}`)}`
);

function sortByAge(arr) {
    arr.sort((a, b) => {
        return a.age - b.age;
    });
}

sortByAge(arr);

// now: [john, mary, pete]
console.log(`${arr[0].name} is ${arr[0].age}`); // John
console.log(`${arr[1].name} is ${arr[1].age}`); // Mary
console.log(`${arr[2].name} is ${arr[2].age}`); // Pete

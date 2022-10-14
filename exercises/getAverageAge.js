let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 29 };

let arr = [john, pete, mary];

function getAverageAge(users) {
    // return (
    //     users.reduce((previousUser, user) => previousUser + user.age, 0) /
    //     users.length
    // );
    console.log(
        users.reduce((prev, user) => prev + user.age, 0) / users.length
    );
}

console.log(`Initial arr is ${arr.toString()}`);
console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

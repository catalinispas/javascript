console.log("Haku', the one thing that matters the most to you.");

//
// Array.splice() examples
//
// 1) Deletion

let arr = ['I', 'study', 'JavaScript'];
console.log(`The array is now: ${arr} \n`);

arr.splice(1, 1);
console.log(`The array is now: ${arr}`); // "I", "JavaScript"

// We start from index 1 and remove 1 element

//
// 2) Remove and replace

let arr2 = ['I', 'study', 'JavaScript', 'right', 'now'];
arr2.splice(0, 3, 'Faputa', 'Is', 'Faputa', 'sosu');
console.log(arr2);

// Tasks
// 1) camelize(str)

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
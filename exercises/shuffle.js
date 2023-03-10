let arr = [1, 2, 3];

// Fisher-Yates shuffle
//
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }

function shuffle(arr) {
    arr.sort((a, b) => Math.random() - 0.5);
}

let count = {
    123: 0,
    132: 0,
    213: 0,
    231: 0,
    321: 0,
    312: 0,
};

for (i = 0; i <= 1000000; i++) {
    shuffle(arr);
    count[arr.join('')]++;
}

console.log(count);

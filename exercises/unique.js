// TODO Check later if it's better than the one one javascript.info

const unique = arr => {
    arr.map((item, index, arr) => {
        if (arr.indexOf(item) === index) {
            // console.log(`Item: ${item} has index: ${index}. Adding to list..`);
            return item;
        }
        // console.log(
        //     `Item: ${item} has index: ${index}. Item is already in the array at ${arr.indexOf(
        //         item
        //     )}. Skipping..`
        // );
    });
};

let strings = [
    'Hare',
    'Krishna',
    'Hare',
    'Krishna',
    'Krishna',
    'Krishna',
    'Hare',
    'Hare',
    ':-O',
];

console.log(unique(strings)); // Hare, Krishna, :-O

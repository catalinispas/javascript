// const a = [1, 2, 3]
// const mapUsingReduce;
// const filterUsingReduce;
// a.map(x => x+1);
// a.mapUsingReduce(x => x+1);

// const a = [1, 2, 3];
// a.mapUsingReduce = callback => {
//   a.reduce((prev, current) => callback);
// };

// console.log(a.map(x => x + 1));
// console.log(a.mapUsingReduce(x => x + 1));

// const euros = [1, 2, 3];

// const avg = euros.reduce((total, current, index, arr) => {
//   total += current;
//   if (index == arr.length - 1) {
//     return total / arr.length;
//   } else return total;
// });

// const double = euros.reduce((double, current) => [...double, 2 * current], []);

// console.log(avg);
// console.log(euros.mapUsingReduce(x => x + 1));

// const a = [1, 2, 3]
// const mapUsingReduce;
// const filterUsingReduce;
// a.map(x => x+1);
// a.mapUsingReduce(x => x+1);

const a = [1, 2, 3];

const mapUsingReduce = func => {
  return a.reduce((prev, current) => [...prev, func(current)], []);
};

a.mapUsingReduce = mapUsingReduce;

// a.mapUsingReduce = func => {
//   return a.reduce((prev, current) => [...prev, func(current)], []);
// };

a.filterUsingReduce = func => {
  return a.reduce(
    (prev, current) => (func(current) ? [...prev, current] : prev),
    []
  );
};

console.log(`map: ${a.map(x => x + 1)}`);
console.log(`mapUsingReduce: ${a.mapUsingReduce(x => x + 1)}`);
console.log(`filterUsingReduce: ${a.filterUsingReduce(x => x > 2)}`);

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
  { name: 'Do', age: 12, surname: 'Rel' },
];

function byField(str) {
  return (a, b) => (a[str] > b[str] ? 1 : -1);
}

users.sort(byField('name'));
console.log(users);

let usersByAge = JSON.parse(JSON.stringify(users));
console.log(usersByAge.sort(byField('age')));

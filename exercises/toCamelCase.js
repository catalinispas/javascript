function toCamelCase(str) {
    return str === ''
        ? ''
        : str
              .split(/[-_]/g)
              .map(
                  (item, index) =>
                      (index > 0 ? item[0].toUpperCase() : item[0]) +
                      item.slice(1, item.length).toLowerCase()
              )
              .join('');
}

// Test Zone

let arr = ['the-stealth-warrior', 'The_Stealth_Warrior'];

for (item of arr) {
    console.log(`${item} is now: ${toCamelCase(item)}`);
}

function XO(str) {
    let xCount = 0;
    let oCount = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'o' || str[i] === 'O') oCount++;
        if (str[i] === 'x' || str[i] === 'X') xCount++;
    }
    if (xCount != oCount) return false;
    return true;
}

console.log(`${XO('ooxx')} => true}`);
console.log(`${XO('xooxx')} => false}`);
console.log(`${XO('ooxXm')} => true}`);
console.log(
    `${XO(
        'zpzpzpp'
    )} => true // when no 'x' and 'o' is present should return true}`
);
console.log(`${XO('zzoo')} => false}`);

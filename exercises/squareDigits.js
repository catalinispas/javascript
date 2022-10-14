let num = 9812;

function squareDigits(num) {
    return parseInt(
        num
            .toString()
            .split('')
            .map(num => Math.pow(num, 2))
            .join('')
    );
}

console.log(squareDigits(num));

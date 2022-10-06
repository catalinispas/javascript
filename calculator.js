function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };

    this.calculate = str => {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            console.log(a, b, op);
            return NaN;
        }
        return this.methods[op](a, b);
    };
}

let calc = new Calculator();

calc.addMethod('*', (a, b) => a * b);

console.log(calc.calculate('3 + 7')); // 10
console.log(calc.calculate('3 * 5'));

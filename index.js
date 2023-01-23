function sum(a) {
  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return currentSum;
}

console.log(sum(1)(2));

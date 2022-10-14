var uniqueInOrder = function (iterable) {
    return (typeof iterable == 'object' ? iterable : iterable.split('')).filter(
        (item, index, arr) =>
            arr.indexOf(item) == index
                ? item
                : arr[index - 1] == item
                ? null
                : item
    );
};
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

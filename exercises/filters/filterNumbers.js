let l = [1, 2, 'aasf', '1', '123', 123];

function filter_list(l) {
    return l.filter(item => typeof item == 'number');
}

console.log(filter_list(l));

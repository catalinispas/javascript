// Translate border-left-width to borderLeftWidth

// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
    newStr = str
        .split('-')
        .map((item, index) =>
            index == '0' ? item : item.charAt(0).toUpperCase() + item.slice(1)
        )
        .join('');
    console.log(newStr);
}

camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';

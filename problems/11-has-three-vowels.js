/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function (string) {
    // Your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Convert the string to lowercase, split it into characters,
    // and filter out the vowels, then create a Set to find unique ones
    const uniqueVowels = new Set(
        string.toLowerCase().split('').filter(char => vowels.includes(char))
    );

    // Return true if the size of the Set is at least 3
    return uniqueVowels.size >= 3;
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}

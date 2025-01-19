// 5c.
// Write a JavaScript program to remove duplicate items from an array

function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

// option 2
function removeDuplicates2(arr) {
    return [...new Set(arr)];
}
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
const uniqueArray2 = removeDuplicates2(array);
console.log(uniqueArray);
console.log(uniqueArray2);
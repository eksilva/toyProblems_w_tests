// Given two integer arrays and a target sum v, write a function that will determine if there is a combination of two numbers (one from each array) that will equal the target value. If possible, return true, otherwise return false

const sumTwo = (a, b, v) => {
    // need state flag?
    var result = false;
    // iterate through a
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] + b[j] === v) {
                result = true;
                return result;
            }
        }
    }
    // iterate through b
    // for each element at the current index, check if sum equals v
    // if yes, return true
    // else, return false
    return result;
}

// tests
var arr1 = [1, 2, 3, -4];
var arr2 = [10, 20, 30, 40];

console.log(sumTwo(arr1, arr2, 36));
console.log(sumTwo(arr1, arr2, 29));
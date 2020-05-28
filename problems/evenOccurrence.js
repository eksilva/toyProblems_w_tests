/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/
/*
I: array
O: integer from array, or null
C: None
E: None
*/
var evenOccurrence = function(arr) {
  var counts = {};
  var result = null;
  var uniques = [];
  // iterate through array
  for (var int of arr) {
    // keep count of how many times each item occurs
    if (counts[int] === undefined) {
      counts[int] = 1;
      uniques.push(int);
    } else {
      counts[int]++;
    }
  }
  // iterate through counts
  for (var uni of uniques) {
    if (counts[uni] % 2 === 0) {
      // return the first item that occurs an even number of times
      result = uni;
      break;
    }
  }
  // console.log(counts);
  return result;
};

// var onlyEven = evenOccurrence([1, 7, 7, 4, 5, 6, 8, 9, 6]);
// console.log(onlyEven); //  4
/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

/*
I: integer
O: Array of strings
C: no duplicate strings
E: entering 0?
*/


var rockPaperScissors = function (rounds) {
  var letters = ['R', 'P', 'S'];
  var entry = [];
  // iterate through three possible letters
  for (var j = 0; j < letters.length; j++) {
    for (var i = 0; i < rounds; i++) {
      entry.push[letters[j]];
    }
  }
  // create entry array
  // push to result array
  // concatenate all entry arrays to make single result array
};

// Should probably create helper functions and then recurse through them based on conditions actually.... next time.
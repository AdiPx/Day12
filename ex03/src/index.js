// Only change code below this line
function rangeOfNumbers(startN, endN) {
    if (startN > endN) {
        return "The starting number will always be less than or equal to the ending number";
    } else {
        var list = [];
        for(var i = startN; i <=endN; i++) {
            list.push(i);
        }
    return list;
    }
  }
  // Only change code above this line
  
  console.log(rangeOfNumbers(1, 7)); // Change this line
  console.log(rangeOfNumbers(3, 10)); // Change this line
  console.log(rangeOfNumbers(5, 5)); // Change this line
  console.log(rangeOfNumbers(7, 5)); // Change this line
  module.exports = rangeOfNumbers;
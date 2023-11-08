//Monday: Largest Number in Arrays
//Return an array consisting of the largest number from each provided sub-array.
//For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop,
//and access each member with array syntax arr[i].

// function largestOfFour(arr) {
//   // You can do this!
//   return arr;
// }
//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//Returns [5,27,39,1001]

//Pseudocode
// Create an array to store the largest numbers from each sub-array;
// Use for loop to iterate through the sub-arrays;
// Assume the first number is the largest;
// Iterate through the numbers in the current sub-array;
// Push the largest number for the current sub-array into the result array;
// Call the function with necessary argument inside console.log.

function largestOfFour(arr) {
  const largestNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    let subArray = arr[i];
    let largestNumber = subArray[0];

    for (let j = 1; j < subArray.length; j++) {
      if (subArray[j] > largestNumber) {
        largestNumber = subArray[j];
      }
    }

    largestNumbers.push(largestNumber);
  }

  return largestNumbers;
}

let givenArr = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
console.log(givenArr);

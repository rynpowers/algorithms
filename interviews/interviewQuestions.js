// ----------------------------------------- Liftoff ---------------------------------------- //

// Given an integer num, write code to print a countdown from num to 1.
// After the countdown, print the line "Liftoff!"

function liftoff(num) {}

liftoff(5); // should print
// 5
// 4
// 3
// 2
// 1
// Liftoff!

// ----------------------------------------- MultiDimSum -------------------------------------- //

// Write a method to find the sum of all numbers in a multidimensional array of integers.

// SAMPLE OUTPUT
// Given a multidimensional Array: a = [1, [2, [3, 4]], [5, 6]],  multiDimSum would return 21.
// We get 21 by adding up all the elements of the array: 1 + 2 + 3 + 4 + 5 + 6 = 21.

// HINTS
// * This problem should probably take about 12 lines or less.
// * You may have to use recursion.

function multiDimSum(arr) {}

console.log(multiDimSum([5, 24, 3, 7])); // should return 39
console.log(multiDimSum([1, [3, [2, 6]], [5, 4], 7])); // should return 28
console.log(multiDimSum([10, [2, [[3], [10, 4]]], [5, 6]])); // should return 40

// ------------------------------------------- PairSum -------------------------------------- //

// Given an array of numbers sorted in ascending order (least to greatest), and a
// separate number (a "sum"), determine if any 2 numbers in the array add up to the sum.
// Return true if any 2 different numbers within the array add up to sum.
// Return false if no 2 numbers in the array add up to sum.

function pairSum(arr, target) {}

// normal test cases
console.log('true?', pairSum([1, 1, 2, 3, 4, 5], 7));
console.log('true?', pairSum([1, 3, 5, 7, 8, 9, 10], 16));
console.log('false?', pairSum([1, 2, 3, 4, 5], 10));
console.log('false?', pairSum([1, 2, 3, 7, 8], 7));
console.log('false?', pairSum([1, 2, 3, 4, 5], 2));

// ------------------------------------------- My Index Of -------------------------------------- //

// Given a String and a search term determine whether the search term is a substring
// of the given string

// If the search term is a substring of the string
// return 1

// If the search term is not a search term of the string
// return -1

function myIndexOf(string, searchTerm) {}

console.log(myIndexOf('balloons are fun', 'all')); //
console.log(myIndexOf('where in the world is', 'Carmen Sandiego'));
console.log(myIndexOf('secrets secrets are no fun', 'no fun'));

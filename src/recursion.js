/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
/*
I - a number
O - the number factorial
C - Use recursion
E - If n is negative or zero
Pseudo Code
  If n is negative, return null
  If n is zero, return 1
  Return n * factorial of n - 1
*/
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  // Base Case
  if (n === 0) {
    return 1;
  } else { // Recursive Case
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
/*
I - An array of numbers
O - The sum of all numbers in array
C - Use recursion
E - If array is empty, or not an array
Pseudo Code
  If array is empty, return 0
  Create copy of input array
    If array copy has only one value, return first value
  Return popped value + recursive call on copy array
*/
var sum = function(array) {
  // Edge Case for empty input array
  if (array.length === 0) {
    return 0;
  }
  var arrayCopy = array.slice();
  // Base Case to return the first element when array has only one value
  if (array.length === 1) {
    return array[0];
  }
  // Recursive Case to return the sum function added to last value pop
  return arrayCopy.pop() + sum(arrayCopy);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
/*
I - An array containing numbers and/or arrays
O - The sum of all numbers in array(s)
C - Only use recursion
E - If array is empty, or not an array
Pseudo Code
  If array is empty, return 0
  Create a copy of array excluding the first value
  Check if first value in array is type number
    Return first element + recursive call on slice copy
  Check if first value is type array
    Return recursive call on first element + recursive call on slice copy
*/
var arraySum = function(array) {
  // Edge case for empty input array
  if (array.length === 0) {
    return 0;
  }
  var nextSlice = array.slice(1);
  // Check if first value is type number or array
  if (typeof array[0] === 'number') {
    return array[0] + arraySum(nextSlice);
  } else {
    return arraySum(array[0]) + arraySum(nextSlice);
  }
};

// 4. Check if a number is even.
/*
I - An integer
O - A boolean
C - Only use recursion
E - Number is not an integer or number type
Pseudo Code
  Convert n to a postive value
  If n is zero, return true because the number is divisible by two
  If n is one, return false because the number is not divisible by two
  Return recursive call on n - 2
*/
var isEven = function(n) {
  n = Math.abs(n);
  if (n === 0) { // Base Case 1 when n is even
    return true
  } else if (n === 1) { // Base Case 2 when n is odd
    return false
  }
  // Recursive Case
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
/*
I - An integer
O - The sum of all integers below the input number exclusive
C - Only use recursion
E - Number is not an integer or number type
Pseudo Code
  If n is zero, return 0
  If n is positive, return n -1 + recursive call on n - 1
  If n is negative, return n + 1 + recursvie call on n + 1
*/
var sumBelow = function(n) {
  // Base Case and edge case when n is zero
  if (n === 0) {
    return 0;
  }
  // Recursive Case 1 when n is positive
  if (n > 0) {
    return (n - 1) + sumBelow(n - 1);
  } else { // Recursive Case 2 when n is negative
    return (n + 1) + sumBelow(n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
/*
I - Two integers, depicting the range
O - An array of numbers between the two integers exlcusive
C - Only use recursion
E - Both numbers are the same, or have a weird range like (7, 2)
Pseudo Code
  Check base and boudary case for when x equal y or x is within y by one
    Return empty array
  If x is less than y, increment x by 1
  Otherwise, decrement x by 1
  Store the value above in an array
  Return the above array concat with recursvie call using the new x and the original y
*/
var range = function(x, y) {
  // Check base condition when x is plus-minus one of y or when x equals y
  if(x === y || x === y + 1 || x === y - 1) {
    return [];
  }
  if (x < y) { // If normal range where x is smaller than y
    var incrementX = x + 1;
  } else { // If abnormal range where x is greater than y
    var incrementX = x - 1;
  }
  return [incrementX].concat( range(incrementX, y) );
  /*
  Old code before refactor
  if (x < y) {
    var result = [x + 1];
    return result.concat(range(x + 1, y));
  } else {
    var result = [x - 1];
    return result.concat(range(x - 1, y));
  }
  */
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
/*
I - Two integers, a base and an exponent
O - Return the base raised to the exponent
C - Only use recursion
E - When base and/or exponent is 0 or either numbers are float
Pseudo Code
  Check if exponent is negative
    Set flag to true
    Convert negative exponent to positive
  If exponent is one, return base
  If exponent is zero, return one
  Create result variable set to recursive call * base
  If negative exponent flag is true
    Return the inverse of result
  Otherwise
    Return the result
*/
var exponent = function(base, exp) {
  // Check if exponent is negative
  if (exp < 0) {
    var negativeExp = true;
    exp = (-1) * exp;
  }
  // Base Cases when exp is 0 or 1
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }
  // Recursive Case
  var result = base * exponent(base, (exp - 1));
  if (negativeExp) {
    return 1/result;
  } else {
    return result;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
/*
I - An integer
O - A boolean
C - Only use recursion
E - When n is not a power of 2, or n equals zero
Pseudo Code
  Check base case when n is 1 to return true
  Check if n is zero or n is odd to return false
  Return recursive call with n divided by 2 as argument
*/
var powerOfTwo = function(n) {
  if (n === 1) { // Check base case when n is one
    return true;
  } else if (n === 0 || n % 2 === 1) { // When n would fail being a power of 2
    return false;
  }
  // Recursive Case to repeatedly divide n by 2
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
/*
I - A string
O - The string reversed
C - Only use recursion
E - When string is empty
Pseudo Code
  Check for empty string to return it
  Check for base case when string has one character
  Create variable to store last index of string
  Return character at last index concat with recursive call of string slice excluding last char
*/
var reverse = function(string) {
  if (string.length === 0) {
    return '';
  } else if (string.length === 1) {
    return string;
  }
  var lastChar = string.length - 1;
  return string[lastChar] + reverse(string.slice(0, lastChar));
};

// 10. Write a function that determines if a string is a palindrome.
/*
I - A string
O - A boolean
C - Only use recursion
E - When string is empty or has spaces
Pseudo Code
  Split string at spaces and joined together
  Check if string length is zero or one to return true
  Store first character and convert to lower case
  Store last character and convert to lower case
  If first and last character are equal
    Return recursive call with string slice removing the first and last char
  Otherwise return false
*/
var palindrome = function(string) {
  // Remove spaces from string and joined together
  var splitSpaces = string.split(' ');
  string = splitSpaces.join('');
  var strLength = string.length
  // Base case when string has one or zero character left
  if (strLength === 0 || strLength === 1) {
    return true;
  }
  // Store lowercase first and last character of the string to check if they are the same
  var firstChar = string[0].toLowerCase();
  var lastChar = string[strLength - 1].toLowerCase();
  if (firstChar === lastChar) {
    var removeFirstAndLastChar = string.slice(1, (strLength - 1));
    return palindrome(removeFirstAndLastChar);
  } else { // If not the same, then string is not a palindrome
    return false
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
/*
I - Two integers
O - One integer, the remainder of the two input integers
C - Only use recursion
E - When either numbers are negative, when the first number is greater than the second
Pseudo Code
  Check edge case when x is zero or x is equal to y to return zero
  Check edge case when y is zero which is illegal math so return NaN
  Check boundary conditions when x is positive and less than y, i.e. mod(0, 32) = 0 or mod(78, 453) = 78
  Check boundary conditions when x is negative and greater than y, i.e. mod(-275, -502) = -275
*/
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
/*
I - An object and a value
O - A count integer
C - Only use recursion
E - Empty object, nested objects or non-object data types
Pseudo Code
  Create counter
  Traverse through input object
    Store current value in variable
    Check if value is an object
      Invoke recursive call on the nested object
    Otherwise if value matches the second argument
      Increment counter
  Return counter
*/
var countValuesInObj = function(obj, value) {
  var counter = 0;
  for (var key in obj) {
    var currProperty = obj[key];
    if (typeof currProperty === 'object') {
      counter += countValuesInObj(currProperty, value);
    } else if (currProperty === value) {
      counter++;
    }
  }
  return counter;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
/*
I - An object, an old key and a new key
O - Return object
C - Only use recursion
E - Empty object, nested objects or non-object data types
Pseudo Code
  Traverse through input object
    Store current value in variable
    Check if current key matches old key
      Create new property with new key and set to current value
      Delete old property at old key
    Check if current value is type object
      Invoke recursive call on nested object with new arugments
  Return object
*/
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for(var key in obj) {
    var currProperty = obj[key];
    if (key === oldKey) {
      obj[newKey] = currProperty;
      delete obj[key];
    } else if (typeof currProperty === 'object') {
      replaceKeysInObj(currProperty, oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};

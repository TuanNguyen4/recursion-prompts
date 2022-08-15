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
E - When either numbers are negative, when the first number is greater than the second, when y is 0
Pseudo Code
  Create sign flag to keep track of if x is negative
  If x is negative
    Toggle sign flag
    Set x to be positve
  If y is negative
    Set y to be positive

  Check edge cases first
  If y is 0, return NaN (can't divdie by zero)
  If x is 0 or x equals y, return 0

  Check base cases
  If x < y,
    If sign is positive
      Return x
    Otherwise
      Return -x
  Create result variable and invoke recursive function with x - y as first argument
  If positive flag is true
    Return result
  Otherwise
    Return -result

*/
var modulo = function(x, y) {
  var isPos = true;
  if(x < 0) {
    isPos = !isPos;
    x = -x;
  }
  if (y < 0) {
    y = -y;
  }

  if (y === 0) {
    return NaN;
  }
  if (x === 0 || x === y) {
    return 0;
  }

  if (x < y) {
    if (isPos) {
      return x
    } else {
      return -x;
    }
  }

  var result =  modulo(x - y, y);
  if (isPos) {
    return result;
  } else {
    return -result;
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
/*
I - Two integers
O - The product of the two integers
C - Only use recursion
E - When either numbers are negative or when both are negative
Pseudo Code
  Create sign flag to keep track of sign of final result
  If x is negative
    Toggle sign flag
    Set x to be positve
  If y is negative
    Toggle sign flag
    Set y to be positive

  Check edge and base cases first
  If either x or y are 0, return 0
  If y is 1, return x

  Create result variable set to x + recursive function with y - 1 as second argument
  If positive flag is true
    Return result
  Otherwise
    Return -result
*/
var multiply = function(x, y) {
  var isPos = true;
  if (x < 0) {
    isPos = !isPos;
    x = -x;
  }
  if (y < 0) {
    isPos = !isPos;
    y = -y;
  }

  if(x === 0 || y === 0) {
    return 0
  }
  if (y === 1) {
    return x;
  }

  var result = x + multiply(x , y - 1);
  if (isPos) {
    return result;
  } else {
    return -result;
  }

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
/*
I - Two integers
O - The quotient
C - Only use recursion
E - When either numbers are negative or when both are negative
Pseudo Code
  Create sign flag to keep track of sign of final result
  If x is negative
    Toggle sign flag
    Set x to be positve
  If y is negative
    Toggle sign flag
    Set y to be positive

  Check edge and base cases first
  If y = 0, return NaN
  If x = 0 or x < y, return 0
  If x = y, return 1

  Create result variable set to 1 + recursive function with x - 1 as first argument
  If positive flag is true
    Return result
  Otherwise
    Return -result
*/
var divide = function(x, y) {
  var isPos = true;
  if (x < 0) {
    isPos = !isPos;
    x = -x;
  }
  if (y < 0) {
    isPos = !isPos;
    y = -y;
  }

  if(y === 0) {
    return NaN;
  }
  if (x === 0 || x < y) {
    return 0;
  }
  if (x === y) {
    return 1;
  }

  var result = divide(x - y, y) + 1;
  if (isPos) {
    return result;
  } else {
    return -result;
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
/*
I - Two integers
O - An integer that is the greatest common divisor
C - Only use recursion
E - When either numbers are negative or when both are negative, when there is no gcd between the numbers
Pseudo Code
  Check edge cases
  If either x or y are negative, return null
  If x = y, return x
  If x > y
    Return recursive function with x - y as first argument
  If x < y
    Return recrusive function with y - x as second argument
*/
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === y) {
    return x;
  }
  if ( x > y) {
    return gcd(x - y, y);
  }
  if (x < y) {
    return gcd(x, y - x);
  }

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
/*
I - Two strings
O - A boolean
C - Only use recursion
E - Empty strings, when there's capital letters invovled
Pseudo Code
  Base case
  If length of both string is 0, return true
  Recursive case
  If first char of both string are equal
    Return recursive function with both strings sliced at index 1 to check the next character
  Otherwise
    Return false
*/
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  if (str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1));
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
/*
I - A string
O - An array of each string char in the array
C - Only use recursion
E - Empty string, or non string type
Pseudo Code
  Base case
  If length of string is zero
    Return empty array
  Recursive case
  Create empty array and store first char in it
  Return empty array concat with recursive function with string sliced at index 1
*/
var createArray = function(str) {
  if (str.length === 0) {
    return [];
  }
  var result = [str[0]];
  return result.concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
/*
I - An array
O - An array of the elements in reverse order
C - Only use recursion
E - Empty array, or non array type
Pseudo Code
  Base case
  If length of array is zero
    Return empty array
  Recursive case
  Create variable to store last index of array
  Create results array and store last element in it
  Return results array concat with recursive function with string sliced from index 0 to last index
*/
var reverseArr = function(array) {
  var arrayLen = array.length;
  if (arrayLen === 0) {
    return [];
  }
  var lastElement = arrayLen - 1;
  var results = [array[lastElement]];
  return results.concat(reverseArr(array.slice(0,lastElement)))
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
/*
I - Two integers
O - An array consisting of the value repeated length times
C - Only use recursion
E - Non number inputs, negative number for length
Pseudo Code
  Base case
  If length is zero
    Return empty array
  Recursive case
  Create results array and store the input value in it
  Return results array concat with recursive function with length - 1 as second argument
*/
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  }
  var results = [value];
  return results.concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
/*
I - An integer
O - An array consisting of the value repeated length times
C - Only use recursion
E - Non number inputs, negative number for length
Pseudo Code
  Base case
  If n is zero
    Return empty array

  Recursive case
  Create div3 flag if n is divisible by 3
  Create div5 flag if n is divisible by 5
  Create results array
  If div3 and div5
    Push 'FizzBuzz' to results
  Else if div5
    Push 'Buzz' to results
  Else if div3
    Push 'Fizz' to results
  Otherwise
    Push n to results
  Return recursive function with n - 1 concat with results array
*/
var fizzBuzz = function(n) {
  if (n === 0) {
    return [];
  }
  var result = [];
  var div5 = n % 5 === 0;
  var div3 = n % 3 === 0;
  if (div3 && div5) {
    result.push('FizzBuzz');
  } else if (div5) {
    result.push('Buzz');
  } else if (div3) {
    result.push('Fizz');
  } else {
    result.push(n.toString());
  }
 // return result.concat(fizzBuzz(n - 1)) // Build fizzbuzz array in reverse order
 return (fizzBuzz(n - 1)).concat(result);
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
/*
I - An array and a value
O - A counter to count the number of times value appears in array
C - Only use recursion
E - Non array input, non number value
Pseudo Code
  Base case
  If array length is zero
    Return 0
  Recursive case
  Create counter variable and set to zero
  If first element matches value
    Increment counter by one
  Return counter + recursive call with array sliced at index 1 as first argument
*/
var countOccurrence = function(array, value) {
  if(array.length === 0) {
    return 0;
  }
  var count = 0;
  if (array[0] === value) {
    count++;
  }
  return count += countOccurrence(array.slice(1), value)
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  }

  var result = rMap(array.slice(1), callback);
  result.unshift(callback(array[0]));
  return result
};
/*
  var result = [];
  result.push(callback[array[0]]);
  return result.concat(rMap(array.slice(1), callback));
*/

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
/*
I - An obj and a key
O - A counter to count the number of times key appears in array
C - Only use recursion
E - Empty object, nested objects or non-object data types
Pseudo Code
  Create counter variable
  Traverse through input object
    Store current value in variable
    If current value is type object
      Return count + recursive call with current value as first argument
    If key matches second argument
      Increment counter
  Return counter
*/
var countKeysInObj = function(obj, key) {
  var counter = 0;
  for (var key1 in obj) {
    var currentValue = obj[key1];
    if (typeof currentValue === 'object') {
      counter += countKeysInObj(currentValue, key);
    }
    if (key1 === key) {
      counter++
    }
  }
  return counter;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
/*
I - An object and a value
O - A counter to count the number of times value appears in array
C - Only use recursion
E - Empty object, nested objects or non-object data types
Pseudo Code
  Create counter
  Traverse through input object
    Store current value in variable
    If current value is type object
      Return count + recursive call with current value as first argument
    If value matches second argument
      Increment counter
  Return counter
*/
var countValuesInObj = function(obj, value) {
  var counter = 0;
  for (var key in obj) {
    var currProperty = obj[key];
    if (typeof currProperty === 'object') {
      counter += countValuesInObj(currProperty, value);
    }
    if (currProperty === value) {
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
/*
I - An array
O - An array with all strings capitalized
C - Only use recursion
E - Empty array, non string data
Pseudo Code
  If array length is 0
    Return empty array

  Create results array
  Create empty string variable
  Store first element in array
  Iterate over first element
    Concat empty string with current char capitalized
  Push string to results array
  Return results array concat with recursive call with array sliced at index 1 as first argument
*/
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  }
  var result = [];
  var capitalStr = "";
  var firstStr = array[0];
  for (var i = 0; i < firstStr.length; i++) {
    capitalStr += firstStr[i].toUpperCase();
  }
  result.push(capitalStr);
  return result.concat(capitalizeWords(array.slice(1)));
  };

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
/*
I - An array
O - An array with all strings capitalized
C - Only use recursion
E - Empty array, non string data
Pseudo Code
  If array length is 0
    Return empty array

  Create results array
  Create empty string variable
  Store first element in array
  Iterate over first element
    Concat empty string with current char capitalized
  Push string to results array
  Return results array concat with recursive call with array sliced at index 1 as first argument
*/
var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return [];
  }
  var result = [];
  var capitalStr = "";
  var firstStr = array[0];
  for (var i = 0; i < firstStr.length; i++) {
    if (i === 0) {
      capitalStr += firstStr[i].toUpperCase();
    } else {
      capitalStr += firstStr[i];
    }
  }
  result.push(capitalStr);
  return result.concat(capitalizeFirst(array.slice(1)));
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
/*
I - An object containing nested objects
O - A sum integer
C - Only use recursion
E - An object containg multiple nested objects
Pseudo Code
  Create counter variable
  Iterate over input object
    Store current property
    If current property is type object
      Set counter to recursive call with current property as its first argument
    If current property is even
      Increment sum by current property
  Return sum
*/
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var key in obj) {
    var currentProperty = obj[key];
    if (typeof currentProperty === 'object') {
      sum += nestedEvenSum(currentProperty);
    }
    if (currentProperty % 2 === 0) {
      sum += currentProperty;
    }
  }
  return sum;
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

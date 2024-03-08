  //1. Create a function that returns the sum of 2 numbers
function addition(n1,n2){
    let sum = n1+n2;
    console.log(sum)
}
// addition(2,4)
    //2.Create a function that returns the product of 2 numbers
    function multiplication(x,y){
        let product =x*y;
        console.log(product)
    }
    multiplication(4,2)
    //3.Create a function that returns the difference of 2 numbers
    function difference(a,b){
        let sub = a-b;
        console.log(sub)
    }
    difference(4,2)
   //4.Create a function that returns the division of 2 numbers. 
   function division(a,b){
    let div = a/b;
    console.log(div)
   }
   division(4,2)
//5.Create a function that receives an array and returns the sum of all the elements inside that array.
function arraySum(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];
console.log(arraySum(myArray)); // Output will be 15

// //6. Create a function that receives an array and returns the greatest value inside that array
function greatest(){
const numbers =[10, 20, 30, 40];
maxNumber = Math.max(...numbers);
console.log("the greatest number is:" , maxNumber)
}
greatest();
// //7.  Create a function that receives an array and returns the smallest number from that array
function smallest(){
    const num =[10, 18, 2, -6];
    minNumber = Math.min(...num)
    console.log("the smallest number is:", minNumber);
}
smallest();
// //8. Create a function that receives an array of numbers and returns the average of the numbers
// console.log(calculateAverage(myArray)); // Output will be 3
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; // Return 0 if the array is empty
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers)); // Output: 30


// //9.  Create a function that combines two arrays into one single array. 
function combineArrays(arr1, arr2) {
    return arr1.concat(arr2); // Concatenate arr2 to arr1 and return the result
}

// Example usage:
let array1 = ["a","b","c","d"];
let array2 = ["e","f","g"];
console.log(combineArrays(array1, array2)); // Output will be [1, 2, 3, 4, 5, 6]


// //10.10.    Create a function that displays a pattern like this:
// // * * * * *
// // * * * * *
// // * * * * *
// // * * * * *
function displayPattern(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let pattern = '';
        for (let j = 0; j < columns; j++) {
            pattern += '* '; // Add '*' followed by a space to create the pattern
        }
        console.log(pattern); // Output each row of the pattern
    }
}

// Example usage:
displayPattern(4, 5);
// //11.11.    Create a function that displays a pattern like this:
// // 1 1 1 1 
// // 1 1 1
// // 1 1
function displayPattern() {
    let pattern = '';
    for (let i = 4; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            pattern += '1 '; // Add '1 ' to the pattern
        }
        pattern += '\n'; // Add a new line after each row
    }
    console.log(pattern); // Output the pattern
}

// Example usage:
displayPattern();

// //12.    Create a function that displays a pattern like this:
// // 1 1 1 1 
// // 1 1 1 0  
// // 1 1 0 0  
// // 1 0 0 0
function displayPattern() {
    for (let i = 4; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= 4; j++) {
            if (j <= i) {
                pattern += '1 '; // Add '1 ' if j is less than or equal to i
            } else {
                pattern += '0 '; // Add '0 ' if j is greater than i
            }
        }
        console.log(pattern); // Output each row of the pattern
    }
}

// Example usage:
displayPattern();
// // 13.    Create a function that displays a pattern like this:
// // 1 1 1 1 1
// // 1 0 0 0 1
// // 1 0 0 0 1
// // 1 0 0 0 1
// // 1 1 1 1 1
function displayPattern() {
    for (let i = 4; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= 4; j++) {
            if (j <= i) {
                pattern += '1 '; // Add '1 ' if j is less than or equal to i
            } else {
                pattern += '0 '; // Add '0 ' if j is greater than i
            }
        }
        console.log(pattern); // Output each row of the pattern
    }
}

// Example usage:
displayPattern();
// //14.  Create a function that displays a pattern like this:
// 1 
// 1
// 1 
// 1
function displayPattern() {
    for (let i = 0; i < 4; i++) {
        let pattern = '';
        for (let j = 0; j < 4; j++) {
            if (i === 3 && j === 0) {
                pattern += '1';
            } else if (i === j) {
                pattern += '1';
            } else {
                pattern += ' ';
            }
        }
        console.log(pattern);
    }
}

// Call the function to display the pattern
displayPattern();
// //15.  Given an array like this:
//var array = [1,3,4,3,7,8,0,12,19];    
//Create a function to reverse the order of the elements inside the given array.
function reverseArray(array) {
    return array.reverse();
}

// Example usage:
var array = [1, 3, 4, 3, 7, 8, 0, 12, 19];
console.log("Original array:", array);
console.log("Reversed array:", reverseArray(array));
// //16. Given an array like this: 
// //var some number = [3,4,8,2,1,2,2,6,3,4];
// //a.  Create a function to sort and arrange these elements of the array in ascending order.
function sortAscending(array) {
    return array.sort((a, b) => a - b);
}

// Example usage:
var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
console.log("Original array:", someNumbers);
console.log("Sorted array in ascending order:", sortAscending(someNumbers));
// //b.   Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array

function modifyArray(array) {
    let sortedArray = sortAscending(array);
    let firstThree = sortedArray.slice(0, 3);
    let lastThree = sortedArray.slice(-3);
    return lastThree.concat(sortedArray, firstThree);
}

// Example usage:
var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
console.log("Modified array:", modifyArray(someNumbers));
// //c.    From the same sorted array, also display the first 3 numbers.



function displayFirstThree(array) {
    let sortedArray = sortAscending(array);
    return sortedArray.slice(0, 3);
}

// Example usage:
var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
console.log("First three numbers from sorted array:", displayFirstThree(someNumbers));

// //17.   Create a function that determines the age classification of people:
// //Bellow are classifications according to specific conditions:
 
// //MIMICRY:             0 - 12
// //SELF-DISCOVERY:     13 - 19
// //COMMITMENT:         20 - 45
// //LEGACY:            46 - Above
function ageClassification(age) {
    if (age >= 0 && age <= 12) {
        return "MIMICRY";
    } else if (age >= 13 && age <= 19) {
        return "SELF-DISCOVERY";
    } else if (age >= 20 && age <= 45) {
        return "COMMITMENT";
    } else {
        return "LEGACY";
    }
}

// Example usage:
console.log(ageClassification(10));  // Output: MIMICRY
console.log(ageClassification(16));  // Output: SELF-DISCOVERY
console.log(ageClassification(30));  // Output: COMMITMENT
console.log(ageClassification(60));  // Output: LEGACY

// //18.    Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
//    // How to calculate Body Mass Index:
//    // BMI = weight(kg) / (height(m) x height(m))
   function calculateBMI(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

function classifyBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Example usage:
var weight = 70; // in kilograms
var height = 1.75; // in meters
var bmi = calculateBMI(weight, height);
var classification = classifyBMI(bmi);

console.log("BMI:", bmi.toFixed(2));
console.log("Classification:", classification);
// //19.    Create a function that counts the number of characters that make up a string.
// //N.B: Add conditions that will make sure that spaces will not be counted in the number of characters.
// //Example:
// //For the string: “Hello World”
// //The number of characters is 10
function countCharacters(str) {
    // Remove spaces from the string using regular expression
    var stringWithoutSpaces = str.replace(/\s/g, '');
    // Return the length of the modified string
    return stringWithoutSpaces.length;
}

// Example usage:
var inputString = "Hello World";
console.log("The number of characters is:", countCharacters(inputString));
// //20. Create a function that displays an even number between 1 and 100
function displayEvenNumbers() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}

// Call the function to display even numbers between 1 and 100
displayEvenNumbers();

// //21.Write a function that calculates the square of a number.
function calculateSquare(number) {
    return number * number;
}

// Example usage:
console.log(calculateSquare(5)); // Output: 25
console.log(calculateSquare(7)); // Output: 49
//22. Write a function that checks if a number is even.
function isEven(number) {
    return number % 2 === 0;
}

// Example usage:
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
// //23. Write a function that checks if a number is odd.
function isOdd(number) {
    return number % 2 !== 0;
}

// Example usage:
console.log(isOdd(3)); // Output: true
console.log(isOdd(6)); // Output: false
// //24.Write a function that returns the maximum of two numbers.
function maxOfTwoNumbers(num1, num2) {
    return Math.max(num1, num2);
}

// Example usage:
console.log(maxOfTwoNumbers(5, 10)); // Output: 10
console.log(maxOfTwoNumbers(-3, -7)); // Output: -3
console.log(maxOfTwoNumbers(8, 8)); // Output: 8 (if both numbers are equal, it returns one of them)
// //25.Write a function that returns the minimum of two numbers.
function minOfTwoNumbers(num1, num2) {
    return Math.min(num1, num2);
}

// Example usage:
console.log(minOfTwoNumbers(5, 10)); // Output: 5
console.log(minOfTwoNumbers(-3, -7)); // Output: -7
console.log(minOfTwoNumbers(8, 8)); // Output: 8 (if both numbers are equal, it returns one of them)
// //26.Write a function that calculates the factorial of a number.
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

// Example usage:
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
console.log(factorial(0)); // Output: 1 (0! is defined as 1 by convention)
// //27.Write a function that calculates the factorial of a number.
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

// Example usage:
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
console.log(factorial(0)); // Output: 1 (0! is defined as 1 by convention)
// //28.Write a function that checks if a string is a palindrome.
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return cleanStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
// //29. Create a function that displays odd numbers between 1 and 100
function displayOddNumbers() {
    for (let i = 1; i <= 100; i++) {
        // Check if the number is odd
        if (i % 2 !== 0) {
            console.log(i); // Display the odd number
        }
    }
}

// Call the function to display odd numbers between 1 and 100
displayOddNumbers();


// //30.    Create a function that displays multiples of 5
function displayMultiplesOf5() {
    for (let i = 5; i <= 100; i += 5) {
        console.log(i);
    }
}

// Call the function to display multiples of 5
displayMultiplesOf5();


// //31.    Create a function that returns the square root of a given number.
function squareRoot(num) {
    return Math.sqrt(num);
}

// Example usage:
console.log(squareRoot(16)); // Output: 4


// //32.   Create a function that receives two numbers and returns the bigger number.
function biggerNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Example usage:
console.log(biggerNumber(10, 5)); // Output: 10


// //33.    Create a function that receives a string and changes it into capital letters.
function capitalizeString(str) {
    return str.toUpperCase();
}

// Example usage:
console.log(capitalizeString("hello")); // Output: "HELLO"


// //34    Create a function called “stringModifier”. This function allows a user to provide a string, and then provide the position they want to modify, and a character to replace the modified one from the string. This function will receive 3 arguments the first argument will be a string, the second will be the position of a specific.
function stringModifier(str, position, replacement) {
    if (position >= 0 && position < str.length) {
        return str.substring(0, position) + replacement + str.substring(position + 1);
    } else {
        return "Invalid position";
    }
}

// Example usage:
console.log(stringModifier("example", 3, "X")); // Output: "exaXple"


// //35    Write a function that counts the number of vowels in a string.
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countVowels("hello")); // Output: 2
// //36.   Write a function that counts the number of consonants in a string.
function countConsonants(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let count = 0;
    for (let char of str) {
        if (consonants.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countConsonants("Hello World")); // Output: 7 (H, l, l, W, r, l, d are consonants)


// //37.   Write a function that finds the index of a given character in a string.
function findIndexOfChar(str, char) {
    return str.indexOf(char);
}

// Example usage:
console.log(findIndexOfChar("Hello World", "o")); // Output: 4 (Index of 'o' in "Hello World")


// //38.   Write a function that removes duplicates from an array.
function removeDuplicates(array) {
    return Array.from(new Set(array));
}

// Example usage:
let cy = [1, 2, 3, 2, 4, 5, 4];
console.log(removeDuplicates(cy)); // Output: [1, 2, 3, 4, 5] (Duplicates are removed)


// //39   Write a function that checks if a given value is present in an array.
function isValuePresent(array, value) {
    return array.includes(value);
}

// Example usage:
let fruits = ["apple", "banana", "cherry"];
console.log(isValuePresent(fruits, "banana")); // Output: true
console.log(isValuePresent(fruits, "orange")); // Output: false


// //40.   Write a function that squares each element of an array.
function squareArrayElements(array) {
    return array.map(num => num * num);
}

// Example usage:
let nums = [1, 2, 3, 4, 5];
console.log(squareArrayElements(numbers)); // Output: [1, 4, 9, 16, 25] (Each element is squared)
// //41    Write a function that returns the first n elements of an array.
function firstNElements(array, n) {
    return array.slice(0, n);
}

// Example usage:
let num = [1, 2, 3, 4, 5];
console.log(firstNElements(numbers, 3)); // Output: [1, 2, 3] (First 3 elements)


// //42.    Write a function that removes the last element from an array.
function removeLastElement(array) {
    array.pop();
    return array;
}

// Example usage:
let fruit = ["apple", "banana", "cherry"];
console.log(removeLastElement(fruits)); // Output: ["apple", "banana"] (Last element "cherry" is removed)


// //43.   Write a function that sorts an array of numbers in ascending order.
function sortNumbersAscending(array) {
    return array.slice().sort((a, b) => a - b);
}

// Example usage:
let n = [3, 1, 5, 2, 4];
console.log(sortNumbersAscending(numbers)); // Output: [1, 2, 3, 4, 5] (Numbers are sorted in ascending order)


// //44.   Write a function that checks if all elements in an array are positive.
function areAllPositive(array) {
    return array.every(num => num > 0);
}

// Example usage:
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [1, -2, 3, 4, 5];
console.log(areAllPositive(numbers1)); // Output: true
console.log(areAllPositive(numbers2)); // Output: false (Because of -2)


// //45.    Write a function that calculates the sum of the even numbers in an array.
function sumOfEvenNumbers(array) {
    return array.filter(num => num % 2 === 0).reduce((acc, cur) => acc + cur, 0);
}

// Example usage:
let x = [1, 2, 3, 4, 5];
console.log(sumOfEvenNumbers(x)); // Output: 6 (Sum of even numbers: 2 + 4)


// //46.    Write a function that converts an array of strings to uppercase.
function stringsToUppercase(array) {
    return array.map(str => str.toUpperCase());
}

// Example usage:
let strings = ["apple", "banana", "cherry"];
console.log(stringsToUppercase(strings)); // Output: ["APPLE", "BANANA", "CHERRY"] (Strings are converted to uppercase)
// //47.   Write a function that generates a random number between a given range.
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(generateRandomNumber(1, 100)); // Output: A random number between 1 and 100


// //48.   Write a function that returns the reverse of an array.
function reverseArray(array) {
    return array.slice().reverse();
}

// Example usage:
let y = [1, 2, 3, 4, 5];
console.log(reverseArray(y)); // Output: [5, 4, 3, 2, 1] (Reversed array)


// //49.   Write a function that calculates the Fibonacci sequence up to n numbers.
function fibonacciSequence(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Example usage:
console.log(fibonacciSequence(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] (Fibonacci sequence up to 10 numbers)


// //50.    Write a function that checks if an array is sorted in ascending order.
function isArraySortedAscending(array) {
    return array.every((num, index) => index === 0 || num >= array[index - 1]);
}

// Example usage:
let numbers3 = [1, 2, 3, 4, 5];
let numbers4 = [5, 2, 3, 4, 1];
console.log(isArraySortedAscending(numbers3)); // Output: true
console.log(isArraySortedAscending(numbers4)); // Output: false (Not sorted in ascending order)


// //51.   Write a function that filters out negative numbers from an array.
function filterOutNegativeNumbers(array) {
    return array.filter(num => num >= 0);
}

// Example usage:
let z = [-1, 2, -3, 4, -5];
console.log(filterOutNegativeNumbers(z)); // Output: [2, 4] (Negative numbers are filtered out)


// //52.   Write a function that calculates the square root of a number.
function squareRoot(number) {
    return Math.sqrt(number);
}

// Example usage:
console.log(squareRoot(16)); // Output: 4 (Square root of 16)


// //53.   Write a function that finds the median of an array of numbers.
function findMedian(array) {
    let sortedArray = array.slice().sort((a, b) => a - b);
    let mid = Math.floor(sortedArray.length / 2);
    if (sortedArray.length % 2 === 0) {
        return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    } else {
        return sortedArray[mid];
    }
}

// Example usage:
let numbers5 = [1, 3, 5];
let numbers6 = [2, 4, 6, 8];
console.log(findMedian(numbers5)); // Output: 3 (Median of [1, 3, 5])
console.log(findMedian(numbers6)); // Output: 5 (Median of [2, 4, 6, 8])
// //54.   Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
console.log(capitalizeFirstLetter("hello world")); // Output: "Hello World"


// //55.   Write a function that checks if a given year is a leap year.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage:
console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2021)); // Output: false


// //56.   Write a function that finds the intersection of two arrays.
function arrayIntersection(array1, array2) {
    return array1.filter(value => array2.includes(value));
}

// Example usage:
let array3 = [1, 2, 3, 4, 5];
let array4 = [4, 5, 6, 7, 8];
console.log(arrayIntersection(array3, array4)); // Output: [4, 5]


// //57.   Write a function that checks if a number is prime.
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(12)); // Output: false


// //58.   Write a function that returns the power of a number (base, exponent).
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Example usage:
console.log(power(2, 3)); // Output: 8 (2^3)


// //59.   Write a function that calculates the area of a rectangle.
function calculateRectangleArea(length, width) {
    return length * width;
}

// Example usage:
console.log(calculateRectangleArea(4, 5)); // Output: 20 (Area of rectangle with length 4 and width 5)


// //60.   Write a function that calculates the perimeter of a rectangle.
function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

// Example usage:
console.log(calculateRectanglePerimeter(4, 5)); // Output: 18 (Perimeter of rectangle with length 4 and width 5)


// //61.   Write a function that checks if a given string contains only digits.
function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}

// Example usage:
console.log(containsOnlyDigits("12345")); // Output: true
console.log(containsOnlyDigits("abc123")); // Output: false


// //62.    Write a function that counts the number of words in a sentence.
function countWords(sentence) {
    return sentence.split(' ').length;
}

// Example usage:
console.log(countWords("This is a sample sentence.")); // Output: 5
// //63.    Write a function that converts a temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Example usage:
console.log(celsiusToFahrenheit(20)); // Output: 68 (20°C to Fahrenheit)


// //64.   Write a function that generates a pyramid pattern of a given height.
function generatePyramid(height) {
    let pyramid = '';
    for (let i = 1; i <= height; i++) {
        pyramid += ' '.repeat(height - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    return pyramid;
}

// Example usage:
console.log(generatePyramid(5)); // Output: Pyramid pattern of height 5


// //65.    Switch Case:
// //a.  Calculator Switch:
// // Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input and uses a switch case to perform the corresponding operation.
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

// Example usage:
console.log(calculator(5, 3, '+')); // Output: 8 (5 + 3)

// // b.    Day of Week:
// // Create a program that takes a number representing a day of the week (1-7) and outputs the name of the day.
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return 'Sunday';
        case 2:
            return 'Monday';
        case 3:
            return 'Tuesday';
        case 4:
            return 'Wednesday';
        case 5:
            return 'Thursday';
        case 6:
            return 'Friday';
        case 7:
            return 'Saturday';
        default:
            return 'Invalid day number';
    }
}

// Example usage:
console.log(getDayOfWeek(3)); // Output: "Tuesday"

// // c.    Grade System:
// // Design a grading system that takes a student's score as input and returns the corresponding grade using a switch case.
function getGrade(score) {
    switch (true) {
        case score >= 90:
            return 'A';
        case score >= 80:
            return 'B';
        case score >= 70:
            return 'C';
        case score >= 60:
            return 'D';
        default:
            return 'F';
    }
}

// Example usage:
console.log(getGrade(85)); // Output: "B"

// // d.    Traffic Light:
// // Simulate a traffic light using a switch case. The program should output the color of the traffic light based on user input (1 for red, 2 for yellow, and 3 for green).
function getTrafficLightColor(colorNumber) {
    switch (colorNumber) {
        case 1:
            return 'Red';
        case 2:
            return 'Yellow';
        case 3:
            return 'Green';
        default:
            return 'Invalid color number';
    }
}

// Example usage:
console.log(getTrafficLightColor(2)); // Output: "Yellow"

// // e.    Month Name:
// // Write a program that takes a number (1-12) representing a month and outputs the name of the month using a switch case.
function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            return 'Invalid month number';
    }
}

// Example usage:
console.log(getMonthName(9)); // Output: "September"

// // f.    Simple Menu:
// // Implement a simple menu system using a switch case. The menu should have options for different operations, and the program should execute the selected operation.
function menu(option) {
    switch (option) {
        case 1:
            return 'Option 1 selected';
        case 2:
            return 'Option 2 selected';
        case 3:
            return 'Option 3 selected';
        default:
            return 'Invalid option';
    }
}

// Example usage:
console.log(menu(2)); // Output: "Option 2 selected"

// // g.    Currency Converter:
// // Build a currency converter that converts between different currencies using a switch case. Users should input the amount, source currency, and target currency.
function currencyConverter(amount, sourceCurrency, targetCurrency) {
    let result;

    switch (sourceCurrency.toLowerCase()) {
        case 'usd':
            switch (targetCurrency.toLowerCase()) {
                case 'eur':
                    result = amount * 0.84;
                    break;
                case 'gbp':
                    result = amount * 0.72;
                    break;
                // Add more cases for other currencies as needed
                default:
                    result = 'Invalid target currency';
            }
            break;
        case 'eur':
            switch (targetCurrency.toLowerCase()) {
                case 'usd':
                    result = amount * 1.19;
                    break;
                case 'gbp':
                    result = amount * 0.86;
                    break;
                // Add more cases for other currencies as needed
                default:
                    result = 'Invalid target currency';
            }
            break;
        // Add cases for other source currencies as needed
        default:
            result = 'Invalid source currency';
    }

    return result;
}

// Example usage
console.log(currencyConverter(100, 'USD', 'EUR')); // Output: 84


// // h.    Shape Area:
// // Write a program that calculates and outputs the area of different shapes (circle, square, triangle) based on user input using a switch case.
function calculateShapeArea(shape, dimensions) {
    let area;

    switch (shape.toLowerCase()) {
        case 'circle':
            area = Math.PI * Math.pow(dimensions.radius, 2);
            break;
        case 'square':
            area = Math.pow(dimensions.sideLength, 2);
            break;
        case 'triangle':
            area = 0.5 * dimensions.base * dimensions.height;
            break;
        default:
            area = 'Invalid shape';
    }

    return area;
}

// Example usage
console.log(calculateShapeArea('circle', { radius: 5 })); // Output: 78.54

// // i.    Season Detector:
// // Create a program that takes a month as input and outputs the corresponding season (spring, summer, fall, winter) using a switch case.
function detectSeason(month) {
    let season;

    switch (month.toLowerCase()) {
        case 'january':
        case 'february':
        case 'december':
            season = 'winter';
            break;
        case 'march':
        case 'april':
        case 'may':
            season = 'spring';
            break;
        case 'june':
        case 'july':
        case 'august':
            season = 'summer';
            break;
        case 'september':
        case 'october':
        case 'november':
            season = 'fall';
            break;
        default:
            season = 'Invalid month';
    }

    return season;
}

// Example usage
console.log(detectSeason('January')); // Output: winter
console.log(detectSeason('April')); // Output: spring
console.log(detectSeason('July')); // Output: summer
console.log(detectSeason('October')); // Output: fall
console.log(detectSeason('February')); // Output: winter

// // 66.    Loops on Arrays:
// // a.    Array Sum:
// // Write a function that calculates the sum of all elements in an array.
function arraySum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
const numb = [1, 2, 3, 4, 5];
console.log(arraySum(numb)); // Output: 15



// // b.    Even Numbers:
// Create a program that prints all even numbers from an array.
function printEvenNumbers(arr) {
    arr.forEach(num => {
        if (num % 2 === 0) {
            console.log(num);
        }
    });
}

// Example usage:
const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printEvenNumbers(v); // Output: 2 4 6 8 10



// // c.    Array Reverse:
// // Implement a function to reverse the elements of an array.
function reverseArray(arr) {
    return arr.reverse();
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]




// // d.    Array Filter:
// // Write a program that filters out all elements less than 10 from an array.
function filterLessThanTen(arr) {
    return arr.filter(num => num >= 10);
}

// Example usage:
const u = [5, 10, 15, 20, 25];
console.log(filterLessThanTen(u)); // Output: [10, 15, 20, 25]




// // e.    Array Average:
// // Calculate and print the average of elements in an array.
function arrayAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

// Example usage:
const m = [1, 2, 3, 4, 5];
console.log(arrayAverage(m)); // Output: 3


// // f.    Array Search:
// // Implement a function that searches for a specific element in an array and returns its index.
function arraySearch(arr, target) {
    return arr.indexOf(target);
}

// Example usage:
const w = [1, 2, 3, 4, 5];
console.log(arraySearch(w, 3)); // Output: 2 (index of element 3 in the array)




// // g.    Duplicate Elements:
// // Write a program to find and print duplicate elements in an array.
function findDuplicateElements(arr) {
    const duplicates = [];
    arr.forEach((value, index) => {
        if (arr.indexOf(value) !== index && !duplicates.includes(value)) {
            duplicates.push(value);
        }
    });
    return duplicates;
}

// Example usage:
const q = [1, 2, 3, 2, 4, 5, 4, 6];
console.log(findDuplicateElements(q)); // Output: [2, 4]




// // h.    Array Sorting:
// // Sort an array of numbers in ascending order using any sorting algorithm.
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// Example usage:
const k = [3, 1, 5, 2, 4];
console.log(sortArray(k)); // Output: [1, 2, 3, 4, 5]

// // 67.    Loops on Objects:
// // a.    Object Properties:
// // Write a program to print all the properties of an object.
function printObjectProperties(obj) {
    for (let prop in obj) {
        console.log(prop);
    }
}

// Example usage:
const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};
printObjectProperties(myObject);




// // b.    Object Values:
// // Create a function that prints all the values of an object.
function printObjectValues(obj) {
    for (let prop in obj) {
        console.log(obj[prop]);
    }
}

// Example usage:
const Object = {
    name: 'John',
    age: 30,
    city: 'New York'
};
printObjectValues(Object);



// // c.    Object Key Search:
// // Implement a function that searches for a specific key in an object.
function searchObjectKey(obj, key) {
    return key in obj;
}

// Example usage:
const myObj = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(searchObjectKey(myObj, 'age')); // Output: true
console.log(searchObjectKey(myObj, 'gender')); // Output: false



// // d.    Object Manipulation:
// // Write a program that modifies the values of an object based on certain conditions.
function modifyObjectValues(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'number') {
            obj[prop] *= 2; // For example, doubling numeric values
        }
    }
}

// Example usage:
const myObje = {
    value1: 5,
    value2: 10,
    value3: 15
};
modifyObjectValues(myObj);
console.log(myObj);



// // e.    Object Filtering:
// // Create a function that filters out key-value pairs from an object based on a condition.
function filterObject(obj, condition) {
    const filteredObj = {};
    for (let prop in obj) {
        if (condition(obj[prop])) {
            filteredObj[prop] = obj[prop];
        }
    }
    return filteredObj;
}

// Example usage:
const Obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const filteredObject = filterObject(Obj, value => typeof value === 'string');
console.log(filteredObject);




// // f.    Object Merging:
// // Combine two objects into a single object.
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Example usage:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject);




// // g.    Object Size:
// // // Write a program that calculates and prints the number of key-value pairs in an object.
// function getObjectSize(obj) {
//     return Object.keys(obj).length;
// }

// // Example usage:
// const myOb = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// console.log(getObjectSize(myOb));



// // h.    Nested Object:
// // Access and print values from a nested object.
// const myObjec = {

//     person: {
//         name: 'John',
//         age: 30
//     }
// };

// console.log(myObjec.person.name);



// // i.    Object Sorting:
// // Sort the keys of an object in alphabetical order.
function sortObjectKeys(obj) {
    const sortedKeys = Object.keys(obj).sort();
    const sortedObject = {};
    sortedKeys.forEach(key => {
        sortedObject[key] = obj[key];
    });
    return sortedObject;
}

// Example usage:
const p = {
    b: 2,
    a: 1,
    c: 3
};
console.log(sortObjectKeys(p));



// // j.    Object Transformation:
// // Create a function that transforms the values of an object (e.g., convert all values to uppercase).
function transformObjectValues(obj, transformFunction) {
    const transformedObject = {};
    for (let prop in obj) {
        transformedObject[prop] = transformFunction(obj[prop]);
    }
    return transformedObject;
}

// Example usage:
const t = {
    name: 'John',
    age: 30
};
const upperCaseObject = transformObjectValues(t, value => value.toUpperCase());
console.log(upperCaseObject);





// // 68.    Functions Programming:
// // a.    Power Function:
// // Implement a function to calculate the power of a number.
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Example usage
console.log(power(2, 3)); // Output: 8


// // b.    Array Max and Min:
// // Write a function that finds the maximum and minimum values in an array.
function findMaxMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}

// Example usage
const e = [5, 2, 9, 1, 6];
console.log(findMaxMin(e)); // Output: { max: 9, min: 1 }


// // c.    The sum of Digits:
// // Calculate the sum of digits of a given number using a function.
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

// Example usage
console.log(sumOfDigits(123)); // Output: 6 (1 + 2 + 3)


// // d.    GCD (Greatest Common Divisor):
// // Write a function to find the greatest common divisor of two numbers.
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

// Example usage
console.log(gcd(12, 18)); // Output: 6


// // e.    Random Number Generator:
// // Create a function that generates a random number within a specified range.
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
console.log(generateRandomNumber(1, 10)); // Output: Random number between 1 and 10

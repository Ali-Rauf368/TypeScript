/*Create a function called isNumberInRange with 3 numerical parameters:

number
min
max
The function returns:

true: if number is in the range between min and max
false: if number is not in the range between min and max
For example:

console.log(isInRange(2, 0, 5)); // true
console.log(isInRange(10, 0, 5)); // false
console.log(isInRange(100, 50, 500)); // true
console.log(isInRange(-1, -50, 50)); // true
console.log(isInRange(0, -50, 50)); // true*/
 function isInRange(number:number, min:number ,max:number){
    if(number>min && number<max){
        return true;
    }else
    {
        return false ;
    }

 }
 console.log(isInRange(2, 0, 5)); // true
console.log(isInRange(10, 0, 5)); // false
console.log(isInRange(100, 50, 500)); // true
console.log(isInRange(-1, -50, 50)); // true
console.log(isInRange(0, -50, 50)); // true*/
/*Task 2 
Task 2 - ends with "ing"?
Create a function called endsWithIng that accepts a string in input and returns:

true: if the string ends with "ing"
false: if the string does not end with "ing"
Make sure that the function is case insensitive.

For example:

endsWithIng("hello"); // false
endsWithIng("going"); // true
endsWithIng("ALAN TURING"); // true
endsWithIng("ding ding"); // true
endsWithIng("making of"); // false*/
console.log("-----Task 2 ")
function endsWithIng(input: string): boolean {
    const EndInput = input.toLowerCase();
    return EndInput.endsWith("ing");
}

console.log(endsWithIng("hello")); // false
console.log(endsWithIng("going")); // true
console.log(endsWithIng("ALAN TURING")); // true
console.log(endsWithIng("ding ding")); // true
console.log(endsWithIng("making of")); // false
/**
 Task 3 - starts with "the"?
Create a function called startsWithThe that accepts a string in input and returns:

true: if the string starts with "the"
false: if the string does not start with "the"
Make sure that the function is case insensitive.

For example:

startsWithThe("hello"); // false
startsWithThe("theremin"); // true
startsWithThe("The Clash"); // true
startsWithThe("ding ding"); // false 
startsWithThe("making of"); // false
 */

console.log("-----Task 3 ")

function startsWithThe(input: string): boolean {
    const SInput = input.toLowerCase();
    return SInput.startsWith("the");
}

console.log(startsWithThe("hello"));       // false
console.log(startsWithThe("theremin"));    // true
console.log(startsWithThe("The Clash"));   // true
console.log(startsWithThe("ding ding"));   // false
console.log(startsWithThe("making of"));   // false
/**Task 4 - is first letter lower case?
Create a function called isFirstLetterLowercase that takes a string in input and returns:

true: if the first letter is lower case
false: if the first letter is not lower case or if the string is an empty string
For example:

isFirstLetterLowerCase("hello"); // true
isFirstLetterLowerCase("Hello"); // false
isFirstLetterLowerCase("Bianca"); // false
isFirstLetterLowerCase("jim"); // true
isFirstLetterLowerCase(""); // false
isFirstLetterLowerCase("A"); // false  */

console.log("-----Task 4 ")
function isFirstLetterLowerCase(input: string): boolean {
    if (input.length === 0) {
        return false;
    }
    const firstLetter = input.charAt(0);
    return firstLetter === firstLetter.toLowerCase();
}

console.log(isFirstLetterLowerCase("hello")); // true
console.log(isFirstLetterLowerCase("Hello")); // false
console.log(isFirstLetterLowerCase("Bianca")); // false
console.log(isFirstLetterLowerCase("jim")); // true
console.log(isFirstLetterLowerCase("")); // false
console.log(isFirstLetterLowerCase("A")); // false
/**
 Task 5 - cheaperThan
Write a function called cheaperThan that takes in input an array containing a list of prices and a number.

It returns a new array with only the prices that are smaller than the number

For example:

cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 20); // [19.99, 12.99, 5.00, 2.90]
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 90); // [19.99, 29.87, 12.99, 5.00, 2.90]
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 0); // []
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 5); // [2.9]
 */
console.log("-----Task 5 ")
function cheaperThan(prices: number[], limit: number): number[] {
    const resultArray: number[] = [];
    for (const price of prices) {
        if (price < limit) {
            resultArray.push(price);
        }
    }
    return resultArray;
}

console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 20)); // [19.99, 12.99, 5.00, 2.90]
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 90)); // [19.99, 29.87, 12.99, 5.00, 2.90]
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 0));  // []
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 5));  // [2.9]
console.log("-----Task 6 ")
/*Write a function called wordsThatEndWithIng that takes an array of strings in input and returns a new array containing 
only words that end with ing.

The function should be case insensitive.

For examples:

wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"]); // ["working", "ping"]
wordsThatEndWithIng(["table", "jeans", "small"]); // []
wordsThatEndWithIng(["walking", "ing"]); // ["walking", "ing"] */
function wordsThatEndWithIng(words: string[]): string[] {
    return words.filter(word => word.toLowerCase().endsWith("ing"));
}

// Test cases
console.log(wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"])); // ["working", "ping"]
console.log(wordsThatEndWithIng(["table", "jeans", "small"])); // []
console.log(wordsThatEndWithIng(["walking", "ing"])); // ["walking", "ing"]


/**
Write a function called numbersDivisibleBy3 that takes an array of number in input and returns 
a new array containing only the numbers from the original array that are divisible by 3.

For example:

numbersDivisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [3, 6, 9]
numbersDivisibleBy3([2, 4, 8]); // []
numbersDivisibleBy3([9]); // [9] */
console.log("-----Task 7 ")
function numbersDivisibleBy3(numbers: number[]): number[] {
    const resultArray: number[] = [];
    for (const number of numbers) {
        if (number % 3 === 0) {
            resultArray.push(number);
        }
    }
    return resultArray;
}

// Testing the function with example cases
console.log(numbersDivisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [3, 6, 9]
console.log(numbersDivisibleBy3([2, 4, 8])); // []
console.log(numbersDivisibleBy3([9])); // [9]

console.log("-----Task 8")
/**Create a function onlyLongWords that takes a string in input 
 * and returns new string containing only the words that are 5 or more characters long.

For example:

onlyLongWords("Welcome to Wikipedia the free encyclopedia that anyone can edit"); // "Welcome Wikipedia encyclopedia anyone"
onlyLongWords("The cat is on the table"); // "table"
onlyLongWords("not many long ones here"); // "" */
function onlyLongWords(sentence: string): string {
   return sentence.split(" ").filter(str => str.length >= 5).join(" ");
}

// Test cases
console.log(onlyLongWords("Welcome to Wikipedia the free encyclopedia that anyone can edit")); // "Welcome Wikipedia encyclopedia anyone"
console.log(onlyLongWords("The cat is on the table")); // "table"
console.log(onlyLongWords("not many long ones here")); // ""
console.log("-----Task 9")
/**Task 9 - addLeadingZero
Write a function called addLeadingZero that takes an array of numbers in input and 
returns a new array containing the same numbers where if the number is only 1 digit long, a zero is added at the beginning. Also, the numbers in the final array should be strings.

For example:

addLeadingZero([0, 1, 2, 3, 10, 11, 12]); ["00", "01", "02", "03", "10", "11", "12"]
addLeadingZero([1, 100]); ["01", "100"]
addLeadingZero([1, 2, 3]); ["01", "02", "03"] */
function addLeadingZero(numbers: number[]): string[] {
    return numbers.map(num => num.toString().padStart(2, '0'));
}

console.log(addLeadingZero([0, 1, 2, 3, 10, 11, 12])); // ["00", "01", "02", "03", "10", "11", "12"]
console.log(addLeadingZero([1, 100])); // ["01", "100"]
console.log(addLeadingZero([1, 2, 3])); // ["01", "02", "03"]

/**Task 10 - cutStrings
Write a function called cutStrings which takes in input an array with a few sentences and a number. 
It returns a new array containing the sentences from the input array shortened to the length specified in the number. 
It also adds three dots ... at the end of each cut sentence

For example:

cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 10); ["Hello my n...", "Today is q...", "Cats are t...", "This movie..."]

cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 2); ["He...", "To...", "Ca...", "Th..."]
 */
console.log("-----Task 10")
function cutStrings(sentences: string[], maxLength: number): string[] {
    return sentences.map(sentence => {
     
            return sentence.slice(0, maxLength)+ "...";;
       
    });
}

console.log(cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 10));
console.log(cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 2));

console.log("-----Task 11")
/**Write a function called durationInHours that takes in input an array with numbers representing the duration of movies in minutes 
 * and returns a new array containing the duration expressed in hours. If the result is not an integer number, discard the decimal part.

For example:

durationInHours([120, 60, 80, 90, 100]); // [2, 1, 1, 1, 1]
durationInHours([50, 20, 180]); // [0, 0, 3] */
function  durationInHours(minutes: number[]): number[] {
    return minutes.map(duration => Math.floor(duration / 60));
}
console.log(durationInHours([120, 60, 80, 90, 100])); // [2, 1, 1, 1, 1]
console.log(durationInHours([50, 20, 180])); // [0, 0, 3]

console.log("-----Task 12")
/**Task 12 - reverse words
Write a function called reverseWords that takes in input an array of words and returns a new array with all the words reversed

For example:

reverseWords(["cat", "shoe", "one", "sos", "hello"]); // ["tac", "eohs", "eno", "sos", "olleh"] */
function reverseWords(words: string[]): string[] {
    return words.map(word => word.split("").reverse().join(""));
}

console.log(reverseWords(["cat", "shoe", "one", "sos", "hello"]));

console.log("-----Task 13")
/**Task 13 - count consonants
Write a function called countConsonants that takes a string in input and returns the number of consonants (letters that are not: a, e, i, o, u) in the string. Empty space and other symbols are also not consonants.

For example:

countConsonants("hello"); // 3
countConsonants("aeiou"); // 0
countConsonants("be right back"); // 8
countConsonants("JavaScript"); // 7 */

function countConsonants(input: string): number {
    const vowels = 'aeiouAEIOU';
    let consonantCount = 0;

    for (let char of input) {
        if ( !vowels.includes(char) && char !== ' ') {
            consonantCount++;
        }
    }

    return consonantCount;
}

console.log(countConsonants("hello"));      
console.log(countConsonants("aeiou"));        
console.log(countConsonants("be right back"));
console.log(countConsonants("JavaScript"));

console.log("-----Task 14")
/**Task 14 - sum even numbers
Write a function called sumEvenNumbers that takes an array in input and returns the sum of all the even numbers in the array.

For example:

sumEvenNumbers([1, 2, 3, 4, 5, 6]); 12
sumEvenNumbers([100]); 100
sumEvenNumbers([100, 1, 3]); 100
sumEvenNumbers([-2, 4, 3]); 2  */

function sumEvenNumbers(numbers: number[]): number {
    return numbers.reduce((sum, num) => {
      if (num % 2 === 0) {
        return sum + num;
      }
      return sum;
    }, 0);
  }
  
  // Test cases
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
  console.log(sumEvenNumbers([100])); 
  console.log(sumEvenNumbers([100, 1, 3]));
  console.log(sumEvenNumbers([-2, 4, 3]));


  console.log("-----Task 15")
  /**ask 15 - count by color
Write a function called countByColor that takes in input an array with objects of 3 possible colors: red, yellow, green.

It returns a new array where:

at index 0, there is the number of red objects in the array
at index 1, there is the number of yellow objects in the array
at index 2, there is the number of green objects in the array
For example:

countByColor(["Red pen", "Yellow shirt"]); // [1, 1, 0]
countByColor(["Red pen", "Yellow shirt", "Green salad"]); // [1, 1, 1]
countByColor(["Pink hair", "Blue sky"]); // [0, 0, 0]
countByColor(["Yellow table", "Yellow piano", "Green guitar]); // [0, 2, 1] */

function countByColor(items: string[]): number[] {
    const colors = ["red", "yellow", "green"];
    const counts = [0, 0, 0];

    items.forEach(item => {
        const lowerCaseItem = item.toLowerCase();
        colors.forEach((color, index) => {
            if (lowerCaseItem.includes(color)) {
                counts[index]++;
            }
        });
    });

    return counts;
}


console.log(countByColor(["Red pen", "Yellow shirt"])); 
console.log(countByColor(["Red pen", "Yellow shirt", "Green salad"])); 
console.log(countByColor(["Pink hair", "Blue sky"])); 
console.log(countByColor(["Yellow table", "Yellow piano", "Green guitar"])); 

/*Task 16 - sumEvenOdd
Write a function called sumEvenOdd that takes in input an array of numbers and returns a new array where:

at index 0 there is the sum of all the even numbers in the array
at index 1 there is the sum of all the odd numbers in the array
for example:

sumEvenOdd([1, 2, 3, 4, 5, 6]);  // [12, 9]
sumEvenOdd([0, -2, 11]);  // [-2, 11]
sumEvenOdd([1, 3, 15]);  // [0, 19]*/

console.log("---16")
function sumEvenOdd( numbers: number[]):number[]{
    let sumEven = 0;
    let sumOdd = 0;

    for (const num of numbers) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }

    return [sumEven, sumOdd];
}

console.log(sumEvenOdd([1, 2, 3, 4, 5, 6])); 
console.log(sumEvenOdd([0, -2, 11])); 
console.log(sumEvenOdd([1, 3, 15])); 
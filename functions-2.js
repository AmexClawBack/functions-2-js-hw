// /* 
// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
// */

maxOfTwoNumbers = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

console.log(maxOfTwoNumbers(24, 76));  
// // maxOfThree();

// /*
// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// */
maxOfThree = (num1, num2, num3) => {
  if (num1 > (num2 && num3)) {
    return num1;
  } else if (num2 > (num1 && num3)) {
    return num2;
  } else {
    return num3;
  }
};

console.log(maxOfThree(2443, 755, 130));   

// /*
// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// */
isCharacterAVowel = (str) => {
  if (str === ('a' || 'i' || 'o' || 'u' || 'e')) {
    return true;
  } else {
    return false;
  }
};

console.log(isCharacterAVowel('l'));   

// /*
// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// */

sumArray = (numbers) => {
  let total = 0;  // variable to store iteration sums
  for (let i = 0; i < numbers.length ; i++) {
     total += numbers[i];
    
  }
  return total;
};

console.log(sumArray([1,2,3,4]));

multiplyArray = (numbers) => {
  let total = 1;  // Any number multiplied by 0 will always be 0
  for (let i = 0; i < numbers.length; i++) {
    total = (total * numbers[i]); // why wont this work with *=
  }
  return total;

}

console.log(multiplyArray([1,2,3,4])); // dont forget all parenthesis when console logging functions; returns undefined.

// /*
// 5.Write a function that returns the number of arguments passed to the function when called.
// */


function test(a, e, s, h,s, s){
  console.log(arguments.length);
}
test("4","5",8, 5);



/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (str) => {
  let text = '';

  for (let i = str.length - 1; i >= 0; i--) {
    text += str[i];
  }
  return text
};

console.log(reverseString("stanley yelnats"));
/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (arr) => {
 let longest = arr[0]
   for (let i = 0; i < arr.length; i++) {
     if (longest.length < arr[i].length) {
       longest = arr[i];
     }
    
   }
   return longest.length;
 }
 console.log(findLongestWord(['test', 'nonetheless', 'atomic']))
/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (array, number) => {
  let finalArray = []; 
  for(let i = 0 ; i < array.length; i++){
  if(array[i].length > number){
  finalArray.push(array[i]);   
} 
} 
return finalArray 
};


console.log(filterLongWords(['tender', 'balogni', 'macaroni', 'hi', 'tenderloin']))

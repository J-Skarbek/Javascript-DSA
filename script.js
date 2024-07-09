// function addUpToFast(n) {
//   return n * (n + 1) / 2;
// }

// function addUpToSlow(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

//From the faster script

// var time1 = performance.now();
// addUpToFast(1000000000);
// var time2 = performance.now();
// console.log(`FAST PERFORMANCE: Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

//From the slower script

// var t1 = performance.now();
// addUpToSlow(1000000000);
// var t2 = performance.now();
// console.log(`SLOW PERFORMANCE: Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// https://rithmschool.github.io/function-timer-demo/

// Simplifying big O nottation, constants don't matter:

// O(2n) -> O(n) *lineaer
// O(500) -> O(1) *constant
// O(12n^2) -> O(n^2) *quadratic

// O(n^2 + 5n + 8) -> O(n^2)

// General rules of thumb
// 1.) Arithmetic operations are constant
// 2.) Variable assignment is constant
// 3.) Accessing elements in an array (by index) or object (by key) is constant
// 4.) In a loop, the complexity is the length of the loop times the complexity of whatever happens
//     inside of the loop

// General rules of thumb for space complexity in JS

// 1.) most primitives (booleans, numbers, undefined, null) are constant space
// 2.) Strings require O(n) space (where n is the length of the string) (ie. n will dictact the space needed relative to a single character string)
// 3.) Reference types are generallly O(n), where n is the length (for arrays) or the number of keys (for objects)

console.log('Frequency Counters / Anagrams')

function validAnagram(stringOne, stringTwo) {

  const arrayOne = stringOne.split('');
  const arrayTwo = stringTwo.split('');

  let freqCounterOne = {};
  let freqCounterTwo = {};

  if (arrayOne.length !== arrayTwo.length) {
    console.log('The two strings are of different lengths, thus not an anagram');
    return true;
  }

  console.log(`First Array: ${arrayOne}`);
  console.log(`Second Array: ${arrayTwo}`);

  for (const val of arrayOne) {
    freqCounterOne[val] = (freqCounterOne[val] || 0) + 1;
   }

  for (const val of arrayTwo) {
    freqCounterTwo[val] = (freqCounterTwo[val] || 0) + 1;
  }

  console.log(`arrayOne: ${freqCounterOne}`);
  console.log(`arrayTwo: ${freqCounterTwo}`);

  console.table(freqCounterOne);
  console.table(freqCounterTwo);

  for (const key in freqCounterOne) {
    if (!(key in freqCounterTwo)) {
      console.log('This is not an anagram -- there is a missig letter/s from string2');
      return;
    }

    if (freqCounterTwo[key] !== freqCounterOne[key]) {
      console.log('This is not an anagram -- the frequency of characters do not match.');
      return false;
    } else {
      console.log('The two strings are an anagram');
      return false;
    }
  }

}

validAnagram('j3elly', 'llyedj');


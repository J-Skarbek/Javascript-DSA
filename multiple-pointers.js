console.log('multiple pointers');

function countUniqueValues(arr) {

  //Note: this solution mutates the array, and adds the unique values to the beginning -- NEED TO
  // LOOK UP BEST WAY TO DO THIS WITHOUT MODIFIYING ARRAY CONTENTS

  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }

  console.log(`The length of the array is ${arr.length}`);
  console.log(`The unique values in the array is ${i + 1}`);
  return i + 1;
  
  // while (count < arr.length) {
  //   if (left === right) {
  //     right = arr;
  //   } else {
  //     count += 1;
  //     left += 1;
  //   }
  // }
}

const array = [-6, -5, -2, 0, 1, 2, 2, 2, 3, 4, 5, 6, 7];

const arrayTwo = [-6, -5, -2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 15, 15, 15, 15, 15, 55, 105, 125, 150];

const empty = [];

countUniqueValues(array);
countUniqueValues(arrayTwo);
countUniqueValues(empty);
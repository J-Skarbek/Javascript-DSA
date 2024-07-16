console.log('Binary Search');

// http://127.0.0.1:5500/index.html

const array = [
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99, 101
];

function binarySearch(arr, value) {
  let left = 0; //low number/pointer
  let right = arr.length - 1; //high number/pointer
  let middle;

  console.log(`Left pointer: ${left}`);
  console.log(`Right pointer: ${right}`);
  // console.log(`Middle pointer: ${middle}`);
  // console.log(arr.length);

//   if (middle === value) {
//     console.log(`The value of ${value} was found -- directly in the middle of the array.`);
//     return array.indoxOf(middle);
//   }

//   while (right >= left) {
//     middle = Math.ceil(arr.length / 2);
//     // console.log(`Middle: ${middle}`);
//     // console.log(`Value: ${value}`);

//     if (arr[middle] === value) {
//       // console.log(`Middle array value: ${arr[middle]}`)
//       console.log(`The value of ${value} was found -- directly in the middle of the array.`);
//       return array.indoxOf(middle);
//     }

//     if (arr[middle] > value) {
//       // console.log(`Middle array value: ${arr[middle]}`)
//       right = middle -= 1;
//       console.log(`Right's new index value: ${right}`);
//     } else {
//       // console.log(`Middle array value: ${arr[Math.ceil(arr.length / 2)]}`)
//       left = middle += 1;
//       console.log(`Left's new value: ${left}`)
//     }

//     // return -1;
//   }

//   return -1;
}

binarySearch(array, 13);

//After this line is the instructor provided solution -- need to practice this

function binary(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.ceil((start + end) / 2);
  // console.log(`Start: ${start} || Middle: ${middle} || End: ${end}`);

  while (arr[middle] !== value && start <= end) {
    if (value > arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.ceil((start + end) / 2);
    console.log(`Start: ${start} || Middle: ${middle} || End: ${end}`);
  }
  if (arr[middle] === value) {
    console.log(`The value of ${value} was found in the array using binary search.`)
    return middle;
  } else {
    console.log(`The value of ${value} was NOT found in the array using binary search.`)

    return -1;
  }
}

binary(array, 7);

binary(array, 79);

binary(array, 64)
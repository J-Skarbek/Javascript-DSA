console.log('****Bubble Sort****');

const bubbleArray = [7, 22, 99, 100, 101, 57, 65, 58, 98, 105, 2, 0, 15, 34, 68];

function bubbleSort(arr) {
  for (let i = arr.length ; i > 0 ; i--) {
    for (let j = 0; j < i - 1 ; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, arr[j], arr[j + 1]);
      }
    }
  }

  console.log(arr);
  return arr;
}

function swap(arr, indexOne, indexTwo) {
  let temp = arr[indexOne]; //create a temp variable and assign it the first index
  arr[indexOne] = arr[indexTwo]; // Overwrite the first index value with the second index value
  arr[indexTwo] = temp; //overwrite the second index value with the first index value that was stored into 'temp'
}


// bubbleSort(bubbleArray);
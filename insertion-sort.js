console.log('INSERTION SORT***********');

const insertionArray = [6, 17, 22, 105, 999, 75, 0, 88, 1, 15, 64, 726, 444, 3, 2, 11, 14, 4000, 56, 206];

function insertionSort(arr) {

  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      // arr[j + 1] = currentVal;
      console.log(arr[j]);
    }
    arr[j + 1] = currentVal;
  }
  console.log(arr);
  return arr;
}

insertionSort(insertionArray);
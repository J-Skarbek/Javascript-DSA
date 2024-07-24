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

function insertionSorter(arr) {
  // Start with an outer loop that will iterate through every item in the array
  for (var i = 1; i < arr.length; i++) {
    //Create a variable to store the value of the current value we're comparing to
    let currentVal = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > currentVal; j--) {
      //NOTE: for the inner loop, we are 'looking back' to the value to the left
      // of i, thus j is set to be i - 1
      //NOTE 2: the comparison operation is handled in the loop syntax directly instea
      //of being down here, the following code will only execute on the inner loop iteration
      // IF the value of j is 0 or greater AND the value at arr[j] is greter than the value
      // of the currentVal variable
      //The inner loop will iterate as long as j is greater than -1 AND the value
      // at arr[j] is greater than the value stored in current value
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  console.log(arr);
  return arr;

};

insertionSorter(insertionArray);
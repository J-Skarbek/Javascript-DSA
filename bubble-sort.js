console.log('****Bubble Sort****');

const bubbleArray = [7, 22, 99, 100, 101, 57, 65, 58, 98, 105, 2, 0, 15, 34, 68];

function bubbleSort(arr) {
  let noSwaps; // Create a flag varaible
  for (let i = arr.length ; i > 0 ; i--) {
    noSwaps = true; // Set this flag to true for each pass of the outer loop 
    for (let j = 0; j < i - 1 ; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap(arr, arr[j], arr[j + 1]); // Need to look into getting the helper function to also work
        // should also get used to the es2015 version shown
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false; // anytime a swap needs to happe, noSwaps is set to false, if the outer loop
        //gets to a point where swaps are starting to not happen, noSwaps then reverts back to true,
        //and once the loop sees it's value is truthy, it breaks out of the loop
      }
    }
    if (noSwaps) break;
  }

  console.log(arr);
  return arr;
}

function swap(arr, indexOne, indexTwo) {
  let temp = arr[indexOne]; //create a temp variable and assign it the first index
  arr[indexOne] = arr[indexTwo]; // Overwrite the first index value with the second index value
  arr[indexTwo] = temp; //overwrite the second index value with the first index value that was stored into 'temp'
  // return arr;
}


bubbleSort(bubbleArray);

//Note on bubble sort: with the above, if you have an array (or other data structure) where it's mostly
//in order, but not quite, you need to 'short circuit' the code because if you do this as is, the looping
//of the code will still run over each item in the array, looking to sort stuff, even if it's all sorted after
// the first pass or two through the array -- see the noSwaps flag variable
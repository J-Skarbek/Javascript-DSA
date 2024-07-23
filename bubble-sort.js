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

const swapES6 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}


bubbleSort(bubbleArray);

//Note on bubble sort: with the above, if you have an array (or other data structure) where it's mostly
//in order, but not quite, you need to 'short circuit' the code because if you do this as is, the looping
//of the code will still run over each item in the array, looking to sort stuff, even if it's all sorted after
// the first pass or two through the array -- see the noSwaps flag variable

console.log('***More Bubble Sorting');

function bubble(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    //This loop is the outer loop, it starts at the end of the array and decrements down to zero
    // in essense, this loop is used to make sure we iternate through each existing value in the array, but not
    // much else
    noSwaps = true;
    //noSwaps works as a flag, essentially if noSwaps = true, then nothing swapped in the current iteration
    // and therefor we can move to the next iteration without swapping values in the array
    for (let j = 0; j < i - 1; j++) {
      //inner loop sets works from the opposite direction, starting at the beginning of the array and incrementing to the end
      // for each iteration, it looks at the value at the index ofJ, and then the value at the index of J + 1
      if (arr[j] > arr[j + 1]) {
        //if the value at the index of J is greater than J + 1 (i.e. [3, 2]) then the swap function is called
        // which changes these two values to be in this order [2, 3]
        swap(arr, arr[i], arr[j]);
        noSwaps = false;
        // Because the swap occured if the condition evaluates to true, the noSwaps flag is changed to false
        // Through each iteration, we use this to help us break out of the outer loop, should we get to a point where
        // Swaps are not needed due to all the items in the array already being in order
      }
    }
    if (noSwaps) break;
  }
  console.log(`Updated bubble sort: ${arr}`);
  return arr;
}

bubble(bubbleArray);

function anotherBubbleSort(arr) {
  let swap;
  for (let i = arr.length; i > 0; i--) {
    //This loop starts at the end position of the array fed into the function, and creates an outer loop 
    //to ensure we loop over each element in the array
    swap = false; //In this function, swap is set to false on each iteration of the outer loop, then...
    for (let j = 0; j < i - 1; j++) {
      //This inner loop then inits at the beginning position of the array, and runs so long as j is less than
      // the value of i - 1, so if i = 4 then i - 1 = 3. eventually as it increments, j starts at zero, then
      // goes to 1, then 2, but wouldn't run once j hits 3 as j would no longer be < i - 1, in that outer loops
      // iteration -- essentially what happens is because the bubbling moves the greater number to the end of the array
      // we don't need to keep looking at the last number, or penulitimate number and so forth as with each iteration
      // a largest number bubbles towards the end of the array
      if (arr[j] > arr[j + 1]) {
        // if the value of arr[j] (which would the the left value of the two comparators), is greater than
        // the value of arr[j + 1], then we swap the two, thus bubbling the higher numer to the right, and
        // eventually, to the end of the array

        swapES6(arr, arr[i], arr[j]);
        swap = true; //This only triggers if arr[j] and arr[j + 1] actually swap
      }
    }
    if (swap) break; // this conditional runs on the outer loop only, if the outer loop steps through each pair of
    //items the array and nothing swaps, we kill the loop to optimize the function performance
  }

  console.log(`Yet another bubble sort example: ${arr}`);
  return arr;
}

anotherBubbleSort(bubbleArray);
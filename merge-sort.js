console.log('******MERGESORT*****');

const arrOne = [2,3,4,5,6,7,7,8,9,10];
const arrTwo = [0,1,2];

//Note: this is basically a helper function to the mergeSort() funciton
function merge(arr, secondArr) {
  //This function assumes the two arrays passed in are already sorted;

  //Create a new array to put sorted values into
  const sortedArray = [];
  //create a pointer for the outer loop
  let i = 0;
  //create a pointer for the inner loop
  let j = 0;

  //This first loop runs as long as i AND j are less than the length of their
  //respective arrays
  while(i < arr.length && j < secondArr.length) {
    // if the item in the second array is larger than the value in the first array
    //we push in the value of the item in the first array, because it is SMALLER, therefore
    //it is inserted first -- then we increment the value of i by 1 and the loop continues
    if (secondArr[j] > arr[i]) {
      sortedArray.push(arr[i]);
      i++;
    } else {
      // If the value in the second array is smaller than the value of the pointer in the first array
      // Then we push in the value of the item in the second array, and increment j by 1
      // then the loop continues
      sortedArray.push(secondArr[j]);
      j++;
    }
  }

  //These next two loops will only really trigger once the above loop finishes,
  //add either the first or second array have more values than the other
  //so if in this code, the while (i < arr.length) will loop over the other values
  //in arr because there are more values in that array
  while(i < arr.length) {
    // console.log(arr[i])
    sortedArray.push(arr[i]);
    // Since the arrays passed in are sorted in a similar way (ie both ascending)
    // and the first loop has completed, the function will now loop through the remaining
    // values in the first array and push them into the sorted array, as the values
    // in the arr array are already sorted, and already we know they are higher values
    // than the values merged into the sorted array
    i++;
  }

  // This loop would only run if the second array has more values in it than the first
  while(j < secondArr.length) {
    sortedArray.push(secondArr[j]);
    j++;
  }

  // console.log(sortedArray);
  return sortedArray;
}

merge(arrOne, arrTwo);

function mergeSort(arr) {
  // This conditional check is the base case
  if (arr.length <= 1) return arr;

  // Since a single array is passed into this function, we need to split it up
  const midpoint =  Math.floor(arr.length / 2);
  // These next two values are created via recursively calling mergeSort again
  // and with each call, we return a call to merge(firstHalf, lastHalf)
  const firstHalf = mergeSort(arr.slice(0, midpoint));
  const lastHalf = mergeSort(arr.slice(midpoint));
  console.log(firstHalf);
  console.log(lastHalf);
  console.log(merge(firstHalf, lastHalf));
  return merge(firstHalf, lastHalf);

}

mergeSort(arrOne);



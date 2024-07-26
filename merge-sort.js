console.log('******MERGESORT*****');

const arrOne = [2,3,4,5,6,7,7,8,9,10];
const arrTwo = [0,1,2];

function merge(arr, secondArr) {

  const sortedArray = [];
  let i = 0;
  let j = 0;

  while(i < arr.length && j < secondArr.length) {
    if (secondArr[j] > arr[i]) {
      sortedArray.push(arr[i]);
      i++;
    } else {
      sortedArray.push(secondArr[j]);
      j++;
    }
  }

  while(i < arr.length) {
    // console.log(arr[i])
    sortedArray.push(arr[i]);
    i++;
  }

  while(j < secondArr.length) {
    sortedArray.push(secondArr[j]);
    j++;
  }

  // console.log(sortedArray);
  return sortedArray;
}

merge(arrOne, arrTwo);

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midpoint =  Math.floor(arr.length / 2);
  const firstHalf = mergeSort(arr.slice(0, midpoint));
  const lastHalf = mergeSort(arr.slice(midpoint));
  console.log(firstHalf);
  console.log(lastHalf);
  console.log(merge(firstHalf, lastHalf));
  return merge(firstHalf, lastHalf);


  // console.log(firstHalf);
  // console.log(lastHalf);
}

mergeSort(arrOne);



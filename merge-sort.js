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

  console.log(sortedArray);
  return sortedArray;
}

merge(arrOne, arrTwo);



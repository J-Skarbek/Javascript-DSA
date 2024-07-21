console.log('Selection Sort');

const selectionArray = [6, 17, 22, 105, 999, 75, 0, 88, 1, 15, 64, 726, 444, 3];

function selectionSort(arr) {
  let lowestValue;

  for (let i = 0; i < arr.length; i++) {
    lowestValue = i;
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[lowestValue]) {
        lowestValue = j;
      }
    }
    if (i !== lowestValue) {
    let temp = arr[i];
    arr[i] = arr[lowestValue];
    arr[lowestValue] = temp;
    }
  }

  console.log(arr);
  return arr;

}

selectionSort(selectionArray);
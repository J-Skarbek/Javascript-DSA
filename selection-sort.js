console.log('Selection Sort');

//Selection sort is similar to bubble sort, but instead of first placing large values
//into sorted position, it places small values into sorted position

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

function selectionSorter(arr) {
  let minValue; //init a variable to hold the lowest value in the array -- it will 
  // begin at arr[0] but quickly be replaced with the lowest value as we walk through
  // the values

  for (let i = 0; i < arr.length; i++) {
    // set up the min value varaible to take the value of i for each iteration through the loop
    minValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      // This inner loop sets the value of j to be the value directly next, to the right,
      // of the value of i in the array
      if (arr[j] < arr[minValue]) {
        //if the second value of the two values we're looking at (the right position) is
        // less than the value in the i (the left position)
        minValue = j;
        // we make the minvalue eqaul to the value of j
      }
    }
    if (i !== minValue) {
      // if the value of i is not equal to minValue
      let temp = arr[i];
      // assign the arr[i] value to a temp variable
      arr[i] = arr[minValue];
      // reassign the arr[i] value to be the arr[minValue]
      arr[minValue] = temp;
      // Then, reassign the temp value to the arr[minValue] position, swapping the two
    }
  }
  
  console.log(arr);
  return arr;

}

selectionSorter(selectionArray);
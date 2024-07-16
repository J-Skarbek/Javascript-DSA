console.log('Linear Search');

function linearSearch(arr, val) {

  for (const value of arr) {
    console.log(value);
    if (value === val) {
      console.log(`The value ${val} has been located in the array.`);
      return value;
    }
  }

  console.log('Search value not found');
  return false;
}

const linearTestArr = [2, 7, 9, 1, 10, 50, 55, 67, 6000, 500, 49, 10001, 1, 0, 23, 12];

linearSearch(linearTestArr, 7);
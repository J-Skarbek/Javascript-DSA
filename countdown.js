console.log('recursive countdown')

// Recursive Version
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// Iterative Version
// function countDown(num){
//     for(var i = num; i > 0; i--){
//         console.log(i);
//     }
//     console.log("All done!")
// }

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp){
    
  if (exp === undefined || exp === null) {
      const error = new Error('No Exponent provided');
      return error;
  }
  
  if (base === 1) {
      return 1;
  }
  
  let result;

  
  while (exp > 1) {
      result = base * base;
      console.log(base, result)
      power(base, exp -= 1);
      
  }
  
  return result;
  
}

// power(5, 5)


function powerSolution(base, exponent){
  if(exponent === 0) return 1;
  return base * power(base,exponent-1);
}

// powerSolution(6, 6)

// power(4, 4)


// function factorial(int){
//   if (int < 0) return 0;
//   if (int <= 1) return 1;
//   return int * factorial(int - 1);
// }

// console.log(`Factorial return: ${factorial(10)}`);

// function productOfArray(arr) {
//   if (arr && arr.length > 0) {
//     let accumulator;
//     for (const value of arr) {
//       if (value === 0) {
//         accumulator = value;
//       }
//       accumulator = accumulator * value;
//     }
//   }
//   productOfArray(arr)
// }\\

// function productOfArray(arr) {
//   let accumulator;
//   // console.log(arr.length)
//   if (arr.length === 0) {
//     return 'end of array';
//   }

//   if (arr[arr.length - 1]) {
//     return accumulator = arr[arr.length - 1];
//   } el
//   console.log(arr[arr.length - 1])
//   let val = arr.pop();
//   console.log(`multiply ${val} * ${accumulator}`)
//   val * accumulator;
//   return productOfArray(arr);
// }

// let testArr = [1, 3, 5, 7]

// console.log(productOfArray(testArr));

function productOfArray(arr) {
  if (arr.length === 0) { 
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1));
}

let testArr = [1, 3, 5, 7]

console.log(productOfArray(testArr));

function recursiveRange(int) {
  if (int === 0) return 0;
  console.log(int)

  return int += recursiveRange(int - 1)
}

console.log(recursiveRange(5));
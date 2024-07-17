console.log('naive string search');

const long = "tomorrow i go to the store";

const short = "to";

function stringSearch(longString, shortString) {
  let counter = 0;

  const shortStr = Array.from(shortString);
  // shortStr.forEach(char => {
  //   console.table(char);
  // })

  const longerStr = Array.from(longString);
  // longerStr.forEach((char, i) => {
  //   shortStr.forEach((char, j) => {
  //     if(char === i) {

  //     }
  //   })
  //   console.log(char);
  // })


  // loop through long array (i)
  // for each item, compare (j) to (i)
  // if it doesn't match, move to the next index in (i)/outer array
  // if it does match, move to the next char in both i and j, and see if they match
  // if they don't, then move on to incrementing the i loop again --> if they do match, counter ++

  for (let i = 0; i < longerStr.length; i++) {
    // console.log(`i = ${i}`);
    for (let j = 0; j < shortStr.length; j++) {
      // console.log(longerStr[i], shortStr[j]);
      if (shortStr[j] !== longerStr[i + j]) {
        break;
      }
      if (j == shortStr.length - 1) {
        counter++;
      }
    }

  }
  console.log(counter);
  return counter;

}

stringSearch(long, short);
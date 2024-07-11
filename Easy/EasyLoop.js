/*Code a for loop that runs through all numbers from 0-99 and append all numbers divisible by seven into a string. Return this string.*/

function easyLoop() {
  let string = ' ';
  for (let i = 0; i <100 ; i++) {
    if (i % 7 === 0) {
      string += i ;
    }
  }

  return string.trim();
}

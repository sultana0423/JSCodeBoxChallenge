/*Given is an array numbers with integers. Return true if a zero is next to a zero or a four is next to a four. Return false if both occure.*/

//CODE IS NOT FINISHED
function either404(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let zero = numbers[i] === 0 && numbers[i + 1] === 0;
    let four = numbers[i] === 4 && numbers[i + 1] === 4;
    // if (zero && four ) {
    //   return false;
    // } else if (zero || four) {
    //   return true;
    // }  else {
    //   return false;
    // }
    return zero && four? false : zero || four;
  }
}

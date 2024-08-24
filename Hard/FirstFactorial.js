/*Given is a number number. Return the product of the multiplacement of the individual numbers from 1 upwards.*/

function firstFactorial(number) {
  let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

/*Given is an array numbers. Return the number of odd numbers.*/

function countOdds(numbers) {
  return numbers.filter( n => n%2 ).length;
}

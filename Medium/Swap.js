/*Given is an array numbers with different numbers. 
Return an array in which the first entry is swapped with the last. The rest remains unchanged.*/

function swap(numbers) {
let first = numbers[0];
 let last = numbers[numbers.length - 1];
 numbers[0] = last;
 numbers[numbers.length - 1] = first;

  return numbers;
}

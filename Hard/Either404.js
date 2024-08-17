/*Given is an array numbers with integers. Return true if a zero is next to a zero or a four is next to a four. Return false if both occure.*/

function either404(numbers) {
  let hasZeroPair = false;
  let hasFourPair = false;

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === 0 && numbers[i + 1] === 0) {
      hasZeroPair = true;
    }
    if (numbers[i] === 4 && numbers[i + 1] === 4) {
      hasFourPair = true;
    }
  }

  if (hasZeroPair && hasFourPair) {
    return false;
  }

  return hasZeroPair || hasFourPair;
}

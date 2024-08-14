/*Given are two arrays inside and outside. Return true if all numbers present in inside array are also present in outside array.*/

function outsideIn(outside, inside) {
  return inside.every(value => outside.includes(value));
}

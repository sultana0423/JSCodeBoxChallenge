/*Three positive numbers are given: a, b and c. Return true if at least two of the numbers have the same last digit.*/

function lastButNotLeast(a, b, c) {
let aLastN = a % 10;
let bLasN = b % 10;
let cLastN = c % 10;

  return aLastN === bLasN || aLastN === cLastN || bLasN === cLastN ;
  
  
}

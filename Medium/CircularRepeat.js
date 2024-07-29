/*Given a string s and a number n, return a new string with the characters of s repeated n times consecutively in a circular manner. 
If the length of the new string is greater than 100, truncate it to a length of 100.*/

function circularRepeat(s, n) {
  let i = 0;
let string = [];
 while (i < n) {
     string.push(s);
     i++;
 }
  let joinedString =  string.join('');

  if (joinedString.length > 100) {
    joinedString = joinedString.substring(0,100);
}

  return joinedString;
}

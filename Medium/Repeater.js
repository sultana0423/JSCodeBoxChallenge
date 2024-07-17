/*Given is a String string and a number n. 
Return a string with the section from 0 to n in a row. 
In each run n is to be decremented.*/

function repeater(string, n) {
  let result = '';
    for (let i = n; i >= 0; i--) {
        result += string.substring(0, i);
    }
    return result;
}

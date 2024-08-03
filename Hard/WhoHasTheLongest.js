/*A string string is given. Return the number of the longest block. A block means a multiple occurrence of a letter in a row.*/

function longest(string) {
  if (string.length === 0) return 0;

    let maxL= 1;
    let currentL = 1;

    for (let i = 1; i < string.length; i++) {
        if (string[i] === string[i - 1]) {
            currentL++;
        } else {
            if (currentL > maxL) {
                maxL = currentL;
            }
            currentL = 1;
        } }
      return Math.max(maxL, currentL);
}

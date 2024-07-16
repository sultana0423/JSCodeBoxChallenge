/*Given is a string hangmanString. Replace every second letter with an underscore and return the result as a string. 
The first character must be an underscore.*/
function hangman(hangmanString) {
  let string = '_';
  for (let i = 1; i < hangmanString.length; i++) {
    if (i % 2 == 0) {
      string += '_';
    } else {
      string += hangmanString[i];
    }
  }

  return string ;
}

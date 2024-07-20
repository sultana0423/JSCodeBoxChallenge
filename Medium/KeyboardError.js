/*Given are two strings correct and wrong. Return all characters that are defective. 
You can recognize defective characters by the fact that they are displayed incorrectly in the string wrong. 
Return an array with their values.*/
 
 
function keyboardError(correct, wrong) {
   let correctWord;
   let wrongWord;
  let wrongValues = [];

  if (correct.includes(' ') && wrong.includes(' ')) {
     correctWord = correct.replaceAll(" ", "");
     wrongWord = wrong.replaceAll(" ", "");
 } else {
     correctWord = correct;
     wrongWord = wrong;
 }
  
  for (let i = 0; i < correctWord.length; i++) {
    if (correctWord[i] !== wrongWord[i]) {
      wrongValues.push(correctWord[i]);
    }
  }

  let wrongValue = [...new Set(wrongValues)];
  return wrongValue;
}
 


 

 
